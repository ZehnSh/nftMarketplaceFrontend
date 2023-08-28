import React from 'react'
import { useNavigate } from 'react-router-dom'
import Web3 from 'web3';
import ABI from '../../ABI.json';
import './Wallet.css'


const Wallet = ({ saveState }) => {

    const navigateTo = useNavigate();

    const connectWallet = async () => {
        try {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                const accounts = await window.ethereum.request({
                    method: 'eth_requestAccounts',
                });
                const contractAddress = "0x348F704faEBF7Cf415dE593D8b786FcfF492F186";
                const contract = new web3.eth.Contract(ABI, contractAddress);
                saveState({ web3: web3, contract: contract, account: accounts[0] });
                navigateTo('/ListedNFTs');
            } else {
                throw new Error('No crypto wallet found');
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="container">
                <button onClick={connectWallet}>Connect Wallet</button>
            </div>

        </>
    )
}

export default Wallet