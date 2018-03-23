import React from 'react';
import { createCategory } from '../actions/categories';
import CategoryComponent from '../categories/Category';
import { connect } from 'react-redux';

class CategoriesShow extends React.Component {
  submit = data =>
    this.props
      .createCategory(data)
      .then(() => console.log(`Suff created with  name ${data} `));

  render() {
    return <CategoryComponent submit={this.submit} />;
  }
}

export default connect(null, { createCategory })(CategoriesShow);
