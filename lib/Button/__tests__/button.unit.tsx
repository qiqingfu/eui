import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Button from '../index';

describe('Button Component', () => {
  it('Button renders correctly', () => {
    const tree = renderer.create(<Button>Button</Button>);
    expect(tree).toMatchSnapshot();
  });

  it('Button default children', () => {
    const value = 'Default Value';
    const wrapper = shallow(<Button>{value}</Button>);
    const result = wrapper.find('span').last();

    expect(result.text()).toBe(value);
  });

  describe('Button props.size', () => {
    it('Default size middle', () => {
      const wrapper = shallow(<Button>Button</Button>);

      expect(wrapper.hasClass('middle')).toBeTruthy();
    });

    it('Set the value of props.size to small ', () => {
      const size = 'small';
      const wrapper = shallow(<Button>Button</Button>);

      wrapper.setProps({ size });
      expect(wrapper.hasClass(size)).toBeTruthy();
    });
  });

  it('Button props.disabled', () => {
    // CSS Selector https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors
    const wrapper = shallow(<Button>Disabled Button</Button>);
    wrapper.setProps({ disabled: false });
    expect(wrapper.is('[disabled=true]')).toBeFalsy();
    wrapper.setProps({ disabled: true });
    expect(wrapper.is('[disabled=true]')).toBeTruthy();
  });
});
