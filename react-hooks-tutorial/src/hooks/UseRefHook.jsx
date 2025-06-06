// Accessing a DOM element

// Storing previous values

// Tracking how many times something happened without rendering


import { useEffect, useRef, useState } from 'react';

function UseRefHook() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <h2>Current: {count}</h2>
      <h4>Previous: {prevCount.current}</h4>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default UseRefHook;