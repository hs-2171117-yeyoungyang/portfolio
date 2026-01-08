import { useState } from 'react';
import Router from './router';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  )
}

export default App
