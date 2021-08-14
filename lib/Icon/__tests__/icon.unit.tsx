import React from "react";
import { shallow } from "enzyme";
import Icon from "../index";

describe("Icon Component", () => {
  it("test Icon1", () => {
    const wrapper = shallow(<Icon name="delete" />);
    expect(wrapper.find(".e-ui-icon")).toHaveLength(1);
  });
});
