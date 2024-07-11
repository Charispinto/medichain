import React from 'react'
import BuyNewMed from '../components/BuyNewMed.';
import {SupplyChainProvider } from '../utils/SupplyChainContext';
import ViewNewMed from '../components/ViewNewMed';
import ViewMed from '../components/ViewMed';
function Retailer() {
  return (
    <div>
      <SupplyChainProvider>
        <ViewNewMed/>
        <br/>
        <BuyNewMed/>
        <br/>
        <ViewMed/>
      </SupplyChainProvider>
    </div>
  )
}

export default Retailer