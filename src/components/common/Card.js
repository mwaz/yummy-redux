import React from 'react';

const Card = props => {
  return (
    <div className="col s12 m4">
      <div className="card" style={{ backgroundColor: '#1B4F72' }}>
        <div className="card-content white-text">
          <span className="card-title">{props.category_name}</span>
          <p> Created: {props.date_created}</p>
          <p>Modified: {props.date_modified}</p>
        </div>
        <div className="card-action">
          <a href="#"> View </a>
          <a href="#">Edit</a>
          <a href="#">Delete</a>
        </div>
      </div>
    </div>
  );
};
export default Card;
