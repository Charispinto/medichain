import React from 'react';

const GroupCard = ({ title, image }) => {
  return (
    <div className="card w-full bg-white shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
      <figure className="px-10 pt-2">
        <img src={image} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-bold mb-4">{title}</h2>
        <div className="card-actions">
          <button className="btn btn-primary">Click Here</button>
        </div>
      </div>
    </div>
  );
}

export default GroupCard;
