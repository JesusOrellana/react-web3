import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ConnectMetamask } from './components/ConnectMetamask'
import { ConnectContract } from './components/ConnectContract'
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";

import { Web3Modal } from "@web3modal/react";

import { chain, configureChains, createClient, WagmiConfig } from "wagmi";

import { Web3Button } from "@web3modal/react";

const chains = [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum];

// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "e66c5825ba8536b90b76d8805ef861a9" }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "web3Modal", chains }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <WagmiConfig client={wagmiClient}>
        <Web3Button />
      </WagmiConfig>

      <Web3Modal
        projectId="e66c5825ba8536b90b76d8805ef861a9"
        ethereumClient={ethereumClient}
      />
      

      <hr />

      <h1> Test OnchainID </h1>
      <ConnectMetamask/>

      <hr />

      <ConnectContract/>
    </div>
  )
}

export default App
