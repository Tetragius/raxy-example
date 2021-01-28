import React, { useRef } from "react";
import { useRaxy } from "../store";
import { loadTodos } from "../mock";

export default function Form() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { store, state, transaction } = useRaxy((store) => ({
    name: store.name,
    loading: store.loading
  }));

  const addTodo = async () => {
    if (!state.name) {
      return; // nothing if task is empty
    }
    if (store.todos.find((t) => t.name === state.name)) {
      return; // nothing if name not uniq
    }
    await transaction("ADD_TODO", async (store) => {
      store.todos.push({
        name: state.name,
        task: "",
        list: []
      });
      store.name = ""; // set input = ""
      return true;
    });
    inputRef?.current?.focus(); // set cursor in input after store update
  };

  const load = async () => {
    await transaction("LOAD_TODO", async (store) => {
      store.loading = true;
      store.todos = await loadTodos();
      store.loading = false;
      return true;
    });
  };

  const removeAll = () => {
    store.todos = [];
  };

  const removeFinished = () => {
    store.todos = store.todos.filter((t) => t.list.some((i) => !i.finished));
  };

  const clearAll = () => {
    store.todos.forEach((t) => {
      t.list = t.list.filter((i) => !i.finished);
    });
  };

  return (
    <div className="main-form">
      <input
        ref={inputRef}
        placeholder="todo name"
        value={state?.name}
        onChange={(e) => (store.name = e.target.value)} // store will update
      />
      <button onClick={addTodo}>Add</button>
      <button onClick={removeAll}>Remove all lists</button>
      <button onClick={removeFinished}>Remove finised lists</button>
      <button onClick={clearAll}>Clear all lists</button>
      <button disabled={state.loading} onClick={load}>
        Load lists
      </button>
    </div>
  );
}
