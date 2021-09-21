import React from 'react';
import { shallow, mount } from 'enzyme';
import Modal from '../index';

describe('Modal Component', () => {
  it('Modal renders correctly', () => {
    const tree = mount(<Modal visible />);
    expect(tree).toMatchSnapshot();
  });

  it('Modal props.visible', () => {
    const wrapper = shallow(<Modal visible />);
    expect(wrapper.find('.e-modal').exists()).toBeTruthy();
    wrapper.setProps({ visible: false });
    expect(wrapper.find('.e-modal').exists()).toBeFalsy();
  });

  it('Modal props.maskClosable set false', () => {
    const fn = jest.fn();
    const wrapper = shallow(<Modal visible onCancel={fn} />);
    wrapper.find('.e-modal__mask').simulate('click');
    expect(fn).toBeCalledTimes(1);
    wrapper.setProps({ maskClosable: false });
    wrapper.find('.e-modal__mask').simulate('click');
    expect(fn).toBeCalledTimes(1);
  });

  describe('Modal Event', () => {
    it('Click cancel button call props onCancel', () => {
      const fn = jest.fn();
      const wrapper = mount(<Modal visible onCancel={fn} />);
      wrapper.find('.e-modal__footer').childAt(0).simulate('click');
      expect(fn).toBeCalledTimes(1);
    });

    it('Click ok button call props onOk', () => {
      const fn = jest.fn();
      const wrapper = mount(<Modal visible onOk={fn} />);
      wrapper.find('.e-modal__footer').childAt(1).simulate('click');
      expect(fn).toBeCalledTimes(1);
    });
  });

  it('Modal props.closable', () => {
    const wrapper = shallow(<Modal visible />);
    expect(wrapper.find('.e-modal__close').exists()).toBeTruthy();
    wrapper.setProps({ closable: false });
    expect(wrapper.find('.e-modal__close').exists()).toBeFalsy();
  });

  it('Modal props.mask set false', () => {
    const wrapper = shallow(<Modal visible />);
    expect(wrapper.find('.e-modal__mask').exists()).toBeTruthy();
    wrapper.setProps({ mask: false });
    expect(wrapper.find('.e-modal__mask').exists()).toBeFalsy();
  });

  describe('Modal props.footer', () => {
    it('set footer to null', () => {
      const wrapper = mount(<Modal visible footer={null} />);
      expect(wrapper.find('.e-modal__footer').exists()).toBeFalsy();
    });

    it('set footer as a custom button', () => {
      const wrapper = mount(
        <Modal
          visible
          footer={[
            <button key="1" className="e-modal__custom-button">
              ok
            </button>,
          ]}
        />,
      );

      expect(
        wrapper.find('.e-modal__footer').find('.e-modal__custom-button').exists(),
      ).toBeTruthy();
    });

    it('Modal props.zIndex', () => {
      const zIndexValue = 1001;
      const wrapper = mount(<Modal visible zIndex={zIndexValue} />);
      const style = wrapper.find('.e-modal__mask').get(0).props.style;
      expect(style.zIndex).toBe(zIndexValue);
    });
  });

  it('Modal children', () => {
    const value = 'Content';
    const wrapper = mount(<Modal visible>{value}</Modal>);
    expect(wrapper.find('.e-modal__main').text()).toBe(value);
  });

  describe('Modal Header', () => {
    it('props.title', () => {
      const value = '自定义标题';
      const wrapper = mount(<Modal visible />);
      expect(wrapper.find('.e-modal__title').text()).toBe('Header');
      wrapper.setProps({ title: value });
      expect(wrapper.find('.e-modal__title').text()).toBe(value);
    });

    it('props.showHeader', () => {
      const wrapper = mount(<Modal visible />);
      expect(wrapper.find('.e-modal__header').exists()).toBeTruthy();
      wrapper.setProps({ showHeader: false });
      expect(wrapper.find('.e-modal__header').exists()).toBeFalsy();
    });
  });
});
