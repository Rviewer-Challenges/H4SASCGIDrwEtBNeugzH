import React from "react";
import { shallow } from "enzyme";
import Exchange from "./Exchange";

describe("Exchange", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Exchange />);
    expect(wrapper).toMatchSnapshot();
  });
});
