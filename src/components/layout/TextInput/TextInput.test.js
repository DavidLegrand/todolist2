import React from "react";
import { shallow } from "enzyme";
import TextInput from "./TextInput";

describe("TextInput", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TextInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
