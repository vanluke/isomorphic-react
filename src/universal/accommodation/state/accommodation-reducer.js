import {mapToReducer} from 'redux0-helpers';
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

export const initState = {
  accommodations: [],
  openCreateModal: false,
  accommodation: undefined,
  isLoading: false,
  error: undefined,
};

export const accomodationReducer = mapToReducer({
  [LOAD_ACCOMMODATION_START]: state => ({
    ...state,
    isLoading: true,
  }),
  [LOAD_ACCOMMODATION_SUCCESS]: (state, {payload}) => ({
    ...state,
    isLoading: false,
    accommodations: payload.accommodations || [],
  }),
  [LOAD_ACCOMMODATION_FAILS]: (state, {payload}) => ({
    ...state,
    isLoading: false,
    error: payload.error,
  }),
  [SELECT_ACCOMMODATION]: (state, {payload}) => ({
    ...state,
    accommodation: payload.accommodation,
  }),
  [OPEN_CREATE_ACCOMMODATION_MODAL]: state => ({
    ...state,
    openCreateModal: !state.openCreateModal,
  }),
  [CREATE_ACCOMMODATION_START]: state => ({
    ...state,
    isLoading: true,
  }),
  [CREATE_ACCOMMODATION_FAILS]: (state, {payload}) => ({
    ...state,
    isLoading: false,
    error: payload.error,
  }),
  [CREATE_ACCOMMODATION_SUCCESS]: (state, {payload}) => ({
    ...state,
    accommodations: [...payload.accommodations],
    isLoading: false,
  }),
})(initState);
