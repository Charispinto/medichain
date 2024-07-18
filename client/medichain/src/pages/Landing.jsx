import React from 'react';
import { useNavigate } from 'react-router-dom';
import GroupCard from '../components/template/GroupCard'; // Ensure the path to GroupCard is correct

const Landing = () => {
  const navigate = useNavigate();

  const handleMan = () => {
    navigate('/manufacturer');
  };
  const handleRet = () => {
    navigate('/retailer');
  };
  const handleCust = () => {
    navigate('/customer');
  };
  const handleViewTransc = () => {
    navigate('/transactions');
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/023/417/426/original/medical-infographic-banner-background-clinic-pharmacy-laboratory-test-and-research-healthcare-concept-backdrop-illustration-vector.jpg')",
        backgroundAttachment: 'fixed', // Ensures the background remains fixed while scrolling
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Landing Page Content */}
      <div className="hero min-h-screen bg-transparent">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-6xl text-black font-extrabold leading-tight">
              MediChain
            </h1>
            <h2 className="text-xl text-black font-bold mt-4">
              Your Reliable Pharmaceutical Supply Chain Solution
            </h2>
            <p className="text-base text-black font-semibold mt-2">
              Your one-stop supply chain tracker and analyser
            </p>
          </div>
        </div>
      </div>

      {/* Index Page Content */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-transparent p-6">
        <h1 className="text-4xl font-bold mb-12 text-black">Choose Your Group</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div onClick={handleMan}>
            <GroupCard title="Manufacturer" image="/images/manu.jpg" />
          </div>
          <div onClick={handleRet}>
            <GroupCard title="Retailer" image="images/retail.png" />
          </div>
          <div onClick={handleCust}>
            <GroupCard title="Customer" image="/images/cust.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
