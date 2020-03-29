import React from 'react';
import { shallow } from 'enzyme';
import Service from './Service';

import { findByTestAtrr } from '../../test-utils/index';

describe('Service component', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      service: {
        id: 1,
        title: 'testTitle',
        desc: 'textDesc',
        img: '/'
      }
    };

    wrapper = shallow(<Service {...props} />);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render correctly', () => {
    const component = findByTestAtrr(wrapper, 'serviceComponent');
    expect(component.length).toBe(1);
  });

  it('should render an img', () => {
    const component = findByTestAtrr(wrapper, 'serviceImg');
    expect(component.length).toBe(1);
  });

  it('should infoContainer to have text testTitletextDesc', () => {
    const link = findByTestAtrr(wrapper, 'serviceInfocontainer');
    expect(link.text()).toEqual('testTitletextDesc');
  });
});
