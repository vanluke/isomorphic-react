import {createAction} from 'redux0-helpers';
import {accomodationReducer, initState} from './accommodation-reducer';
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

describe('Accommodation reducer', () => {
  it('should handle LOAD_ACCOMMODATION_START', () => {
    const expected = {
      ...initState,
      isLoading: true,
    };
    const action = createAction(LOAD_ACCOMMODATION_START)();
    const actual = accomodationReducer(initState, action);

    expect(actual).toEqual(expected);
  });

  it('should handle LOAD_ACCOMMODATION_SUCCESS', () => {
    const expected = {
      ...initState,
      isLoading: false,
      accommodations: [],
    };
    const action = createAction(LOAD_ACCOMMODATION_SUCCESS)({accommodations: []});
    const actual = accomodationReducer(initState, action);

    expect(actual).toEqual(expected);
  });

  it('should handle LOAD_ACCOMMODATION_FAILS', () => {
    const expected = {
      ...initState,
      isLoading: false,
      error: {},
    };
    const action = createAction(LOAD_ACCOMMODATION_FAILS)({error: {}});
    const actual = accomodationReducer(initState, action);

    expect(actual).toEqual(expected);
  });

  it('should handle CREATE_ACCOMMODATION_START', () => {
    const expected = {
      ...initState,
      isLoading: true,
    };
    const action = createAction(CREATE_ACCOMMODATION_START)();
    const actual = accomodationReducer(initState, action);

    expect(actual).toEqual(expected);
  });
  it('should handle CREATE_ACCOMMODATION_SUCCESS', () => {
    const expected = {
      ...initState,
      isLoading: false,
      accommodations: [],
    };
    const action = createAction(CREATE_ACCOMMODATION_SUCCESS)({accommodations: []});
    const actual = accomodationReducer(initState, action);

    expect(actual).toEqual(expected);
  });
  it('should handle CREATE_ACCOMMODATION_FAILS', () => {
    const expected = {
      ...initState,
      isLoading: false,
      error: {},
    };
    const action = createAction(CREATE_ACCOMMODATION_FAILS)({error: {}});
    const actual = accomodationReducer(initState, action);

    expect(actual).toEqual(expected);
  });

  it('should handle SELECT_ACCOMMODATION', () => {
    const accommodation = {
      name: 'name',
    };
    const expected = {
      ...initState,
      accommodation,
    };
    const action = createAction(SELECT_ACCOMMODATION)({accommodation});
    const actual = accomodationReducer(initState, action);

    expect(actual).toEqual(expected);
  });

  it('should handle OPEN_CREATE_ACCOMMODATION_MODAL', () => {
    const expected = {
      ...initState,
      openCreateModal: !initState.openCreateModal,
    };
    const action = createAction(OPEN_CREATE_ACCOMMODATION_MODAL)();
    const actual = accomodationReducer(initState, action);

    expect(actual).toEqual(expected);
  });
});
