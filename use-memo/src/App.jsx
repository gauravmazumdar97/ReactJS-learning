import { useState, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [input, setInput] = useState(0);

  // Expensive function that uses double the input value
  const expensiveCalculation = (num) => {
    const doubledNum = num * 2;
    console.log(`Running expensive calculation for doubled input: ${doubledNum}...`); 

    let sum = 0;
    for (let index = 0; index < 1000000; index++) { 
      sum += index * doubledNum; // Using doubled input value
    }
    return sum;
  };

  // Memoized result, recalculates only when `input` changes
  const memoizedResult = useMemo(() => expensiveCalculation(input), [input]);

  return (
    <div className="container mt-4">
      <div className="row center m-4">
        <h1>🎯 <u>useMemo with Doubled Input</u></h1>
      </div>

      <div className="row">
        {/* Left side - Timer display */}
        <div className="col-md-6 border p-3">
          <h2>Calculation Result</h2>
          <p>Expensive Calculation Result: <strong>{memoizedResult}</strong></p>

          <input 
            type="number" 
            placeholder="Enter a number" 
            value={input} 
            onChange={(e) => setInput(Number(e.target.value))} 
            className="form-control mb-3"
          />
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
