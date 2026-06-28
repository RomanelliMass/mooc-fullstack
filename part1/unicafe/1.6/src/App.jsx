import { useState } from 'react'

const Title = ({title}) => {
  return(
      <h1>
        {title}
      </h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}


function App() {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseBad = () => setBad(bad + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)

  return (
    <div>
    <Title title="give feedback" />
    <Button onClick={increaseGood} text='good' />
    <Button onClick={increaseNeutral} text='neutral' />
    <Button onClick={increaseBad} text='bad' />
    <Title title="statistics"/>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    </div>
  )
}

export default App
