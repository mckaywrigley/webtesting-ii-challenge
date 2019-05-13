import React from "react";

import renderer from "react-test-renderer";
import * as rtl from "react-testing-library";
import "jest-dom/extend-expect";

import Display from "./Display";

describe("<Display />", () => {
  it("Displays strikes.", () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

afterEach(rtl.cleanup);

it("renders without crashing", () => {
  // ready to test!
});
