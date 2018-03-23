import React from 'react';

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
export default CategoryModal;
