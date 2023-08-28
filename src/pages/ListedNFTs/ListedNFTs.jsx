import React, { useState, useEffect } from 'react'
import Navigation from '../Navigation/Navigation';
import './ListedNFTs.css'


const ListedNFTs = ({ state }) => {
    const [listNFT, setListedNFT] = useState([]);

    useEffect(() => {
        const fetchListedNFTs = async () => {
            try {
                const res = await fetch('http://localhost:3001/view-all-listed-nft', {
                    method: "GET",
                    headers: {
                        "content-type": "application/json"
                    }
                });
                const data = await res.json();
                if (data.status === 200) {
                    setListedNFT(data.listedNFT);
                }
            } catch (e) {
                console.log(e);
            }
        }
        fetchListedNFTs();
    }, []);

    const buyNFT = async (tokenId, nftPrice) => {
        const { contract, account } = state;
        if (contract && contract.methods) {
            try {
                await contract.methods.buyNFT(tokenId).send({ from: account, value: nftPrice });
                console.log(`Successfully bought NFT with tokenId ${tokenId}`);
            } catch (error) {
                console.error("Error buying NFT:", error);
            }
        }
    }
    return (
        <>
            <Navigation />
            <div className="container">
                <div className="nft-list">
                    {listNFT.length > 0 ? (
                        listNFT.map((nft, index) => (
                            <div className="nft-item" key={nft.id}>
                                <div className="nft-info">
                                    <div className="nft-image">
                                        <img src={nft.uri} alt="NFT" />
                                    </div>
                                    <div className="nft-details">
                                        {/* <p className="nft-owner">
                                        <span className="nft-title">Owner:</span> {nft.owner}
                                    </p> */}
                                        <p className="nft-price">
                                            <span className="nft-title">Price:</span> {state.web3.utils.fromWei(String(nft.nftPrice), "ether")} <span> Ether</span>
                                        </p>
                                        <button onClick={() => buyNFT(nft.id, nft.nftPrice)}>Buy NFT</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-nfts">No NFTs available</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default ListedNFTs