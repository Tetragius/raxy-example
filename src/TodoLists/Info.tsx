import React from "react";
import { useRaxy } from "../store";

export default function Info(props: any) {
  const { state } = useRaxy((store) => ({
    get all() {
      return store.todos.reduce<number>((prev, cur) => {
        prev += cur.list.length;
        return prev;
      }, 0);
    },
    get finished() {
      return store.todos.reduce<number>((prev, cur) => {
        prev += cur.list.filter((i) => i.finished).length;
        return prev;
      }, 0);
    },
    get active() {
      return this.all - this.finished;
    }
  }));

  return (
    <div className="main-info">
      <div>
        tasks: {state.all}, active: {state.active}, finished: {state.finished}
      </div>
    </div>
  );
}
