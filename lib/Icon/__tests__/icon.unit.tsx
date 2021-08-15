import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Icon from "../index";

describe("Icon Component", () => {
  it("Icon Render", () => {
    const tree = renderer.create(<Icon name="delete" />);
    expect(tree).toMatchSnapshot();
  });

  it("Icon Props.name", () => {
    const wrapper = shallow(<Icon name="delete" />);
    const result = wrapper.find("use").props();
    expect(result.xlinkHref).toBe("#delete");
  });

  it("Icon Props.color", () => {
    const wrapper = shallow(<Icon name="delete" color="#f00" />);
    const result = wrapper.find(".e-ui-icon").props();
    expect(result.style?.fill).toBe("#f00");
  });

  it("Icon Props.size", () => {
    const wrapper = shallow(<Icon name="delete" size={40} />);
    const result = wrapper.find(".e-ui-icon").props();
    expect(result.style?.fontSize).toBe(40);
  });

  it("Icon click", () => {
    const fn = jest.fn();
    const wrapper = shallow(<Icon name="delete" onClick={fn} />);
    wrapper.simulate("click");
    expect(fn).toBeCalledTimes(1);
  });
});
