import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return(
    <button onClick = {onClick}> {text} </button>
  );
}

const MostVoteAnecdote = ({allVotes, anecdotes}) => {
  const max = Math.max(...allVotes);
  const index = allVotes.indexOf(max)
    return(
      <div>
        <p>{anecdotes[index]}</p>
        <p>has {max} votes</p>
      </div>
    );
}

const Title = ({ text }) => {
  return(
    <h1>
      {text}
    </h1>
    )
  };

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [allVotes, setVotes] = useState(new Array(8).fill(0))

  const randomAnecdote = () => {
    const index =  Math.floor(Math.random() * anecdotes.length);
    setSelected(index)
  }

  const increaseVote = () => {
    const copy = [...allVotes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <Title text="Anecdote of the day" />
      {anecdotes[selected]}
      <p>has {allVotes[selected]} votes</p>
      <Button onClick={randomAnecdote} text="Next Anecdote" />
      <Button onClick={increaseVote} text="VOTE" />
      <Title text="Anecdote with the most votes" />
      <MostVoteAnecdote allVotes={allVotes} anecdotes={anecdotes}/>
    </div>
  )
}

export default App