import React from 'react';
import PropTypes from 'prop-types';
import {Spinner} from 'universal/spinner';
import Accommodation from './accommodation';
import AccommodationModal from './accommodation-modal';
import {
  Grid,
  Section,
  AddAccommodation,
  Layout,
} from './accommodations-styled';

const Accommodations = ({
  isLoading,
  accommodations,
  addAccommodation,
  openCreateModal,
  createAccommodation,
}) => (
  <Section>
    {openCreateModal && (<AccommodationModal
      addAccommodation={addAccommodation}
      onSubmit={createAccommodation}
    />)}
    {isLoading && (<Spinner />)}
    <Layout>
      <AddAccommodation onClick={addAccommodation}>
        <span>Add</span>
      </AddAccommodation>
      <Grid>
        {accommodations.map(acc => (<Accommodation
          key={acc.guid}
          {...acc}
        />))}
      </Grid>
    </Layout>
  </Section>
);

Accommodations.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  accommodations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ).isRequired,
  createAccommodation: PropTypes.func.isRequired,
  addAccommodation: PropTypes.func.isRequired,
  openCreateModal: PropTypes.bool.isRequired,
}; 

Accommodations.defaultProps = {
  accommodation: undefined,
};

export default Accommodations;
