import React from "react";
import { shallow } from "enzyme";
import Units from "./Units";

describe("Units", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Units />);
    expect(wrapper).toMatchSnapshot();
  });
});
