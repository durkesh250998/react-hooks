import React, { useState, useRef } from "react";

function Userefexm() {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);

  return (
    <div>
      <p>State count: {stateCount}</p>
      <p>Ref count: {refCount.current}</p>

      <button onClick={() => setStateCount(stateCount + 1)}>
        Increase State
      </button>

      <button
        onClick={() => {
          refCount.current += 1;
          console.log("Ref count updated:", refCount.current);
        }}
      >
        Increase Ref
      </button>
    </div>
  );
}

export default Userefexm;
