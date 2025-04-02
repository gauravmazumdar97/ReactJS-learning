import {useState} from 'react'

function Child() {

  const [count, setCount] = useState(0);


  return (
    <div>
        <p>Child Component</p>
        <button onClick={() => setCount((count) => count + 1)}>This button is from Child</button>
    </div>
  )
}

export default Child