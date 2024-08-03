import React, { useState, useContext } from 'react';
import { SupplyChainContext } from '../utils/SupplyChainContext';
import BigNumber from 'bignumber.js';
import ViewingMeds from './template/ViewingMeds';

function ViewRequests() {
  const { web3, contract } = useContext(SupplyChainContext);
  const [requestedMedicines, setRequestedMedicines] = useState([]);
  const [purchasedMedicines, setPurchasedMedicines] = useState([]);
  const [totalPurchasedMedicines, setTotalPurchasedMedicines] = useState([]);
  const [currentMostRequestedMed, setCurrentMostRequestedMed] = useState('');

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

    // Find current most requested med
    if (requestedList.length > 0) {
      let mostRequestedMed = requestedList[0].name;
      let maxQuantity = new BigNumber(requestedList[0].quantity);

      requestedList.forEach(med => {
        const quantity = new BigNumber(med.quantity);
        if (quantity.isGreaterThan(maxQuantity)) {
          maxQuantity = quantity;
          mostRequestedMed = med.name;
        }
      });

      setCurrentMostRequestedMed(mostRequestedMed);
    }
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
      <div>
      {currentMostRequestedMed && <h2 className='text-md font-semibold text-center text-sky-700'>Current Most Requested Med: {currentMostRequestedMed}</h2>}
        <ViewingMeds medicines={requestedMedicines} handleClick={handleViewRequestedMeds} buttonLabel='View Requested Meds' />
      </div>
      <ViewingMeds medicines={purchasedMedicines} handleClick={handleViewPurchasedMeds} buttonLabel='View Purchased Meds' />
      <ViewingMeds medicines={totalPurchasedMedicines} handleClick={handleViewTotalPurchasedMeds} buttonLabel='View Total Purchased Meds' />
    </div>
  );
}

export default ViewRequests;
