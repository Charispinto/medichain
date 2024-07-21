import React, { useState } from 'react';
import BuyQuantity from './BuyQuantity';

function CustomerTest({medicines,  handleSubmit, setName, setQuantity,handleClick}) {
    
    return (
    <div className="w-full max-w-7xl mt-8">
        <button className="btn btn-outline btn-info" onClick={handleClick}>
        Refresh
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center text-sky-700">Available Medicine</h2>
        {/* <p>{medicines['dolo']}</p> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {medicines.map((medicine, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              {/* <img src={medicine.image} alt={medicine.title} className="w-39 h-32 object-cover mb-4" /> */}
              <h3 className="text-xl font-bold mb-2">{medicine.name}</h3>
              <p className="text-gray-700 mb-4">{medicine.quantity}</p>
              <BuyQuantity name={medicine.name} quantity={medicine.quantity} handleSubmit={handleSubmit} setName={setName} setQuantity={setQuantity} />
            </div>
          ))}
        </div>
      </div>
  )
}

export default CustomerTest