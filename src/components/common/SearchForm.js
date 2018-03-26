import React from 'react';

const SearchForm = () => (
  <div>
    <div className="card-panel" style={{ backgroundColor: '#1B4F72' }}>
      <div className="input-field">
        <input id="search" type="search" placeholder="Search Categories" />
        <label className="label-icon" htmlFor="search">
          <i className="material-icons">search</i>
        </label>
      </div>
    </div>
  </div>
);
export default SearchForm;
