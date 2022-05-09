import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";
import App from "./App";

describe("<Counter />", () => {
  it("matches snapshot", () => {
    const utils = render(<Counter />);
    expect(utils.container).toMatchSnapshot();
  });
  it("has a number and two buttons", () => {
    render(<Counter />);
    // 버튼과 숫자가 있는지 확인
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByText("+1")).toBeInTheDocument();
    expect(screen.getByText("-1")).toBeInTheDocument();
  });
  it("increases", () => {
    render(<Counter />);
    const number = screen.getByText("0");
    const plusButton = screen.getByText("+1");
    // 클릭 이벤트를 두번 발생시키기
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    expect(number).toHaveTextContent("2"); // jest-dom 의 확장 matcher 사용
    expect(number.textContent).toBe("2"); // textContent 를 직접 비교
  });
  it("decreases", () => {
    render(<Counter />);
    const number = screen.getByText("0");
    const minusButton = screen.getByText("-1");
    // 클릭 이벤트를 두번 발생시키기
    fireEvent.click(minusButton);
    fireEvent.click(minusButton);
    expect(number).toHaveTextContent("-2"); // jest-dom 의 확장 matcher 사용
  });
});
