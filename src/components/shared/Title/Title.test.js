import React from "react";
import { shallow } from "enzyme";
import Title from "./Title";

describe("Title", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Title />);
    expect(wrapper).toMatchSnapshot();
  });
});
