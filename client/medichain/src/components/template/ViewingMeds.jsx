//added the view med in table form
import 'daisyui/dist/full.css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

function ViewingMeds({ medicines, buttonLabel, handleClick }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
    handleClick();
  };

  return (
    <div className="container mx-auto p-4">
      <button className="btn btn-outline btn-info" onClick={handleButtonClick}>
        {buttonLabel}
      </button>
      {isVisible && (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Timestamp</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((med, index) => (
                <tr key={index}>
                  <td>{med.quantity}</td>
                  <td>{med.timestamp}</td>
                  <td>{med.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

ViewingMeds.propTypes = {
  medicines: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
    })
  ).isRequired,
  buttonLabel: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ViewingMeds;
