import React, { useState } from 'react';
import BuyMed from '../components/BuyMed';
import ViewMed from '../components/ViewMed';
import { SupplyChainProvider } from '../utils/SupplyChainContext';
import PurchaseCards from '../components/PurchaseCards';
import RequestMed from '../components/RequestMed';


function Customer() {


  return (
    <div className="min-h-screen flex flex-col items-center justify-start ">
      <h1 className='text-2xl font-semibold text-center text-sky-700 mb-2 mt-12'>Welcome, Customer</h1>
      <SupplyChainProvider>
        {/* <ViewMed />
        <br /> */}
        <BuyMed />
        <PurchaseCards/>
        <RequestMed/>
      </SupplyChainProvider>
      
      
    </div>
  );
}

export default Customer;
