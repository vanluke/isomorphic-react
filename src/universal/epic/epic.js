import {combineEpics} from 'redux-observable';
import {loadAccommodations, createAccommodation} from 'universal/accommodation/state';

export default combineEpics(
  createAccommodation,
  loadAccommodations,
);
