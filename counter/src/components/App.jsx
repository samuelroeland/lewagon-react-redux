import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Counter from './Counter'
import 'bootstrap-icons/font/bootstrap-icons.css'

const App = () => {
  // Never change this variables destructive
  const [counters, setCounters] = useState([
    { id: 1, start: 10, step: 6 },
    { id: 2, start: 5 },
    { id: 3, start: 0, step: 13 },
  ])

  const handleDelete = (id) => {
    // const counterToDelete = counters.find((counter) counter.id == idToDelete)
    const newList = counters.filter((counter) => counter.id !== id)
    setCounters(newList)
  }

  return (
    <>
      {counters.map((counter) => {
        return (
          <div
            key={counter.id}
            className="d-flex align-items-center justify-content-center"
          >
            <Counter
              id={counter.id}
              start={counter.start}
              step={counter.step}
            />
            <button
              className="btn btn-outline-danger"
              onClick={() => handleDelete(counter.id)}
            >
              <i className="bi bi-trash"></i>
            </button>
          </div>
        )
      })}
    </>
  )
}

export default App
