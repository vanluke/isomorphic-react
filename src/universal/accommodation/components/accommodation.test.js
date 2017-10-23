import React from 'react';
import {shallow, mount} from 'enzyme';
import Accommodation from './accommodation';
import {
  Thumbnail,
  Title,
  Subtitle,
  Description,
  Price,
} from './accommodations-styled';

describe('Accommodation', () => {
  const props = {
    name: 'name',
    picture: 'pincture.png',
    about: 'about',
    balance: '$123',
    title: 'title',
  };

  it('should render', () => {
    const expected = 1;
    const wrapper = shallow(<Accommodation {...props} />);

    expect(wrapper).toHaveLength(expected);
  });

  it('should render Thumbnail', () => {
    const expected = 1;
    const wrapper = shallow(<Accommodation {...props} />);

    expect(wrapper.find(Thumbnail)).toHaveLength(expected);
  });

  it('should render Title', () => {
    const expected = props.name;
    const wrapper = mount(<Accommodation {...props} />);
    const actual = wrapper.find(Title).text();

    expect(actual).toEqual(expected);
  });

  it('should render Subtitle', () => {
    const expected = props.title;
    const wrapper = mount(<Accommodation {...props} />);
    const actual = wrapper.find(Subtitle).text();

    expect(actual).toEqual(expected);
  });

  it('should render Description', () => {
    const expected = props.about;
    const wrapper = mount(<Accommodation {...props} />);
    const actual = wrapper.find(Description).text();

    expect(actual).toEqual(expected);
  });

  it('should render Price', () => {
    const expected = `Cost: ${props.balance}`;
    const wrapper = mount(<Accommodation {...props} />);
    const actual = wrapper.find(Price).text();

    expect(actual).toEqual(expected);
  });
});
