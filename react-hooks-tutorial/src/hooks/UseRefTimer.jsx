import { useRef, useEffect, useState } from 'react';

function UseRefTimer() {
  const [seconds, setSeconds] = useState(0);
  const inte = useRef();

  const startTimer = () => {
    inte.current = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(inte.current);
  };

    const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();  // ⬅️ directly accesses the input DOM node
  }, []);
  return (
    <div>
      <p>⏱️ Timer: {seconds}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <input ref={inputRef} placeholder="Type here to use useffect and useref..." />
    </div>
  );
}
export default UseRefTimer;