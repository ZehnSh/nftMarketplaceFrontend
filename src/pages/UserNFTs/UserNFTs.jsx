import React, { useState, useEffect } from 'react'
import Navigation from '../Navigation/Navigation';
import './UserNFTs.css'


const UserNFTs = ({ state }) => {
    const [userNFT, setUserNFT] = useState([]);

    useEffect(() => {
        const fetchUserNFTs = async () => {
            try {
                const res = await fetch(`http://localhost:3001/user-all-tokens/${state.account}`, {
                    method: "GET",
                    headers: {
                        "content-type": "application/json"
                    }
                });
                const data = await res.json();
                if (data.status === 200) {
                    setUserNFT(data.tokensList);

                } else {
                    console.log("error");
                }

            } catch (error) {
                console.log(error);
            }
        }
        fetchUserNFTs();
    }, [])
    return (<>
        <Navigation></Navigation>
        <div className="nft-list">
            {userNFT.length > 0 ? (
                userNFT.map((nft) => (
                    <div className="nft-item" key={nft.id}>
                        <img src={nft.tokenURI} alt="nft" />
                        <p>{nft.id}</p>
                    </div>
                ))
            ) : (
                <p className="no-nfts">No NFTs available</p>
            )}
        </div>
    </>
    )
}

export default UserNFTs