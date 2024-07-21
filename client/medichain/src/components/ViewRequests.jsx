import React, { useState, useContext } from 'react';
import { SupplyChainContext } from '../utils/SupplyChainContext';
import BigNumber from 'bignumber.js';
import ViewingMeds from './template/ViewingMeds';

function ViewRequests() {
  const { web3, contract } = useContext(SupplyChainContext);
  const [requestedMedicines, setRequestedMedicines] = useState([]);
  const [purchasedMedicines, setPurchasedMedicines] = useState([]);
  const [totalPurchasedMedicines, setTotalPurchasedMedicines] = useState([]);

  const handleViewRequestedMeds = async () => {
    if (!web3 || !contract) return;
    const reqList = await contract.methods.viewRequestedMed().call();
    const requestedList = reqList.map(med => ({
      name: med.name,
      quantity: new BigNumber(med.quantity).toString(),
      timestamp: new BigNumber(med.timestamp).toString(),
    }));

    console.log(requestedList);
    setRequestedMedicines(requestedList);
  };

  const handleViewPurchasedMeds = async () => {
    if (!web3 || !contract) return;
    const purList = await contract.methods.viewPurchasedMed().call();
    const purchasedList = purList.map(med => ({
      name: med.name,
      quantity: new BigNumber(med.quantity).toString(),
      timestamp: new BigNumber(med.timestamp).toString(),
    }));

    console.log(purchasedList);
    setPurchasedMedicines(purchasedList);
  };

  const handleViewTotalPurchasedMeds = async () => {
    if (!web3 || !contract) return;
    const purList = await contract.methods.viewPurchasedMed().call();
    const medicineMap = {};

    purList.forEach(med => {
      const name = med.name;
      const quantity = new BigNumber(med.quantity).toString();
      const timestamp = new BigNumber(med.timestamp).toString();

      if (medicineMap[name]) {
        medicineMap[name].quantity = (parseInt(medicineMap[name].quantity) + parseInt(quantity)).toString();
        medicineMap[name].timestamp = timestamp;
      } else {
        medicineMap[name] = {
          name,
          quantity,
          timestamp
        };
      }
    });

    const totalPurchasedList = Object.values(medicineMap);
    console.log(totalPurchasedList);
    setTotalPurchasedMedicines(totalPurchasedList);
  };

  return (
    <div>
      <ViewingMeds medicines={requestedMedicines} handleClick={handleViewRequestedMeds} buttonLabel='View Requested Meds' />
      <ViewingMeds medicines={purchasedMedicines} handleClick={handleViewPurchasedMeds} buttonLabel='View Purchased Meds' />
      <ViewingMeds medicines={totalPurchasedMedicines} handleClick={handleViewTotalPurchasedMeds} buttonLabel='View Total Purchased Meds' />
    </div>
  );
}

export default ViewRequests;
