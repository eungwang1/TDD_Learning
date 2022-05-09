import React from "react";
import DelayedToggle from "./DelayedToggle";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
  queryByText,
} from "@testing-library/react";

describe("<DelayedToggle />", () => {
  it("reveals text when toggle is ON", async () => {
    render(<DelayedToggle />);
    const toggleButton = screen.getByText("토글");
    fireEvent.click(toggleButton);
    // findByText 비동기시 사용, defaultTimeout : 1000ms;
    await screen.findByText("야호!!", undefined, { timeout: 3000 });
  });
  it("toggles text ON/OFF", async () => {
    render(<DelayedToggle />);
    const toggleButton = screen.getByText("토글");
    fireEvent.click(toggleButton);
    await screen.findByText("ON", undefined, { timeout: 3000 });
  });

  // it("changes something when button is clicked", async () => {
  //   const { container } = render(<DelayedToggle />);
  //   const toggleButton = screen.getByText("토글");
  //   fireEvent.click(toggleButton);
  //   const mutations = await waitFor(() => container, { container });
  // });

  it("removes text when toggle is OFF", async () => {
    render(<DelayedToggle />);
    const toggleButton = screen.getByText("토글");
    fireEvent.click(toggleButton);
    await screen.findByText("야호!!", undefined, { timeout: 3000 });
    fireEvent.click(toggleButton);
    await waitForElementToBeRemoved(() => screen.queryByText("야호!!"), { timeout: 3000 });
  });
});
