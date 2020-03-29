import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

describe('Homepage Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomePage />);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
});
