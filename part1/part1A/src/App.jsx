// const Hello = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <p>Hello {props.name}, you are {props.age} years old.</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = "massimo"
//   const age = 21

//   return (
//     <div>
//       <h1>Greetings</h1>

//       <Hello name="Alice" age={10 + 11} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

// export default App

const App = () => {
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <div>
      <p>{friends[0].name}</p>
      <p>{friends[1].name}</p>
    </div>
  )
}

export default App