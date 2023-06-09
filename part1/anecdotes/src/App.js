import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({
    0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0
  })

  const copyPoints = {...points}
  
  const getRandomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
      }

      const addVote = () => {
            if (selected in copyPoints === true){
            copyPoints[selected] = copyPoints[selected] + 1;
        
          }
          setPoints(copyPoints)
          console.log(copyPoints)
         }
       
      
        const TopAnecdote = () => {
        const sortedArr = Object.entries(copyPoints).sort((a,b) => b[1]-a[1])
        const TopIndex = sortedArr[0][0]
        return anecdotes[TopIndex]
        }

        
     return (
    <div style={{maxWidth: "600px"}}>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {copyPoints[selected]} votes</p>
      <button onClick={addVote}>vote</button>
      <button onClick={getRandomAnecdote}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{TopAnecdote()}</p>
    </div>
  )
}

export default App