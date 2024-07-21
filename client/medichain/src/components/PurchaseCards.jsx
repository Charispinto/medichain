import React, { useState, useContext } from 'react';
import { SupplyChainContext } from '../utils/SupplyChainContext';
import BigNumber from "bignumber.js";
import CustomerMed from './CustomerMed';
import CustomerTest from './CustomerTest';

function PurchaseCards() {
    const { web3, contract } = useContext(SupplyChainContext);
    const [medicines, setMedicines] = useState([]);

    const fetchMedicines = async () => {
        if (!web3 || !contract) return;
        const medList = await contract.methods.viewAllMed().call();
        const medicineList = medList.map(med => ({
            name: med.name,
            quantity: new BigNumber(med.quantity).toString(),
            timestamp: new BigNumber(med.timestamp).toString(),
        }));
        setMedicines(medicineList);
        console.log("med HEREEEE:",medicineList)
    };

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleSubmit = async (e) => {
        // e.preventDefault();
        try {
            const accounts = await web3.eth.getAccounts();
            await contract.methods
                .buyMed(name, quantity)
                .send({ from: accounts[0] })
                .on("transactionHash", (hash) => {
                    console.log("Transaction hash:", hash);
                })
                .on("receipt", (receipt) => {
                    console.log("Transaction successful:", receipt);
                    fetchMedicines(); // Fetch the updated medicines after transaction
                })
                .on("error", (error) => {
                    console.error("Transaction error:", error);
                    // Handle specific JSON RPC errors if needed
                });
        } catch (error) {
            console.error("Error in handleSubmit:", error);
            if (error.message.includes("failed internal JSON-RPC error")) {
                // Handle specific JSON RPC error
                console.error("JSON RPC Error:", error);
            }
        }
    };

    return (
        <CustomerTest medicines={medicines} handleSubmit={handleSubmit} setName={setName} setQuantity={setQuantity} handleClick={fetchMedicines} />
    );
}

export default PurchaseCards;
