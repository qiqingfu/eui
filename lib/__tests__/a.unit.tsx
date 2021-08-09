import React from "react";
import Button from "../Button";
import TestRenderer from "react-test-renderer";

describe("Button", () => {
  test("Button 按钮的内容为 click", () => {
    const testRender = TestRenderer.create(<Button />);
    console.log(testRender.toJSON());
  });
});
