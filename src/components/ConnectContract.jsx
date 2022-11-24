import { useEffect, useState } from "react"
import { ethers } from "ethers";
import OnchainID from '@onchain-id/solidity';
const { ethereum } = window
import detectEthereumProvider from '@metamask/detect-provider'


export const ConnectContract = () => {

    const [ signer, setSigner] = useState([])
    const [address, setAddress] = useState([])

    const connectProvider = async () => {

        const provider = new ethers.providers.Web3Provider(ethereum);

        const signer = provider.getSigner();
        let data = await signer.getAddress();
        console.log(data);
        setSigner(signer)
        setAddress(data) 
    
    }

    const conetionContract = async () => {

        let identityImplementation = await new ethers.ContractFactory(
            OnchainID.contracts.Identity.abi,
            OnchainID.contracts.Identity.bytecode,
            signer
        ).deploy(
            address,
            true
        );

        await identityImplementation.deployed();
        
        console.log('=======================================');
        console.log('Primer deploy identity');
        console.log('=======================================');
        console.log(identityImplementation.address);
        console.log(identityImplementation.deployTransaction.hash);
        balance = await provider.getBalance(address)
        console.log('Matic: ',balance._hex/10**18);
        console.log('=======================================');

    };

    useEffect(() => {
      connectProvider()
    }, [])
    

    return (
        <div>
            <h2>OnchainId Deploy</h2>
            <h3> signer { address } </h3>
            <button onClick={ conetionContract }> Deploy </button>
        </div>
        
    )
}
