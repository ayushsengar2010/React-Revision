import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]= useState(5)

  const addValue =() =>{
    console.log("Clicked",counter);
    counter = counter+1
    setCounter(counter)
  }
  const removeValue =() =>{
      setCounter(counter-1)
  }
  return(
    <>
    <h1> Hello How are you</h1>
    <h2>counter:{counter}</h2>
    <button onClick={addValue}> 
      Add Value 
    </button>
    <br/>
    <button onClick={removeValue}> remove value :{counter} </button>
    <p>footer :{counter}</p>
    </>
  )
}
export default App
