import React from "react";
import TodoItem from "./TodoItem";
interface ITodoList {
  todos: {
    id: number;
    text: string;
    done: boolean;
  }[];
  onToggle?: () => void;
  onRemove?: () => void;
}
const TodoList = ({ todos, onToggle, onRemove }: ITodoList) => {
  return (
    <ul data-testid="TodoList">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default TodoList;
