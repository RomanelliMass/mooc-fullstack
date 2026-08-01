import { useState } from "react";

const Title = ({ title }) => {
  return <h1> {title} </h1>;
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}> {text} </button>;
};

const Statistics = ({ clicks }) => {
  const total = clicks.good + clicks.bad + clicks.neutral;
  const average = total === 0 ? 0 : (clicks.good - clicks.bad) / total;
  const positive = total === 0 ? 0 : (clicks.good / total) * 100;

  if (total === 0) {
    return <p>No Feedback Given</p>;
  }

  return (
    <table>
      <tbody>
        <StatisticLine name="good" value={clicks.good} />
        <StatisticLine name="neutral" value={clicks.neutral} />
        <StatisticLine name="bad" value={clicks.bad} />
        <StatisticLine name="all" value={total} />
        <StatisticLine name="average" value={average} />
        <StatisticLine name="positive" value={positive} />
      </tbody>
    </table>
  );
};

const StatisticLine = ({ name, value }) => {
  if (name === "positive") {
    return (
      <tr>
        <td>{name}</td>
        <td>{value} %</td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  );
};

function App() {
  const [clicks, setClicks] = useState({
    good: 0,
    bad: 0,
    neutral: 0,
  });

  const increaseGood = () => setClicks({ ...clicks, good: clicks.good + 1 });

  const increaseBad = () => setClicks({ ...clicks, bad: clicks.bad + 1 });

  const increaseNeutral = () =>
    setClicks({ ...clicks, neutral: clicks.neutral + 1 });

  return (
    <div>
      <Title title="give feedback" />
      <Button onClick={increaseGood} text="good" />
      <Button onClick={increaseNeutral} text="neutral" />
      <Button onClick={increaseBad} text="bad" />
      <Title title="statistics" />
      <Statistics clicks={clicks} />
    </div>
  );
}

export default App;
