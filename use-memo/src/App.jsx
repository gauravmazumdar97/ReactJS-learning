import { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(1);

  function handleIncrease() {
    setCount(count + 1);
  }

  function sumUpTo(num) {
    console.log("Calculating sum up to:", num);
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }

  // Memoize the expensive calculation
  const sum1000 = useMemo(()=> sumUpTo(1000), []);
  const sum100000 = useMemo(()=> sumUpTo(100000), []);

  return (
    <div className="container mt-4">
      <div className="row center m-4">
        <h1>🎯 <u>Expensive Calculation with useMemo</u></h1>
      </div>

      <div className="row">
        {/* Left side - Calculation Result */}
        <div className="col-md-6 border p-3">
          <h2>Calculation Results</h2>
          <p>Sum up to 1000: <strong>{sum1000}</strong></p>
          <p>Sum up to 100000: <strong>{sum100000}</strong></p>

          <button onClick={handleIncrease} className="btn btn-primary">
            Increase Count ({count})
          </button>
        </div>

        {/* Right side - Placeholder for other content */}
        <div className="col-md-6 border p-3">
          <h2>Right Section</h2>
          <p>More content here.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
