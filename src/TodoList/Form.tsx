import React, { useRef } from "react";
import { useRaxy } from "../store";

export default function Form(props: any) {
  const { todo } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const { transaction } = useRaxy();

  const addItem = async () => {
    if (!todo.task) {
      return; // nothing if task is empty
    }
    await transaction("ADD_TASK", async (store) => {
      todo.list.push({
        id: todo.list.length ? todo.list[todo.list.length - 1].id + 1 : 1,
        task: todo.task,
        finished: false
      });
      todo.task = ""; // set input = ""
      return true;
    });
    inputRef?.current?.focus(); // set cursor in input after store update
  };

  return (
    <div className="form">
      <input
        ref={inputRef}
        placeholder="task"
        value={todo?.task}
        onChange={(e) => (todo.task = e.target.value)} // store will update
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
}
