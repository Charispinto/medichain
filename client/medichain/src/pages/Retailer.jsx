import React from 'react'
import BuyNewMed from '../components/BuyNewMed.';
import {SupplyChainProvider } from '../utils/SupplyChainContext';
import ViewNewMed from '../components/ViewNewMed';
import ViewMed from '../components/ViewMed';
function Retailer() {
  return (
    <div>
      <h1 className='text-2xl font-semibold text-center text-sky-700'>Welcome, Retailer</h1>
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