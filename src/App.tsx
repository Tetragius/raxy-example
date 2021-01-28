import React from "react";
import "./styles.css";
import { Raxy } from "@tetragius/raxy";
import instanse from "./store";
import TodoLists from "./TodoLists/TodoLists";

export default function App() {
  return (
    <Raxy value={instanse}>
      <TodoLists />
    </Raxy>
  );
}
