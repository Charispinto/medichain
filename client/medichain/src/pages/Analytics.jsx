//added a heading to each pages
import React from 'react';
import {SupplyChainProvider } from '../utils/SupplyChainContext';
import ViewRequests from '../components/ViewRequests';
function Analytics() { 
  return (
    <div>
        <h1 className='text-2xl font-semibold text-center text-sky-700'>Welcome to Analytics</h1>
        <br/>
        <SupplyChainProvider>
        <ViewRequests/>
        </SupplyChainProvider>
    </div>
  )
}

export default Analytics