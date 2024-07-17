import React from 'react';
import PropTypes from 'prop-types';
//added a normal css to the medForm which will be visible in all pages
function MedForm({ handleSubmit, setName, setQuantity }) {
  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-4 bg-white rounded-lg shadow hover:shadow-lg">
        <div className="mb-4">
          <label htmlFor="medicineDescription" className="block text-sm font-bold mb-2">Medicine Description:</label>
          <input
            type="text"
            id="medicineDescription"
            name="medicineDescription"
            placeholder="Enter medicine description"
            className="input input-bordered w-full"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="medicineQuantity" className="block text-sm font-bold mb-2">Medicine Quantity:</label>
          <input
            type="text"
            id="medicineQuantity"
            name="medicineQuantity"
            placeholder="Enter medicine quantity"
            className="input input-bordered w-full"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary w-full bg-sky-500 hover:bg-sky-700">Submit</button>
      </form>
    </div>
  );
}

MedForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setQuantity: PropTypes.func.isRequired,
};

export default MedForm;
