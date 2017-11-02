import React from 'react';
import PropTypes from 'prop-types';
import {Close} from 'universal/components/close';
import AccommodationForm from './accommodation-redux-form';
import {
  Modal,
  ModalHeader,
  ModalTitle,
} from './accommodation-modal.styled';

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
