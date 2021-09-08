import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Modal from '../index';

describe('Modal Component', () => {
  it('Modal renders correctly', () => {
    const tree = renderer.create(<Modal visible></Modal>);
    expect(tree).toMatchSnapshot();
  });

  it('Modal props.visible', () => {
    const wrapper = shallow(<Modal visible></Modal>);
    expect(wrapper.find('.e-modal').exists()).toBeTruthy();
    wrapper.setProps({ visible: false });
    expect(wrapper.find('.e-modal').exists()).toBeFalsy();
  });

  it('Modal props.maskClosable set false', () => {
    const fn = jest.fn();
    const wrapper = shallow(<Modal visible onCancel={fn}></Modal>);
    wrapper.find('.e-modal__mask').simulate('click');
    expect(fn).toBeCalledTimes(1);
    wrapper.setProps({ maskClosable: false });
    wrapper.find('.e-modal__mask').simulate('click');
    expect(fn).toBeCalledTimes(1);
  });

  describe('Modal Event', () => {
    it('Click cancel button call props onCancel', () => {
      const fn = jest.fn();
      const wrapper = shallow(<Modal visible onCancel={fn}></Modal>);
      wrapper.find('.e-modal__footer').childAt(0).simulate('click');
      expect(fn).toBeCalledTimes(1);
    });

    it('Click ok button call props onOk', () => {
      const fn = jest.fn();
      const wrapper = shallow(<Modal visible onOk={fn}></Modal>);
      wrapper.find('.e-modal__footer').childAt(1).simulate('click');
      expect(fn).toBeCalledTimes(1);
    });
  });

  it('Modal props.closable', () => {
    // TODO
  });
});
