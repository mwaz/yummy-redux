import React from 'react';
import PropTypes from 'prop-types';

const CategoryModal = props => {
  return (
    <div>
      <input
        type="text"
        placeholder="category name"
        id="category name"
        name="category_name"
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

CategoryModal.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default CategoryModal;
