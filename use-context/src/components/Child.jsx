import React from 'react'
import Child2 from './Child2';

function Child() {
  return (
    <>
    <div className="card">
      <button>
        count is 
      </button>
      <p>This is the Child Component 1 </p>
      <p>No data transfer</p>
    </div>
    <Child2/>
  </>
  )
}

export default Child