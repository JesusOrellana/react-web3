import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ConnectMetamask } from './components/ConnectMetamask'
import { ConnectContract } from './components/ConnectContract'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1> Test OnchainID </h1>
      <ConnectMetamask/>

      <hr />

      <ConnectContract/>
    </div>
  )
}

export default App
