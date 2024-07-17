import React from 'react'
import BuyMed from '../components/BuyMed'
import ViewMed from '../components/ViewMed'
import { SupplyChainProvider } from '../utils/SupplyChainContext'
function Customer() {
  return (
    <div>
      <h1 className='text-2xl font-semibold text-center text-sky-700'>Welcome,Customer</h1>
      <SupplyChainProvider>
      <ViewMed/>
      <br/>
      <BuyMed/>
      </SupplyChainProvider>
    </div>
  )
}

export default Customer