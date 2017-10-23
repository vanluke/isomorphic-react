import React from 'react';
import {shallow} from 'enzyme';
import {createStore} from 'redux';
import TestContiner, {defaultStore} from './helpers-test';

describe('Test Container', () => {
  it('should render', () => {
    const wrapper = shallow(<TestContiner><span>children</span></TestContiner>);

    expect(wrapper.isEmptyRender()).toBeFalsy();
  });

  it('should have default store', () => {
    const wrapper = shallow(<TestContiner><span>children</span></TestContiner>);

    const actual = wrapper.prop('store');

    expect(actual).toEqual(defaultStore);
  });

  it('should accept new store', () => {
    const store = createStore(() => ({}));
    const wrapper = shallow(<TestContiner store={store}><span>children</span></TestContiner>);

    const actual = wrapper.prop('store');

    expect(actual).toEqual(store);
  });
});