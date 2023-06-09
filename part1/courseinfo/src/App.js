
const Header = (props) => {

  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {

  return(
    <>
      <p>
        {props.partEl[0].name} {props.partEl[0].exercises}
      </p>
        <p>
        {props.partEl[1].name} {props.partEl[1].exercises}
      </p>
      <p>
        {props.partEl[2].name} {props.partEl[2].exercises}
      </p>
    </>
  )
}

const Total = (props) => {
  
  return(
    <>
      <p>Number of exercises {
      props.partEl[0].exercises 
      + props.partEl[1].exercises
      + props.partEl[2].exercises
    }
      </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
    name: 'Fundamentals of React',
    exercises: 10
    },
    {
    name: 'Using props to pass data',
    exercises: 7
    },
    {
    name: 'State of a component',
    exercises: 14
  } 
]

const partsList = parts.map(part => part)
console.log(partsList)


  return (
    <div>
      <Header course={course}/>
      <Content 
      partEl={partsList}
      />
      <Total partEl={partsList} />
    </div>
  )
}

export default App