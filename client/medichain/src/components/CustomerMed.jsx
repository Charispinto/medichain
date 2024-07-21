import React, { useState } from 'react';
import QuantityButton from './QuantityButton'

function CustomerMed() {
    const medicinesData = [
        {
          title: 'Dolo 650 (100 mg)',
          price: '₹30',
          image: '/images/dolopills.jpg'
        },
        { 
          title: 'Vicks Cough Syrup (20 ml)',
          price: '₹90',
          image: '/images/vickssyrup.jpg'
        },
        {
          title: 'Crocin (500 mg)',
          price: '₹35',
          image: '/images/crocin.jpeg'
        },
        {
          title: 'Amlodipine',
          price: '₹69',
          image: '/images/amlodipine.jpg'
        },
        {
          title: 'Strepils (8 per)',
          price: '₹90',
          image: '/images/strepils.jpg'
        },
        {
          title: 'Ibuprofen (200 mg)',
          price: '₹50',
          image: '/images/ibuprofen.jpg'
        },
        {
          title: 'Cetirizine (10 mg)',
          price: '₹25',
          image: '/images/cetirizine.jpg'
        },
        {
          title: 'Metformin (500 mg)',
          price: '₹45',
          image: '/images/metformin.jpeg'
        }
      ];
    
    const [medicines, setMedicines] = useState(medicinesData.map(med => ({ ...med, quantity: 0 })));

    const setMedicineQuantity = (index, quantity) => {
        const updatedMedicines = [...medicines];
        updatedMedicines[index].quantity = quantity;
        setMedicines(updatedMedicines);
    };

    return (
    <div className="w-full max-w-7xl mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-sky-700">Available Medicine</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {medicines.map((medicine, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <img src={medicine.image} alt={medicine.title} className="w-39 h-32 object-cover mb-4" />
              <h3 className="text-xl font-bold mb-2">{medicine.title}</h3>
              <p className="text-gray-700 mb-4">{medicine.price}</p>
              <div className="flex items-center justify-between w-full">
                {/* <QuantityButton
                  quantity={medicine.quantity}
                  setQuantity={(quantity) => setMedicineQuantity(index, quantity)}
                /> */}
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4">
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default CustomerMed