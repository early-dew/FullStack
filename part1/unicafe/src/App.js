import { useState } from 'react'
import './minimal-table.css'


const StatisticLine = ({ text, value}) => {
  return (
  <table>
    <tbody>
      <tr>
        <td>{text} </td>
        <td>{value}</td>
      </tr>
  </tbody>
  </table>
  )
}

 const Statistics = ({ good, neutral, bad, total }) => {

  if(total === 0) {
    return <p>No feedback given</p>
  }
    return(
      <>
      <h1>statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={((good + bad * (-1) + neutral * 0)/total).toFixed(2)} />
      <StatisticLine text="positive" value={`${(good / total * 100).toFixed(2)}%`}  />

       
       </>
    )
    
  }


const Button = ({text, handleClick}) => {
 return (<button onClick={handleClick}>
    {text}
  </button>
 )
}


const App = () => {
 

  const [clicks, setClicks] = useState({good: 0, bad: 0, neutral: 0, total: 0})
  
  
  const handlePositiveClick = () => {
    const newClicks = {
    ...clicks,
    good: clicks.good + 1,
    total: clicks.total + 1
    }
    setClicks(newClicks)
  }
  
    const handleNegativeClick = () => {
    const newClicks = {
    ...clicks,
    bad: clicks.bad + 1,
    total: clicks.total + 1
    }
    setClicks(newClicks)
  }

     const handleNeutralClick = () => {
    const newClicks = {
    ...clicks,
    neutral: clicks.neutral + 1,
    total: clicks.total + 1
    }
    setClicks(newClicks)
  }


  // function clickPositive(){
  //   setGood((prevState) => prevState + 1);
  //   setTotal((prevState) => prevState + 1);
  // }

  //   function clickNegative(){
  //   setBad((prevState) => prevState + 1);
  //   setTotal((prevState) => prevState + 1);
  // }

  //    function clickNeutral(){
  //   setNeutral((prevState) => prevState + 0);
  //   setTotal((prevState) => prevState + 1);
  // }

 

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handlePositiveClick} text="good"/>
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleNegativeClick} text="bad" />
      <Statistics good={clicks.good} bad={clicks.bad} neutral={clicks.neutral} total={clicks.total} />
    </div>
  )
}

export default App