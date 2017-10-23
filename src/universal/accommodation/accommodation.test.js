import React from 'react';
import configureMockStore from 'redux-mock-store';
import {createEpicMiddleware, combineEpics} from 'redux-observable';
import {shallow, mount} from 'enzyme';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import TestContainer from 'universal/utils/helpers-test';
import {loadAccommodations, createAccommodation} from 'universal/accommodation/state';
import Accommodation from './accommodation';
import Accommodations from './components/accommodation';
import {initState} from './state/accommodation-reducer';

describe('Accommodation', () => {
  describe('Container', () => {
    const dependencies = {
      accommodationService: {
        createAccommodation: accomodation => Observable.of([
          accomodation,
        ]),
        getAccommodations: () => Observable.of([]),
      },
    };
    const epicMiddleware = createEpicMiddleware(combineEpics(
      createAccommodation,
      loadAccommodations,
    ), {dependencies});
    const mockStore = configureMockStore([epicMiddleware]);
    let store = mockStore({
      accommodation: {
        ...initState,
        accommodations: [{
          title: 'title',
          balance: '$1',
          name: 'name',
          about: 'about',
        }],
      },
    });

    beforeEach(() => {
      store = mockStore({
        accommodation: {
          ...initState,
          accommodations: [{
            title: 'title',
            balance: '$1',
            name: 'name',
            about: 'about',
            picture: 'picture.png',
            guid: '1',
          }],
        },
      });
    });

    afterEach(() => {
      epicMiddleware.replaceEpic(createAccommodation);
    });

    it('should render', () => {
      const wrapper = shallow(<TestContainer><Accommodation /></TestContainer>);

      expect(wrapper.find(Accommodation)).toHaveLength(1);
    });

    it('should render Accomondations children', () => {
      const wrapper = mount(<TestContainer store={store}>
        <Accommodation />
      </TestContainer>);
      const actual = wrapper.find(Accommodations);
      expect(actual.isEmptyRender()).toBeFalsy();
    });
  });
});
