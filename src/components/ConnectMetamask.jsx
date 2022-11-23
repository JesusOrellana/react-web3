import { useEffect, useState } from "react";


export const ConnectMetamask = () => {

    const [account, setAccount] = useState([]);

    const connectWallet = async () => {
        try {
            if (!ethereum) return -1;
        
            const accounts = await ethereum.request({ method: "eth_requestAccounts", });
            setAccount(accounts)    
            return accounts;

    
        } catch (error) {
            console.log(error);
            return -2
        }
    };

    return (
        <div>
            <h2> Wallet Connected: { account }</h2>
            <button  onClick={ connectWallet }> Metamask </button>
            <a href="https://metamask.app.link/send/0xcCC9cA3C43B7Ea5cf9336edc4348fbC19015F9fc/transfer?address=0xBBeACcE553477d2846789A9a3eDDcbd404549882&uint256=2e8">pay</a>
        </div>
    )
}
