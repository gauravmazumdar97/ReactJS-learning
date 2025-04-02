import React, {useContext} from 'react';
import { counterContext } from "../counterContextFile";

function Child3() {

    const counter = useContext(counterContext)

    return (
    <>
    <div className="card">
      <button>
        count is {counter}
      </button>
      <p>This is the Child Component 3</p>
      <p><b><u>Only data transfer to this component</u></b></p>
    </div>
  </>
  )
}

export default Child3