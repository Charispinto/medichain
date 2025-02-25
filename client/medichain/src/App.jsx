import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Web3 from "web3";
import MedicineSupplyChain from "../../../contracts/build/contracts/MedicineSupplyChain.json";
import "./App.css";
import Customer from "./pages/Customer";
import Manufacturer from "./pages/Manufacturer";
import Retailer from "./pages/Retailer";
import Transactions from "./pages/Transactions";
import Landing from "./pages/Landing";
import Analytics from "./pages/Analytics";
import Navbar from "./components/Navbar";
function App() {
  const [web3, setWeb3] = useState(null);
  const [Contract, setContract] = useState(null);
  const contractAddress = MedicineSupplyChain.networks["5777"].address;
  const contractABI = MedicineSupplyChain.abi;

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(() => {
          const web3Instance = new Web3(window.ethereum);
          // console.log(window.ethereum)
          setWeb3(web3Instance);
          console.log(
            contractAddress
          );
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
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Landing/>} />
        <Route path="/manufacturer" element={<Manufacturer/>} />
        <Route path="/retailer" element={<Retailer/>} />
        <Route path="/customer" element={<Customer/>} />
        <Route path="/transactions" element={<Transactions/>} />
        <Route path="/analytics" element={<Analytics/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
