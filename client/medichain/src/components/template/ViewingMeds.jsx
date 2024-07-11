// component template for displaying meds
import React from 'react';
import PropTypes from 'prop-types';

function ViewingMeds({ medicines, buttonLabel, handleClick }) {
  return (
    <div>
      <button onClick={handleClick}>{buttonLabel}</button>
      <ul>
        {medicines.map((med, index) => (
          <li key={index}>
            {med.quantity} - {med.timestamp} - {med.name}
          </li>
        ))}
      </ul>
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
