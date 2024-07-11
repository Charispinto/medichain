import React from 'react'
import BuyMed from '../components/BuyMed'
import ViewMed from '../components/ViewMed'
import { SupplyChainProvider } from '../utils/SupplyChainContext'
function Customer() {
  return (
    <div>
      <SupplyChainProvider>
      <ViewMed/>
      <br/>
      <BuyMed/>
      </SupplyChainProvider>
    </div>
  )
}

export default Customer