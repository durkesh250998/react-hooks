//memoizes child component, so if parent rerenders child stays the same.
//use case when components used inside functions

import React, { useState, useCallback } from 'react';

const Child = React.memo(({ onClick }) => {
  console.log('Child rendered');
  return (
    <div>
      <button onClick={onClick}>Child Button</button>
    </div>
  );
});

function UseCallbackExample() {
  const [count, setCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const handleChildClick = useCallback(() => {
    setChildCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <h2>useCallback Example</h2>
      <p>Parent Count: {count}</p>
      <p>Child Count: {childCount}</p>
      <button onClick={() => setCount(count + 1)}>Increase Parent Count</button>
      <Child onClick={handleChildClick} />
    </div>
  );
}

export default UseCallbackExample;
