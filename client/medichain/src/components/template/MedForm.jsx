// this is the template where we will be writting the css for form
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

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
      <Button type="submit" variant='contained '>Submit</Button>
    </form>
  );
}

MedForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setQuantity: PropTypes.func.isRequired,
};

export default MedForm;
