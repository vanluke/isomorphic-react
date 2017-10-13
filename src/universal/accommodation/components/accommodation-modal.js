import React from 'react';
import PropTypes from 'prop-types';
import AccommodationForm from './accommodation-redux-form';
import {
  Modal,
  Close,
  ModalHeader,
  ModalTitle,
} from './accommodations-styled';

const AccommodationModal = ({addAccommodation, onSubmit}) => (<Modal>
  <ModalHeader>
    <ModalTitle>Create Accommodation</ModalTitle>
    <div><Close onClick={addAccommodation} /></div>
  </ModalHeader>
  <AccommodationForm onSubmit={onSubmit} />
</Modal>);

AccommodationModal.propTypes = {
  addAccommodation: PropTypes.func.isRequired, 
  onSubmit: PropTypes.func.isRequired, 
};

export default AccommodationModal;
