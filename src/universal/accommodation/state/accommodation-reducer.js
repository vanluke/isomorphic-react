import {mapToReducer} from 'redux0-helpers';
import Immutable from 'seamless-immutable';
import {
  LOAD_ACCOMMODATION_START,
  LOAD_ACCOMMODATION_SUCCESS,
  LOAD_ACCOMMODATION_FAILS,
  CREATE_ACCOMMODATION_START,
  CREATE_ACCOMMODATION_FAILS,
  CREATE_ACCOMMODATION_SUCCESS,
  SELECT_ACCOMMODATION,
  OPEN_CREATE_ACCOMMODATION_MODAL,
} from './accommodation-constants';

export const initState = Immutable({
  accommodations: [],
  openCreateModal: false,
  accommodation: undefined,
  isLoading: false,
  error: undefined,
});

export const accomodationReducer = mapToReducer({
  [LOAD_ACCOMMODATION_START]: state => state.set('isLoading', true),
  [LOAD_ACCOMMODATION_SUCCESS]: (state, {payload}) => state
    .set('isLoading', false)
    .set('accommodations', payload.accommodations),
  [LOAD_ACCOMMODATION_FAILS]: (state, {payload}) => state
    .set('isLoading', false)
    .set('error', payload.error),
  [SELECT_ACCOMMODATION]: (state, {payload}) => state
    .set('accommodation', payload.accommodation),
  [OPEN_CREATE_ACCOMMODATION_MODAL]: state => state
    .set('openCreateModal', !state.openCreateModal),
  [CREATE_ACCOMMODATION_START]: state => state.set('isLoading', true),
  [CREATE_ACCOMMODATION_FAILS]: (state, {payload}) => state
    .set('isLoading', false)
    .set('error', payload.error),
  [CREATE_ACCOMMODATION_SUCCESS]: (state, {payload}) => state
    .set('isLoading', false)
    .set('openCreateModal', false)
    .set('accommodations', payload.accommodations)
    .set('error', payload.error),
})(initState);
