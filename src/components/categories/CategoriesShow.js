import React from 'react';
import { createCategory } from '../actions/categories';
import CategoryComponent from '../categories/Category';
import { connect } from 'react-redux';
import Toast from 'react-materialize/lib/Toast';

class CategoriesShow extends React.Component {
  submit = data =>
    this.props
      .createCategory(data)
      .then(() =>
        console.log(`Suff created with  name ${data.category_name} `)
      );

  render() {
    return <CategoryComponent submit={this.submit} />;
    <Toast
      toast={`Category created with  name ${this.props.data.category_name} `}
    >
      {' '}
      Toast{' '}
    </Toast>;
  }
}

export default connect(null, { createCategory })(CategoriesShow);
