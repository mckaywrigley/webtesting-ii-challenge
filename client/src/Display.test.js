import React from "react";

import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";

import Display from "./Display";

describe("<Display />", () => {
  it("displays strikes", () => {
    const { getByText } = render(<Display strikes={1} />);

    getByText("Strikes: 1");
  });

  it("displays balls", () => {
    const { getByText } = render(<Display balls={1} />);

    getByText("Balls: 1");
  });
});
