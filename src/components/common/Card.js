import React from 'react';
import { connect } from 'react-redux';
import EditModal from '../categories/forms/EditModal';
import DeleteModal from '../categories/forms/DeleteModal';
import Toaster from '../common/Toaster';
import {
  editCategory,
  getCategories,
  deleteCategory
} from '../actions/categories';
import { notify } from 'react-notify-toast';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        category_id: props.category_id,
        category_name: props.category_name
      },
      isOpen: false
    };
  }
  submit = data =>
    this.props
      .editCategory(data, this.state.data.category_id)
      .then(response => {
        if (response) {
          notify.show(`Successfully edited category`, 'success', 6000),
            this.props.getCategories();
        }
      });
  deleteAction = () =>
    this.props
      .deleteCategory(this.state.data.category_id)
      .then(
        this.setState({ isOpen: false }),
        notify.show(`Succesfully deleted category`, 'error', 6000),
        this.props.getCategories()
      );

  render() {
    const { isOpen, open } = this.state;
    console.log({ isOpen });
    return (
      <div className="col s12 m4">
        <div className="card" style={{ backgroundColor: '#1B4F72' }}>
          <div className="card-content white-text">
            <span className="card-title">{this.props.category_name}</span>
            <p> Created: {this.props.date_created}</p>
            <p>Modified: {this.props.date_modified}</p>
          </div>
          <div className="card-action">
            <div className="row">
              <div className="col s3">
                {' '}
                <a href={`/categories/${this.props.category_id}/recipes/`}>
                  View Recipes{' '}
                </a>
              </div>
              <div className="col s3">
                {' '}
                <EditModal
                  // method_state={this.state.isOpen}
                  submit={this.submit}
                  category_name={this.props.category_name}
                  category_id={this.props.category_id}
                />{' '}
              </div>
              <div className="col s3">
                {' '}
                <DeleteModal
                  open={this.state.isOpen}
                  deleteAction={this.deleteAction}
                  delete="category and all its recipes"
                  delete_what="Delete Category"
                  category_name={this.props.category_name}
                  category_id={this.props.category_id}
                  // opacity={this.state.opacity}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, { editCategory, getCategories, deleteCategory })(
  Card
);
