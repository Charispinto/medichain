//added caption to the page
import React, { useState, useContext } from "react";
import { SupplyChainContext } from "../utils/SupplyChainContext";
import MedForm from "./template/MedForm";

function BuyMed() {
  const { web3, contract } = useContext(SupplyChainContext);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!web3 || !contract) return;
    const accounts = await web3.eth.getAccounts();
    contract.methods
      .buyMed(name, quantity)
      .send({ from: accounts[0] })
      .on("transactionHash", (hash) => {
        console.log("Transaction hash:", hash);
      })
      .on("receipt", (receipt) => {
        console.log("Transaction successful:", receipt);
      })
      .on("error", (error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h2 className="text-center text-sky-600 py-3">Select the medicines you need to buy and place your order</h2>
      <MedForm handleSubmit={handleSubmit} setName={setName} setQuantity={setQuantity} />
    </div>
  );
}

export default BuyMed;
