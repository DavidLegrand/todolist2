import React from "react";
import { shallow } from "enzyme";
import ListView from "./ListView";

describe("ListView", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListView />);
    expect(wrapper).toMatchSnapshot();
  });
});
