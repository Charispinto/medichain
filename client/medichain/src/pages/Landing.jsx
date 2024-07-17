import React from 'react';
import { useNavigate } from 'react-router-dom';
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
        <div
            className="hero min-h-screen"
        style={{
            backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/023/417/426/original/medical-infographic-banner-background-clinic-pharmacy-laboratory-test-and-research-healthcare-concept-backdrop-illustration-vector.jpg')",
}}
        >
        <div className="hero-overlay bg-opacity-15"></div>
        <div className="hero-content text-center">
            <div className="max-w-md">
            <h1 className="text-4xl text-black tracking-wide font-semibold leading-relaxed" >
                <span className='text-white' > MediChain : </span>
               Your Reliable Pharmaceutical Supply Chain Solution
            </h1>
            <br />
            <p className="text-sm md:text-base lg:text-2xl text-white">
                Your one stop supply chain tracker and analyser
            </p>
            </div>
        </div>
        </div>
        
    );
}

export default Landing;