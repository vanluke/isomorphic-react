import React from 'react';
import {shallow, mount} from 'enzyme';
import {StaticRouter} from 'react-router-dom';
import {Nav} from 'universal/components/nav';
import Landing from './landing';

describe('Landing page', () => {
  const context = {};
  it('should render', () => {
    const wrapper = shallow(<Landing />);

    expect(wrapper.isEmptyRender()).toBeFalsy();
  });

  it('should render Nav', () => {
    const wrapper = mount(<StaticRouter context={context}><Landing /></StaticRouter>);
    const actual = wrapper.find(Nav);

    expect(actual).toHaveLength(1);
  });

  it('should have location defined', () => {
    const wrapper = mount(<StaticRouter context={context}><Landing /></StaticRouter>);
    const actual = wrapper.prop('location');

    expect(actual).toBeDefined();
  });
});
