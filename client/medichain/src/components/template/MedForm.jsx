// src/components/MedForm.jsx
import React from 'react';
import PropTypes from 'prop-types';

function MedForm({ handleSubmit, setName, setQuantity }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="medicineDescription">Medicine Description:</label>
        <input
          type="text"
          id="medicineDescription"
          name="medicineDescription"
          placeholder="Enter medicine description"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="medicineQuantity">Medicine Quantity:</label>
        <input
          type="text"
          id="medicineQuantity"
          name="medicineQuantity"
          placeholder="Enter medicine quantity"
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

MedForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setQuantity: PropTypes.func.isRequired,
};

export default MedForm;
