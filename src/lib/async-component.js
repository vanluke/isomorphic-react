import React, {Component} from 'react';
import {Spinner} from 'universal/spinner';

export const makeComponentAsync = (chunkName, getComponent) =>
  class AsyncComponent extends Component {
    static Component = null;

    static load() {
      return getComponent()
        .then(c => (c.default ? c.default : c))
        .then(cmp => (
          (AsyncComponent.Component = cmp), (cmp)),
        );
    }
    displayName = Component.name || 'Component';

    constructor(props) {
      super(...props);
    }

    state = {
      Component: AsyncComponent.Component,
    };

    componentWillMount() {
      if (AsyncComponent.Component === null) {
        AsyncComponent.load()
          .then(cmp => this.mounted && this.setState({
            Component: cmp,
          }));
      }
    }

    componentDidMount() {
      this.mounted = true;
    }

    componentWillUnmount() {
      this.mounted = false;
    }

    mounted = false;

    render() {
      const {Component: CMP} = this.state;

      if (CMP) {
        return (<CMP {...this.props} />);
      }
      return (<Spinner />);
    }
  };

export default makeComponentAsync;
