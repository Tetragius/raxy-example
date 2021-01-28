import React from "react";
import { useRaxy } from "../store";
import TodoList from "../TodoList/TodoList";
import Form from "./Form";
import Info from "./Info";

export default function TodoLists() {
  const { state } = useRaxy((store) => ({
    todos: store.todos
  }));

  return (
    <div className="main-container">
      <Form />
      <Info />
      <div className="main-container-list">
        {state.todos.map((todo) => (
          <TodoList key={todo.name} name={todo.name} />
        ))}
      </div>
    </div>
  );
}
