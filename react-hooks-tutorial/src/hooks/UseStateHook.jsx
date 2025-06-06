import React, { useState } from 'react'

function UseStateHook(){
      const [count, setCount] = useState(0)
    
      const handleClick = () => {
        setCount(count + 1)
      }
    return (
        <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleClick}>Count button</button>
    </div>
    )
}

export default UseStateHook