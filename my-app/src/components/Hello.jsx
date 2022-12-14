import { useState } from 'react'
import './Hello.css'

const Hello = ({ name, age }) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
  }

  const classes = clicked ? 'hello selected' : 'hello'

  return (
    <h1 className={classes} onClick={handleClick}>
      Hello {name}, age {age + 1}
    </h1>
  )
}

export default Hello
