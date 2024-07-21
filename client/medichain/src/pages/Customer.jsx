import React, { useState } from 'react';
import BuyMed from '../components/BuyMed';
import ViewMed from '../components/ViewMed';
import { SupplyChainProvider } from '../utils/SupplyChainContext';
import CustomerMed from '../components/CustomerMed';
import PurchaseCards from '../components/PurchaseCards';


function Customer() {


  return (
    <div className="min-h-screen flex flex-col items-center justify-start ">
      <h1 className='text-2xl font-semibold text-center text-sky-700 mb-8'>Welcome, Customer</h1>
      <SupplyChainProvider>
        <ViewMed />
        <br />
        <BuyMed />
        <PurchaseCards/>
      </SupplyChainProvider>
      {/* <CustomerMed/> */}
      
      
    </div>
  );
}

export default Customer;
