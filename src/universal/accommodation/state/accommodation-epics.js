import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import {createAction} from 'redux0-helpers';
import {
  LOAD_ACCOMMODATION_START,
  LOAD_ACCOMMODATION_SUCCESS,
  LOAD_ACCOMMODATION_FAILS,
  CREATE_ACCOMMODATION_START,
  CREATE_ACCOMMODATION_SUCCESS,
  CREATE_ACCOMMODATION_FAILS,
  OPEN_CREATE_ACCOMMODATION_MODAL,
} from './accommodation-constants';

export const loadAccommodationStart = createAction(LOAD_ACCOMMODATION_START);
export const loadAccommodationSuccess = createAction(LOAD_ACCOMMODATION_SUCCESS);
export const loadAccommodationFails = createAction(LOAD_ACCOMMODATION_FAILS);
export const openCreateAccommodationModal = createAction(OPEN_CREATE_ACCOMMODATION_MODAL);

export const createAccommodationStart = createAction(CREATE_ACCOMMODATION_START);
export const createAccommodationSuccess = createAction(CREATE_ACCOMMODATION_SUCCESS);
export const createAccommodationFails = createAction(CREATE_ACCOMMODATION_FAILS);

export const loadAccommodations = (action$, store, {accommodationService}) =>
  action$.ofType(LOAD_ACCOMMODATION_START)
    .mergeMap(() => accommodationService.getAccommodations()
      .map(({response}) => Array.of(Object.values(response || {})))
      .map(accommodations => loadAccommodationSuccess({accommodations}))
      .catch(error => Observable.of(loadAccommodationFails({
        error,
      }))),
    );

export const createAccommodation = (action$, store, {accommodationService}) =>
  action$.ofType(CREATE_ACCOMMODATION_START)
    .mergeMap(action => accommodationService.createAccommodation(action.payload)
      .map(({response}) => Object.values(response))
      .map(accommodations => createAccommodationSuccess({accommodations}))
      .catch(error => Observable.of(createAccommodationFails({
        error,
      }))),
    );