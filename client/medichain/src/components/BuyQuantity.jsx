import React, { useState } from "react";

const BuyQuantity = ({ name,quantity,handleSubmit, setName, setQuantity }) => {
  const [buyQuantity, setBuyQuantity] = useState(0);

  const handleIncrease = () => {
    if (buyQuantity < quantity) {
      setBuyQuantity(buyQuantity + 1);
    }
  };

  const handleDecrease = () => {
    if (buyQuantity > 0) {
      setBuyQuantity(buyQuantity - 1);
    }
  };

  const handleBuyClick = (name,quantity)=>{
    console.log("clicked btn ")
    setName(name);
    setQuantity(buyQuantity);
    console.log(name,buyQuantity)
    handleSubmit();
    }

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center">
        <button onClick={handleDecrease} className="px-2 py-1 border">
          -
        </button>
        <span className="mx-2">{buyQuantity}</span>
        <button onClick={handleIncrease} className="px-2 py-1 border">
          +
        </button>
      </div>
      <button
        onClick={() => handleBuyClick(name,buyQuantity)}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
      >
        Buy
      </button>
    </div>
  );
};

export default BuyQuantity;
