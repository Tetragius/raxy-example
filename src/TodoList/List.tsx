import React from "react";
import Item from "./Item";

export default function List(props: any) {
  const { list } = props;

  return (
    <ol className="list">
      {!list?.length && "no items"}
      {list?.map((item: any) => (
        <Item key={item.id} value={item} />
      ))}
    </ol>
  );
}
