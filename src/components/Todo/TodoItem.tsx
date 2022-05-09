import React, { useCallback } from "react";
import { ISampleTodo } from "./db";
export interface ITodoItem {
  todo: ISampleTodo;
  onToggle?: (id: number) => void;
  onRemove?: (id: number) => void;
}

const TodoItem = ({ todo, onToggle, onRemove }: ITodoItem) => {
  const { id, text, done } = todo;
  const toggle = useCallback(() => onToggle && onToggle(id), [id, onToggle]);
  const remove = useCallback(() => onRemove && onRemove(id), [id, onRemove]);
  return (
    <li>
      <span
        style={{
          textDecoration: done ? "line-through" : "none",
        }}
        onClick={toggle}
      >
        {text}
      </span>
      <button onClick={remove} data-testid={`delete-${id}`}>
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
