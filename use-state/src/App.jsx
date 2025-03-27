import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [addition, setAddition] = useState(0);
  const [subtraction, setSubtraction] = useState(100);

  return (
    <>
      <div>
      <h1><p>USE STATE HOOK</p></h1>
      </div>

      <div className="card row col-12">
        
        <div className="col-6">
          <p>
            {addition}
          </p>
        </div>

        <div className="col-6">
          <button onClick={() => setAddition((count) => {
            if(count<0){
              return 0;
            } else{
              return count + 1
            }
          })}>
            count is {count}
          </button>
        </div>
        
        <div className="col-6">
          <p>
            {subtraction}
          </p>
          <button onClick={() => setSubtraction((count) => {
            if (count > 0) {
              return count - 1;
              } else {
                return 0;
              }
          })}>
            count is {count}
          </button>
        </div>

      </div>
    </>
  )
}

export default App
