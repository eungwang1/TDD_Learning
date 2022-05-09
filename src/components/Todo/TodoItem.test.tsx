import React from "react";
import TodoItem, { ITodoItem } from "./TodoItem";
import { fireEvent, render, screen } from "@testing-library/react";
import { ISampleTodo } from "./db";

describe("<TodoItem />", () => {
  const sampleTodo: ISampleTodo = {
    id: 1,
    text: "TDD 배우기",
    done: false,
  };

  const setup = (props: ITodoItem | object = {}) => {
    const initialProps = { todo: sampleTodo };
    render(<TodoItem {...initialProps} {...props} />);
    const todo = ("todo" in props && props.todo) || initialProps.todo;
    const span = screen.getByText(todo.text);
    const button = screen.getByText("삭제");
    return {
      span,
      button,
    };
  };

  it("has span and button", () => {
    const { span, button } = setup();
    expect(span).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it("shows line-through on span when done is true", () => {
    const { span } = setup({ todo: { ...sampleTodo, done: true } });
    expect(span).toHaveStyle("text-decoration: line-through;");
  });

  it("does not show line-through on span when done is false", () => {
    const { span } = setup({ todo: { ...sampleTodo, done: false } });
    expect(span).not.toHaveStyle("text-decoration: line-through;");
  });

  it("calls onToggle", () => {
    const onToggle = jest.fn();
    const { span } = setup({ onToggle });
    fireEvent.click(span);
    // toBeCalledWith 함수 인자 체크.
    expect(onToggle).toBeCalledWith(sampleTodo.id);
  });

  it("calls onRemove", () => {
    const onRemove = jest.fn();
    const { button } = setup({ onRemove });
    fireEvent.click(button);
    expect(onRemove).toBeCalledWith(sampleTodo.id);
  });
});
