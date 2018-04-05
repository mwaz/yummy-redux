import React from 'react';
import { Modal, Row, Input, Button } from 'react-materialize';
import InlineError from '../../../messages/InlineError';
import { error } from 'util';
import { notify } from 'react-notify-toast';

class EditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        category_name: props.category_name || ''
      },
      errors: {},
      loading: false
    };
  }

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true, editOpen: false });
      this.props
        .submit(this.state.data)
        .then(this.setState({ editOpen: false }))
        .catch(error => {
          ``;
          if (error.response) {
            this.setState({
              errors: error.response.data,
              loading: false
            });
            notify.show(`${error.response.data.message}`, 'error', 6000);
          }
        });
    }
  };

  validate = data => {
    const errors = {};
    if (!data.category_name)
      errors.category_name = 'Category Name cannot be empty';
    return errors;
  };

  render() {
    const { errors, data, editOpen } = this.state;
    const { categories } = this.props;

    return (
      <Modal
        id={this.props.category_id}
        open={this.state.editOpen}
        style={{ display: this.props.display }}
        header="Edit Category"
        trigger={<a href="#"> Edit </a>}
      >
        {errors.message && (
          <div
            className="alert alert-danger"
            role="alert"
            style={{ color: '#880000' }}
          >
            <strong> {errors.message} </strong>
          </div>
        )}

        <form onSubmit={this.onSubmit}>
          <div>
            {errors && <InlineError text={errors.category_name} />}
            <Row>
              <Input
                s={6}
                label="Category Name"
                name="category_name"
                validate
                value={this.state.data.category_name}
                onChange={this.onChange}
              />
            </Row>
            <Button type="submit" waves="light" onSubmit={this.onSubmit}>
              Edit Category
            </Button>

            <Row />
          </div>
        </form>
      </Modal>
    );
  }
}

export default EditModal;
