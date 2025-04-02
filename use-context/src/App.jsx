import { useState, useCallback } from 'react';
import './App.css';
import Child from './components/Child';
import { counterContext } from "./counterContextFile";

function App() {
  const [count, setCount] = useState(10);

  // ✅ Correctly memoized function using functional updates
  const IncrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <>
      <counterContext.Provider value={count}>
        <h2><b><u>This is the example of UseContext</u></b></h2>
        <div className="card">
          <button onClick={IncrementCount}>
            count is {count}
          </button>
          <p>
            This is the Parent Component
          </p>
        </div>
        <Child />
      </counterContext.Provider>
    </>
  );
}

export default App;