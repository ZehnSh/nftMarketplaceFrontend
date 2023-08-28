import React from 'react'
import Navigation from '../Navigation/Navigation';
import './ListNFT.css'


const ListNFT = ({ state }) => {
    const listNFT = async (event) => {
        event.preventDefault();
        const { web3, contract, account } = state;
        const nftID = document.querySelector('#nftID').value;
        const nftPrice = document.querySelector('#nftPrice').value;
        const nftPriceInWei = web3.utils.toWei(String(nftPrice), "ether")

        if (state.contract && state.account) {
            try {
                await contract.methods.listNFT(nftID, nftPriceInWei).send({ from: account });

                // Transaction successful
            } catch (error) {
                console.error("Error Listing NFT:", error);
                // Handle the error appropriately
            }
        }
    }

    return (
        <>
            <Navigation></Navigation>
            <div className="form-container">
                <h2>Add NFT</h2>
                <form onSubmit={listNFT}>
                    <input
                        type="number"
                        placeholder="Enter NFT ID"
                        id='nftID'
                    />
                    <input
                        type="number"
                        placeholder="Enter NFT Price in Eth"
                        id='nftPrice'
                    />
                    <input
                        type="submit"
                        value="Create Listing"
                    />
                </form>
            </div>
        </>
    )
}

export default ListNFT