import React from 'react';
import {shallow} from 'enzyme';
import routes from 'universal/routes';
import Root from './root';

describe('Root', () => {
  const props = {
    route: {
      routes,
    },
  };

  it('should render', () => {
    const wrapper = shallow(<Root {...props} />);

    expect(wrapper.isEmptyRender()).toBeFalsy();
  });
});
