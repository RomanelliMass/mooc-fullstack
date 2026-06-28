import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    setCounter(counter + 1)
    console.log('clicked')
  }

  const resetCount = () => {
    setCounter(0)
    console.log('reset to 0')
  }

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleClick}>
        plus
      </button>
      <button onClick={resetCount}>
        reset
      </button>

    </div>
  )
}

export default App