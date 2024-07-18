import React, { useState } from 'react';

const QuantityButton = ({ quantity, setQuantity }) => {
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex items-center">
      <button onClick={handleDecrease} className="px-2 py-1 border">-</button>
      <span className="mx-2">{quantity}</span>
      <button onClick={handleIncrease} className="px-2 py-1 border">+</button>
    </div>
  );
};

export default QuantityButton;
