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
        <h1 className='text-red-900 text-center'>Welcome to Medichain</h1>
    </div>
  )
}

export default Landing;