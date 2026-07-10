import { useState } from 'react'

const Title = ({title}) => {
  return(
      <h1>
        {title}
      </h1>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Statistics = ({name, value}) => {
  if (name === "positive") {
    return(
      <p>
      {name} {value} %
    </p>
    )
  }

  return(
    <p>
      {name} {value}
    </p>
  )
}


function App() {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseBad = () => setBad(bad + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const total = good + bad + neutral
  const average = total === 0 ? 0 : (good - bad) / total
  const positive = total === 0 ? 0 : (good / total) * 100

  return (
    <div>
    <Title title="give feedback" />
    <Button onClick={increaseGood} text='good' />
    <Button onClick={increaseNeutral} text='neutral' />
    <Button onClick={increaseBad} text='bad' />
    <Title title="statistics"/>
    <Statistics name="good" value={good} />
    <Statistics name="neutral" value={neutral} />
    <Statistics name="bad" value={bad} />
    <Statistics name="all" value={total} />
    <Statistics name="average" value={average} />
    <Statistics name="positive" value={positive} />
    </div>
  )
}

export default App
