import { useState } from 'react'
import Button from '../../component/Button'




const CounterPage:React.FC=()=> {
  const [count, setCount] = useState(0)

  return (
    <>

      <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Reusable Button Component</h1>
      <p>Current Count: {count}</p>

      {/* Using the Button component */}
      <Button label="Increment" onClick={() => setCount(count + 1)} />
      <Button label="Reset" onClick={() => setCount(0)} disabled={count === 0} />
      </div>
      

    </>
  )
}
export default CounterPage