import { useState } from 'react'

const Title = ({title}) => {
  return(
      <h1> {title} </h1>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}> {text} </button>
  )
}

const Statistics = ({name, value}) => {
  if (name === "positive") {
    return(
    <p> {name} {value} % </p>
    )
  }

  return(
    <p> {name} {value} </p>
  )
}


function App() {
const [clicks, setClicks] = useState({
  good:0, bad:0, neutral:0
})

  const increaseGood = () => setClicks({...clicks, good: clicks.good + 1})
  const increaseBad = () => setClicks({...clicks, bad: clicks.bad + 1})
  const increaseNeutral = () => setClicks({...clicks, neutral: clicks.neutral + 1})

  const total = clicks.good + clicks.bad + clicks.neutral
  const average = total === 0 ? 0 : (clicks.good - clicks.bad) / total
  const positive = total === 0 ? 0 : (clicks.good / total) * 100

  return (
    <div>
      <Title title="give feedback" />
      <Button onClick={increaseGood} text="good" />
      <Button onClick={increaseNeutral} text="neutral" />
      <Button onClick={increaseBad} text="bad" />
      <Title title="statistics" />
      {total === 0 ? (
        <p>No Feedback Given</p>
      ) : (
        <>
        <Statistics name="good" value={clicks.good} />
        <Statistics name="neutral" value={clicks.neutral} />
        <Statistics name="bad" value={clicks.bad} />
        <Statistics name="all" value={total} />
        <Statistics name="average" value={average} />
        <Statistics name="positive" value={positive} />
        </>
      )}
    </div>
  )
}

export default App
