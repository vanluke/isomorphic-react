import {ActionsObservable, createEpicMiddleware} from 'redux-observable';
import {createAction} from 'redux0-helpers';
import {Observable} from 'rxjs/Observable';
import configureMockStore from 'redux-mock-store';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import {
  LOAD_ACCOMMODATION_START,
  LOAD_ACCOMMODATION_SUCCESS,
  CREATE_ACCOMMODATION_START,
  CREATE_ACCOMMODATION_SUCCESS,
} from './accommodation-constants';
import {loadAccommodations, createAccommodation} from './accommodation-epics';

describe('Accommodation epics', () => {
  describe('createAccommodation', () => {
    const dependencies = {
      accommodationService: {
        createAccommodation: accommodation => Observable.of(({
          response: {
            0: {
              ...accommodation,
            },
          },
        })),
      },
    };
    const epicMiddleware = createEpicMiddleware(createAccommodation, {dependencies});
    const mockStore = configureMockStore([epicMiddleware]);
    let store = mockStore();

    beforeEach(() => {
      store = mockStore();
    });

    afterEach(() => {
      epicMiddleware.replaceEpic(createAccommodation);
    });

    it('should dispatch accommodations actions', () => {
      const payload = {
        accommodation: {
          name: 'name',
        },
      };
      store.dispatch(createAction(CREATE_ACCOMMODATION_START)(payload.accommodation));

      expect(store.getActions()).toEqual([
        createAction(CREATE_ACCOMMODATION_START)(payload.accommodation),
        createAction(CREATE_ACCOMMODATION_SUCCESS)({accommodations: [payload.accommodation]}),
      ]);
    });

    it('should create accommodation', () => {
      const accommodation = {name: 'name'};
      const action$ = ActionsObservable.of(createAction(CREATE_ACCOMMODATION_START)(accommodation));
      const expected = {
        type: CREATE_ACCOMMODATION_SUCCESS,
        payload: {accommodations: [accommodation]},
      };

      createAccommodation(action$, store, dependencies).subscribe((actual) => {
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('loadAccommodations', () => {
    const dependencies = {
      accommodationService: {
        getAccommodations: () => Observable.of(({
          response: {
            0: {
              name: 'name',
            },
          },
        })),
      },
    };
    const epicMiddleware = createEpicMiddleware(loadAccommodations, {dependencies});
    const mockStore = configureMockStore([epicMiddleware]);
    let store = mockStore();

    beforeEach(() => {
      store = mockStore();
    });

    afterEach(() => {
      epicMiddleware.replaceEpic(loadAccommodations);
    });

    it('should load accommodations', () => {
      const action$ = ActionsObservable.of(createAction(LOAD_ACCOMMODATION_START)());
      const expected = {
        type: LOAD_ACCOMMODATION_SUCCESS,
        payload: {accommodations: [{name: 'name'}]},
      };

      loadAccommodations(action$, store, dependencies).subscribe((actual) => {
        expect(actual).toEqual(expected);
      });
    });

    it('should dispatch accommodations actions', () => {
      const payload = {
        accommodations: [
          {
            name: 'name',
          },
        ],
      };
      store.dispatch({type: LOAD_ACCOMMODATION_START});

      expect(store.getActions()).toEqual([
        {type: LOAD_ACCOMMODATION_START},
        {type: LOAD_ACCOMMODATION_SUCCESS, payload},
      ]);
    });
  });
});
