import React,{useState, useContext} from 'react'
import { SupplyChainContext } from '../utils/SupplyChainContext';
import BigNumber from "bignumber.js";
import ViewingMeds from './template/ViewingMeds';

function ViewMed() {
    const { web3,contract } = useContext(SupplyChainContext);
    const [medicines, setMedicines] = useState([]);

  
    const handleClick = async (e) => {
      e.preventDefault();
      if (!web3 || !contract) return;
      const medList = await contract.methods.viewAllMed().call();
      const medicineList= medList.map(med => ({
        name: med.name,
        quantity: new BigNumber(med.quantity).toString(),
        timestamp: new BigNumber(med.timestamp).toString(),
      }));

      console.log(medicineList);
      setMedicines(medicineList);
    };
  return (
    <ViewingMeds medicines={medicines} handleClick={handleClick} buttonLabel='View Meds'/>
  )
}

export default ViewMed;