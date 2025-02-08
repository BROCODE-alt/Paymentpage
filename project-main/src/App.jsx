import { useState } from 'react'
import './App.css'
import Paypage from './components/Paypage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Paypage/>
    </div>
  )
}

export default App
