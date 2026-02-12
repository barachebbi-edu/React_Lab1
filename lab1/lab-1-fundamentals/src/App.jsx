import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from '../components/Greeting'
import StatusBadge from '../components/StatusBadge'
import UserCard from '../components/UserCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
      <Greeting />
      <StatusBadge />
      <UserCard
        name="Alice"
        email="Alice@gmail.com"
        role="Developer"
      />
      <UserCard
        name="Bob"
        email="bob@gmail.com"
        role="Designer"
      />
      <UserCard
        name="Charlie"
        email="charlie@gmail.com"
        role="Manager"
      />
    </div>
    </>
  )
}

export default App
