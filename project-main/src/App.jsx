import { useState } from 'react'
import './App.css'
import Paypage from './components/Paypage'
const uri = "mongodb+srv://fd4bizness:<KL57ak47>@fd.cluat.mongodb.net/?retryWrites=true&w=majority&appName=fd";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Paypage/>
    </div>
  )
}

export default App
