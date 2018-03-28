import React from 'react';
import ViewModal from '../categories/forms/ViewModal';
import EditModal from '../categories/forms/EditModal';
import DeleteModal from '../categories/forms/DeleteModal';
import { editCategory } from '../actions/categories';
import { connect } from 'react-redux';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category_id: props.category_id
    };
  }
  submit = data =>
    this.props
      .editCategory(data, this.state.category_id)
      .then(() => this.props.redirectCategories(), console.log(data));

  render() {
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
                />{' '}
              </div>
              <div className="col s3">
                {' '}
                <DeleteModal delete="Category" delete_what="Delete Category" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, { editCategory })(Card);
