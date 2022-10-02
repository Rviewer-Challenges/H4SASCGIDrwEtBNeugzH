import React from "react";
import { shallow } from "enzyme";
import Temperatura from "./Temperatura";

describe("Temperatura", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Temperatura />);
    expect(wrapper).toMatchSnapshot();
  });
});
