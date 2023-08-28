import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Wallet from './pages/Wallet/Wallet'
import MintNFT from './pages/MintNFT/MintNFT'
import ListNFT from './pages/ListNFT/ListNFT'
import ListedNFTs from './pages/ListedNFTs/ListedNFTs'
import UserNFTs from './pages/UserNFTs/UserNFTs'

import './App.css'

function App() {
  const [state, setState] = useState({ web3: null, contract: null, account: null });
  const saveState = ({ web3, contract, account }) => {
    setState({ web3: web3, contract: contract, account: account });
  }

  const router = createBrowserRouter([
    { path: '/', element: <Wallet saveState={saveState} /> },
    { path: '/MintNFT', element: <MintNFT state={state} /> },
    { path: '/ListNFT', element: <ListNFT state={state} /> },
    { path: '/ListedNFTs', element: <ListedNFTs state={state} /> },
    { path: '/UserNFTs', element: <UserNFTs state={state} /> },

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
