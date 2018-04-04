import React from 'react';
import { createCategory, getCategories } from '../actions/categories';
import CategoryComponent from '../categories/Category';
import { connect } from 'react-redux';
import { notify } from 'react-notify-toast';
import Toast from 'react-materialize/lib/Toast';

class CategoriesShow extends React.Component {
  submit = data =>
    this.props
      .createCategory(data)
      .then(
        notify.show(`Succesfully added category`, 'success', 6000),
        this.props.getCategories()
      );

  render() {
    return <CategoryComponent submit={this.submit} />;
  }
}

export default connect(null, { createCategory, getCategories })(CategoriesShow);
