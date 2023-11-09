import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import '../App.css'

function App() {
  const [count, setCount] = useState(0)
  function cal(count){
    setCount((count) => count + 1)
  }
  return (
    <>
      <p className="read-the-docs">
        todoapp coming soon
      </p>
    </>
  )
}

export default App
