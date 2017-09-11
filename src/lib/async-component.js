import React, {Component} from 'react';

export const makeComponentAsync = (chunkName, getComponent) => class AsyncComponent extends Component {
  static Component = null;
  mounted = false;

  constructor(props) {
    super(...props);
  }

  static load() {
    return getComponent()
      .then(c => c.default)
      .then(cmp => (
        (AsyncComponent.Component = cmp), (cmp))
      );
  }

  state = {
    Component: AsyncComponent.Component,
  };

  componentWillMount() {
    if(AsyncComponent.Component === null) {
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

  render() {
    const {Component} = this.state;

    if(Component) {
        return (<Component {...this.props} />);
    }
   return null;
  }
}

export default makeComponentAsync;
