import React from 'react';
import { connect } from 'react-redux';
import ViewModal from '../categories/forms/ViewModal';
import EditModal from '../categories/forms/EditModal';
import DeleteModal from '../categories/forms/DeleteModal';
import { Toast } from 'react-materialize';
import {
  editCategory,
  getCategories,
  deleteCategory
} from '../actions/categories';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        category_id: props.category_id
      },
      close: false,
      display: 'none'
    };
  }
  submit = data =>
    this.props
      .editCategory(data, this.state.data.category_id)
      .then(
        () => this.props.redirectCategories(),
        this.setState({ close: 'true' })
      );
  deleteAction = () =>
    this.props
      .deleteCategory(this.state.data.category_id)
      .then(this.setState({ display: 'none' }));

  render() {
    const { close } = this.state;
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
                <ViewModal />{' '}
              </div>
              <div className="col s3">
                {' '}
                <EditModal
                  submit={this.submit}
                  category_name={this.props.category_name}
                  category_id={this.props.category_id}
                  close={close}
                />{' '}
              </div>
              <div className="col s3">
                {' '}
                <DeleteModal
                  deleteAction={this.deleteAction}
                  delete="category and all its recipes"
                  delete_what="Delete Category"
                  category_name={this.props.category_name}
                  category_id={this.props.category_id}
                  display={this.state.display}
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
