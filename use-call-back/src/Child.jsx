import { memo } from "react";

function Child({ IncrementCount }) {
  console.log("This is the Child component=============>>>");

  return (
    <div>
      <p>Child Component</p>
      <button onClick={IncrementCount}>This button is from Child</button>
    </div>
  );
}

export default memo(Child);
