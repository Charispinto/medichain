import React,{ createContext, useState, useEffect } from "react";
import Web3 from "web3";
import MedicineSupplyChain from "../../../../contracts/build/contracts/MedicineSupplyChain.json";

export const SupplyChainContext = createContext();

export const SupplyChainProvider = ({ children }) => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const contractAddress = MedicineSupplyChain.networks["5777"].address;
  const contractABI = MedicineSupplyChain.abi;
//   const [account, setAccount] = useState('');

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(() => {
          const web3Instance = new Web3(window.ethereum);
          // console.log(window.ethereum)
          setWeb3(web3Instance);
          // console.log(
          //   contractAddress,
          //   "0x9b83B66bcC7f7941ea94A2Bbf4e2832Db62957C8"
          // );
          const contractInstance = new web3Instance.eth.Contract(
            contractABI,
            contractAddress
          );
          setContract(contractInstance);
        })
        .catch((err) => {
          // Handle error if the user rejects the connection request
          console.error(err);
        });
    } else {
      alert("Please install an another Ethereum wallet.");
    }
  }, []);
  return (
    <SupplyChainContext.Provider value={{web3,contract}}>
      {children}
    </SupplyChainContext.Provider>
  );
}

