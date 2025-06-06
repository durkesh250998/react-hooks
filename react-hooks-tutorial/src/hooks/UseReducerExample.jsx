import React, { useReducer } from 'react';

const initialState = { count: 0 , task:0};

function reducer(state, action) {
  switch(action.type) {
    case 'increment': return { count: state.count + 1 , task: state.task};
    case 'decrement': return { count: state.count - 1,task: state.task};
    case 'taskinc' : return {task: state.task + 1, count: state.count};
    case 'taskdec' : return {task: state.task - 1, count: state.count};

    default: return state;
  }
}

function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      Task: {state.task}
      <button onClick={() => dispatch({ type: 'taskinc' })}>+</button>
      <button onClick={() => dispatch({ type: 'taskdec' })}>-</button>
    </div>
  );
}

export default UseReducerExample;

