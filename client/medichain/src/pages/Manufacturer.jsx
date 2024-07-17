//added a heading to each pages
import React from 'react';
import AddNewMed from '../components/AddNewMed';
import {SupplyChainProvider } from '../utils/SupplyChainContext';
import ViewNewMed from '../components/ViewNewMed';
function Manufacturer() { 
  return (
    <div>
        <h1 className='text-2xl font-semibold text-center text-sky-700'>Welcome, Manufacturer</h1>
        <br/>
        <SupplyChainProvider>
        <AddNewMed/>
        <br />
        <ViewNewMed/>
          <br/>
        </SupplyChainProvider>
    </div>
  )
}

export default Manufacturer