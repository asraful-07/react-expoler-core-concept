import './App.css'
import Counter from './Counter'
import Users from './Users'

function App() {

  const AddToClick = (num) => {
    alert( num + 4)
  }

  const handelClick = () => {
    alert('hello i am mr.')

    
  }
  return (
    <>
     
      <h4>React core concept 2</h4>
      
      <Counter></Counter>
      <Users></Users>

      <button onClick={handelClick}>Click Me</button>
      <button className='btn' onClick={() => {alert('This is short chat ')}}>Click Me 2</button>
      {/* btn */}
      <button onClick={ () => { AddToClick(3)}}>Click Me 3</button>
    </>
  )
}

export default App
