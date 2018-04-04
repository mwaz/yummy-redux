import React from 'react';
import { Modal } from 'react-materialize';

const ViewModal = props => (
  <a href={`/categories/${props.category_id}/recipes/`}>View Recipes </a>
);

export default ViewModal;
