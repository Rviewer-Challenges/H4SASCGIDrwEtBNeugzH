import React from "react";
import { shallow } from "enzyme";
import Velocidad from "./Velocidad";

describe("Velocidad", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Velocidad />);
    expect(wrapper).toMatchSnapshot();
  });
});
