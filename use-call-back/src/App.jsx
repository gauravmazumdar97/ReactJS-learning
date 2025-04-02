import { useState, useCallback } from 'react';
import './App.css';
import Child from './Child';

function App() {
  const [count, setCount] = useState(0);

  // ✅ Correctly memoized function using functional updates
  const IncrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []); 

  return (
    <>
      <div className="card">
        <button onClick={IncrementCount}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Child IncrementCount={IncrementCount} />
    </>
  );
}

export default App;