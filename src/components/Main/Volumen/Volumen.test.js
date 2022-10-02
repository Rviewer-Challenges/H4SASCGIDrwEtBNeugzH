import React from "react";
import { shallow } from "enzyme";
import Volumen from "./Volumen";

describe("Volumen", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Volumen />);
    expect(wrapper).toMatchSnapshot();
  });
});
