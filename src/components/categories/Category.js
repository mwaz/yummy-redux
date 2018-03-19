import React from 'react';
import NavigationBar from '../common/NavigationBar';
import Card from '../common/Card';

export const CategoryComponent = () => {
  return (
    <div>
      <NavigationBar />
      <div className="category-background">
        <div className="row">
          <div className="col s12 m1"> </div>
          <div className="col s12 m10">
            <div className="category-main">
              <Card />
            </div>
            <div className="col s12 m1"> </div>
          </div>
        </div>
      </div>
    </div>);
};
export default CategoryComponent;
