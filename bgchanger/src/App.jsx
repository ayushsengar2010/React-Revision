import React, { useState} from "react"

function App() {
  const [color, setcolor] = useState("color")
  return (
    <div className= "w-full h-screen duration-200"
    style ={{backgroundColor: color}}>
      <div className =" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className =" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setcolor("Red")}
          className= "outlined-none px-4 py-1 rounded-full text-white shadow-lg"
          style= {{backgroundColor: "Red"}}>Red</button>
          
          <button onClick={() => setcolor("Olive")}
            className= "outlined-none px-4 py-1 rounded-full text-white shadow-lg"
          style= {{backgroundColor: "Olive"}}>Olive</button>
           
          <button onClick={() => setcolor("Blue")}
           className= "outlined-none px-4 py-1 rounded-full text-white shadow-lg"
          style= {{backgroundColor: "Blue"}}>Blue</button>
           
          <button onClick={() => setcolor("Purple")}
           className= "outlined-none px-4 py-1 rounded-full text-white shadow-lg"
          style= {{backgroundColor: "Purple"}}>Purple</button>
           
          <button onClick={() => setcolor("Yellow")}
           className= "outlined-none px-4 py-1 rounded-full text-white shadow-lg"
          style= {{backgroundColor: "Yellow"}}>Yellow</button>
          
          <button onClick={() => setcolor("Green")}
           className= "outlined-none px-4 py-1 rounded-full text-white shadow-lg"
          style= {{backgroundColor: "Green"}}>Green</button>
          
          <button onClick={() => setcolor("Pink")}
           className= "outlined-none px-4 py-1 rounded-full text-white shadow-lg"
          style= {{backgroundColor: "Pink"}}>Pink</button>
          
          <button onClick={() => setcolor("Lavender")}
           className= "outlined-none px-4 py-1 rounded-full text-white shadow-lg"
          style= {{backgroundColor: "Lavender"}}>Lavender</button>
          
          <button onClick={() => setcolor("White")}
           className= "outlined-none px-4 py-1 rounded-full text-white shadow-lg"
          style= {{backgroundColor: "White"}}>White</button>
          
          <button onClick={() => setcolor("Black")}
           className= "outlined-none px-4 py-1 rounded-full text-white shadow-lg"
          style= {{backgroundColor: "Black"}}>Black</button>
        </div>
      </div>
      
    </div>
  )
}

export default App
