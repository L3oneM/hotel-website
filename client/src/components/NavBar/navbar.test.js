import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

import { findByTestAtrr } from '../../test-utils/index';

const setUp = (props = {}) => {
  const component = shallow(<Navbar {...props} />);
  return component;
};

describe('Navbar Component', () => {
  let component;

  beforeEach(() => {
    component = setUp();
    component.debug();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAtrr(component, 'navbarComponent');
    expect(wrapper.length).toBe(1);
  });

  it('should render 5 links', () => {
    const wrapper = findByTestAtrr(component, 'navbarLink');
    expect(wrapper.length).toBe(5);
  });

  it('should render a logo', () => {
    const wrapper = findByTestAtrr(component, 'navbarLogo');
    expect(wrapper.length).toBe(1);
  });
});
