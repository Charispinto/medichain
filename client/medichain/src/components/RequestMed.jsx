import React, { useState, useContext } from "react";
import { SupplyChainContext } from "../utils/SupplyChainContext";
import MedForm from "./template/MedForm";

function RequestMed() {
  const { web3, contract } = useContext(SupplyChainContext);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!web3 || !contract) return;
    const accounts = await web3.eth.getAccounts();
    contract.methods
      .requestMed(name, quantity)
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
      <h2 className="text-center text-sky-600 py-3 ">Can't find the medicine you need?</h2>
      <MedForm handleSubmit={handleSubmit} setName={setName} setQuantity={setQuantity} />
    </div>
  );
}

export default RequestMed;
