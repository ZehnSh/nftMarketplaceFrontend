import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'


const Navigation = () => {
    return (
        <nav className="navigation">
            <ul className="navigation-list">
                <li className="navigation-item">
                    <Link to="/" className="navigation-link">Wallet</Link>
                </li>
                <li className="navigation-item">
                    <Link to="/MintNFT" className="navigation-link">Mint NFT</Link>
                </li>
                <li className="navigation-item">
                    <Link to="/ListNFT" className="navigation-link">List NFT</Link>
                </li>
                <li className="navigation-item">
                    <Link to="/ListedNFTs" className="navigation-link">Listed NFTs</Link>
                </li>
                <li className="navigation-item">
                    <Link to="/UserNFTs" className="navigation-link">User NFTs</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation