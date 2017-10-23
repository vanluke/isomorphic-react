import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Accommodations from 'universal/accommodation/components';
import withSSR from 'lib/with-server-side';
import {
  loadAccommodationStart,
  selectIsLoading,
  selectAccommodations,
  loadAccommodations,
  createAccommodationStart,
  selectOpenCreateModal,
  openCreateAccommodationModal,
} from './state';

export class Accommodation extends PureComponent {
  componentDidMount() {
    const {initialize} = this.props;
    initialize();
  }

  render() {
    return (<Accommodations
      {...this.props}
    />);
  }
}

Accommodation.propTypes = {
  initialize: PropTypes.func.isRequired,
};

const serverConnect = [
  {
    action$: loadAccommodationStart,
    epic: loadAccommodations,
  },
];

export const mapStateToProps = state => ({
  isLoading: selectIsLoading(state),
  openCreateModal: selectOpenCreateModal(state),
  accommodations: selectAccommodations(state),
});

export const mapDispatchToProps = dispatch => ({
  initialize: () => dispatch(loadAccommodationStart()),
  createAccommodation: accommodation => dispatch(createAccommodationStart(accommodation)),
  addAccommodation: () => dispatch(openCreateAccommodationModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withSSR(Accommodation, serverConnect));

