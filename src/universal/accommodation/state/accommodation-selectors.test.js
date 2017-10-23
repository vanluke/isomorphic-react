import {initState} from './accommodation-reducer';
import {
  selectRoot,
  selectIsLoading,
  selectAccommodations,
  selectAccommodation,
  selectOpenCreateModal,
} from './accommodation-selectors';

describe('Accommodation selectors', () => {
  const state = {
    accommodation: {
      ...initState,
    },
  };
  it('should select root', () => {
    const actual = selectRoot(state);
    const expected = {...initState};

    expect(actual).toEqual(expected);
  });

  it('should select is loading', () => {
    const actual = selectIsLoading(state);
    const expected = false;

    expect(actual).toEqual(expected);
  });

  it('should select Accommodations', () => {
    const actual = selectAccommodations(state);
    const expected = [];

    expect(actual).toEqual(expected);
  });

  it('should select Accommodation', () => {
    const actual = selectAccommodation(state);
    const expected = undefined;

    expect(actual).toEqual(expected);
  });

  it('should select OpenCreateModal', () => {
    const actual = selectOpenCreateModal(state);
    const expected = false;

    expect(actual).toEqual(expected);
  });
});