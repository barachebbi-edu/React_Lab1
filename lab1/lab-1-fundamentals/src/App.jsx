import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting' //importing the Greeting component
import StatusBadge from './components/StatusBadge' //importing the StatusBadge component

function App() {
  return (
    <div className="App">
      <Greeting />
      <StatusBadge />
    </div>
  )
}

export default App;
