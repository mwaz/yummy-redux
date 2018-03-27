import React from 'react';
import ViewModal from '../categories/forms/ViewModal';
import EditModal from '../categories/forms/EditModal';
import DeleteModal from '../categories/forms/DeleteModal';

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
          <div className="row">
            <div className="col s3">
              {' '}
              <ViewModal />{' '}
            </div>
            <div className="col s3">
              {' '}
              <EditModal />{' '}
            </div>
            <div className="col s3">
              {' '}
              <DeleteModal delete="Category" delete_what="Delete Category" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
