import React from 'react';
import AddNewMed from '../components/AddNewMed';
import {SupplyChainProvider } from '../utils/SupplyChainContext';
import ViewNewMed from '../components/ViewNewMed';
function Manufacturer() {
  return (
    <div>
        <h1>Manufacturer</h1>
        <h3>Add new med</h3>
        <SupplyChainProvider>
          <AddNewMed/>
          <br/>
          <ViewNewMed/>
        </SupplyChainProvider>
    </div>
  )
}

export default Manufacturer