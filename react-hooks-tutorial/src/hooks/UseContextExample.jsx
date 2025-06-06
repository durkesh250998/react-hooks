import { createContext, useContext } from 'react';

const ThemeContext = createContext('dark');

function UseContextExample() {
  return (
    <ThemeContext.Provider value="">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <ThemeButton />;
}

function ThemeButton() {
  const theme = useContext(ThemeContext);
  return <button style={{ background: theme === 'dark' ? 'blue' : 'green', color: theme === 'dark' ? 'white' : 'black' }}>
    Theme Button
  </button>;
}

export default UseContextExample