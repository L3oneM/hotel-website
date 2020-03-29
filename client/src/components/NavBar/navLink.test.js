import React from 'react';
import { shallow } from 'enzyme';
import NavLink from './NavLink';

import { findByTestAtrr } from '../../test-utils/index';

describe('Component renders', () => {
  let wrapper;
  let mockFunc;

  beforeEach(() => {
    mockFunc = jest.fn();
    const props = {
      currentPage: 'home',
      setCurrentPage: mockFunc,
      page: 'home'
    };
    wrapper = shallow(<NavLink {...props} />);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a link', () => {
    const link = findByTestAtrr(wrapper, 'linkComponent');
    expect(link.length).toBe(1);
  });

  it('should link to have text home(current)', () => {
    const link = findByTestAtrr(wrapper, 'linkComponent');
    expect(link.text()).toEqual('home(current)');
  });

  it('should link to have text home', () => {
    wrapper.setProps({ currentPage: 'pages' });
    const link = findByTestAtrr(wrapper, 'linkComponent');
    expect(link.text()).toEqual('home');
  });

  it('Should emit callback on click event', () => {
    const link = findByTestAtrr(wrapper, 'clickedlinkComponent');
    console.log(link);
    link.debug();
    link.simulate('click');
    const callback = mockFunc.mock.calls.length;
    expect(callback).toBe(1);
  });
});
