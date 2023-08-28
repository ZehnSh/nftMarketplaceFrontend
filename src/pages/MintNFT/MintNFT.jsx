import React, { useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import './MintNFT.css'; // Import your CSS file

const MintNFT = ({ state }) => {
    const [minted, setMinted] = useState(false);

    const createNFT = async (event) => {
        event.preventDefault();
        const { contract, account } = state;
        const url = document.querySelector('.nft-input').value;

        if (contract && contract.methods) {
            try {
                await contract.methods.mintNFT(url).send({ from: account });
                setMinted(true);
                // Hide the alert after 5 seconds
                setTimeout(() => {
                    setMinted(false);
                }, 5000);
            } catch (error) {
                console.error("Error minting NFT:", error);
                // Handle the error appropriately
            }
        }
    }

    // Hide the alert when the component re-renders
    useEffect(() => {
        if (minted) {
            setTimeout(() => {
                setMinted(false);
            }, 5000);
        }
    }, [minted]);

    return (
        <>
            <Navigation></Navigation>
            <form className="nft-form" onSubmit={createNFT}>
                <input
                    type="text"
                    placeholder="Enter NFT image URL"
                    className="nft-input"
                />
                <input
                    type="submit"
                    value="Create NFT"
                    className="nft-submit"
                />
            </form>
            {minted && <p className="minted-alert">NFT Minted!</p>}
        </>
    )
}

export default MintNFT;
