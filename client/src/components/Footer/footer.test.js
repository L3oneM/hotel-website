import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

import { findByTestAtrr } from '../../test-utils/index';

const setUp = () => {
  const component = shallow(<Footer />);
  return component;
};

describe('Footer', () => {
  let component;

  beforeEach(() => {
    component = setUp();
    component.debug();
  });

  it('should render without errors', () => {
    const wrapper = findByTestAtrr(component, 'footerComponent');
    expect(wrapper.length).toBe(1);
  });

  it('should render a logo', () => {
    const wrapper = findByTestAtrr(component, 'footerLogo');
    expect(wrapper.length).toBe(1);
  });

  it('should render a logo', () => {
    const wrapper = findByTestAtrr(component, 'footerInfo');
    expect(wrapper.length).toBe(1);
  });
});
