import React from "react";

export default function Item({ value }: any) {
  return (
    <li>
      <input
        type="checkbox"
        checked={value.finished}
        onChange={(e) => (value.finished = e.target.checked)} // mark checked -> store will update
      />
      <span>{value.task}</span>
    </li>
  );
}
