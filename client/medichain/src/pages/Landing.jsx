import React from 'react'
import { useNavigate } from 'react-router-dom'
const Landing=()=> {
    const navigate = useNavigate();
    const handleMan=()=>{
        navigate('/manufacturer')
    }
    const handleRet=()=>{
        navigate('/retailer')
    }
    const handleCust=()=>{
        navigate('/customer')
    }
    const handleViewTransc=()=>{
        navigate('/transactions')
    }
  return (
    <div>
        <h1>Welcome to Medichain</h1>
        <p>go to:</p>
        <p onClick={handleMan}>manufacturer</p >
        <p onClick={handleRet}>retailer</p>
        <p onClick={handleCust}>customer</p>
        <p onClick={handleViewTransc}>Transac</p>
    </div>
  )
}

export default Landing;