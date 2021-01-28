import React from "react";
import { useRaxy } from "../store";
import Form from "./Form";
import Info from "./Info";
import List from "./List";

export default function TodoList(props: any) {
  const { state, store } = useRaxy((store) => ({
    todo: store.todos.find((t) => t.name === props.name),
    get all() {
      return this?.todo?.list.length || 0;
    },
    get finished() {
      return this?.todo?.list?.filter((l) => l.finished).length || 0;
    },
    get active() {
      return this.all - this.finished;
    }
  }));

  const clear = () =>
    state.todo &&
    (state.todo.list = state.todo?.list.filter((t: any) => !t.finished) ?? []);

  const remove = () =>
    (store.todos = store.todos.filter((t) => t.name !== props.name));

  return (
    <div className="container">
      {state.todo && (
        <>
          <div className="logo">{props.name}</div>
          <Form todo={state.todo} />
          <List list={state.todo?.list} />
          <Info
            onClear={clear}
            onRemove={remove}
            all={state.all}
            finished={state.finished}
            active={state.active}
          />
        </>
      )}
    </div>
  );
}
