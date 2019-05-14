import React from "react";

import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  it("adds strike", () => {
    const { getByText } = render(<Dashboard />);

    const button = getByText("Strike");
    fireEvent.click(button);
    getByText(/strikes: 1/i);
  });

  it("adds ball", () => {
    const { getByText } = render(<Dashboard />);

    const button = getByText("Ball");

    fireEvent.click(button);
    getByText(/balls: 1/i);
  });

  it("adds stike when foul clicked", () => {
    const { getByText } = render(<Dashboard />);

    const button = getByText(/foul/i);
    fireEvent.click(button);

    getByText(/strikes: 2/i);
  });

  it("clears input when hit", () => {
    const { getByText } = render(<Dashboard />);

    const button = getByText(/hit/i);
    fireEvent.click(button);

    getByText(/strikes: 0/i);
    getByText(/balls: 0/i);
  });
});
