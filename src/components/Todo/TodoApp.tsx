import React, { useCallback, useRef, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "TDD 배우기",
      done: true,
    },
    {
      id: 2,
      text: "react-testing-library 사용하기",
      done: true,
    },
  ]);
  const nextId = useRef(3);
  const onInsert = useCallback(
    (text: string) => {
      // 새 항목 추가 후
      setTodos(
        todos.concat({
          id: nextId.current,
          text,
          done: false,
        })
      );
      // nextId 값에 1 더하기
      nextId.current += 1;
    },
    [todos]
  );
  const onToggle = useCallback((id?: number) => {
    setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  }, []);
  const onRemove = useCallback((id?: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);
  return (
    <>
      <TodoForm data-testid="helloworld" onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
};

export default TodoApp;
