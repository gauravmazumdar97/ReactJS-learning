import React from 'react'
import Child3 from './Child3';

function Child2() {
  return (
    <>
    <div className="card">
      <button>
        count is 
      </button>
      <p>This is the Child Component 2</p>
      <p>No data transfer</p>
    </div>
    <Child3/>
  </>
  )
}

export default Child2