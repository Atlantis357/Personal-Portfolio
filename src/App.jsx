import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1 className="text-3xl font-bold text-blue-700">
      Welcome to Abraham's personal portfolio!
    </h1>
  )
}

export default App
