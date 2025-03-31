import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef, useReducer } from 'react';

function App() {

// This is the example of using useReducer hook in this hook we take the reference of the element/tag on the behalf of
// which we are changing the color of the div element by clicking the specifiv color button .

  function reducerFunction(state, action) {
    const { type } = action;
    switch (type) {
      case "Red":
        dynamicBG.current.style.backgroundColor = "red";
        redBtn.current.style.backgroundColor = "#22bb87";
        break;
      case "Blue":
        dynamicBG.current.style.backgroundColor = "blue";
        blueBtn.current.style.backgroundColor = "#22bb87";
        break;
      case "Yellow":
        dynamicBG.current.style.backgroundColor = "yellow";
        yellowBtn.current.style.backgroundColor = "#22bb87";
        break;
      case "Pink":
        dynamicBG.current.style.backgroundColor = "pink";
        pinkBtn.current.style.backgroundColor = "#22bb87";
        break;
      case "Green":
        dynamicBG.current.style.backgroundColor = "green";
        greenBtn.current.style.backgroundColor = "#22bb87";
        break;
      default:
        dynamicBG.current.style.backgroundColor = "grey";
        dynamicBG.current.style.backgroundColor = "#22bb87";
    }

  }

  const [count, setCount] = useState(0);
  const dynamicBG = useRef();
  const redBtn = useRef();
  const blueBtn = useRef();
  const greenBtn = useRef();
  const yellowBtn = useRef();
  const pinkBtn = useRef();
  const [bgColor, dispatchBgColor] = useReducer(reducerFunction, '');


  return (
    <>
      <div className="App" ref={dynamicBG} >
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}> count is {count} </button>
          <p> Edit <code>src/App.jsx</code> and save to test HMR </p>
        </div>

        <div className="row col-12" style={{ display: 'flex', overflowX: 'auto', gap: '10px', whiteSpace: 'nowrap' }}>

          <div className="card" style={{ flex: '0 0 auto' }}>
            <button ref={redBtn} onClick={() => dispatchBgColor({ type: "Red" })}>Red</button>
          </div>
          <div className="card" style={{ flex: '0 0 auto' }}>
            <button ref={blueBtn} onClick={() => dispatchBgColor({ type: "Blue" })}>Blue</button>
          </div>
          <div className="card" style={{ flex: '0 0 auto' }}>
            <button ref={greenBtn} onClick={() => dispatchBgColor({ type: "Green" })}>Green</button>
          </div>
          <div className="card" style={{ flex: '0 0 auto' }}>
            <button ref={yellowBtn} onClick={() => dispatchBgColor({ type: "Yellow" })}>Yellow</button>
          </div>
          <div className="card" style={{ flex: '0 0 auto' }}>
            <button ref={pinkBtn} onClick={() => dispatchBgColor({ type: "Pink" })}>Pink</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
