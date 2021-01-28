import React from "react";

export default function Info(props: any) {
  const { all, finished, active, onClear, onRemove } = props;
  return (
    <div className="info">
      <div>
        tasks: {all}, active: {active}, finished: {finished}
      </div>
      <button onClick={onClear}>Remove finished</button>
      <button onClick={onRemove}>Remove list</button>
    </div>
  );
}
