import React from "react";
import { shallow } from "enzyme";
import Distancia from "./Distancia";

describe("Distancia", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Distancia />);
    expect(wrapper).toMatchSnapshot();
  });
});
