import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Counter from './Counter'

const App = () => {
  const [counters, setCounters] = useState([
    { id: 1, start: 10, step: 6 },
    { id: 2, start: 5 },
    { id: 3, start: 0, step: 13 },
  ])
  return (
    <>
      {counters.map((counter) => {
        return (
          <Counter id={counter.id} start={counter.start} step={counter.step} />
        )
      })}
    </>
  )
}

export default App
