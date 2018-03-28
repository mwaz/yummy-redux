import React from 'react';
import { Modal, Row, Input, Button } from 'react-materialize';

import InlineError from '../../messages/InlineError';

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
    console.log(e);
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.submit(this.state.data).catch(error => {
        if (error.response) {
          this.setState({
            errors: error.response.data,
            loading: false
          });
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

  componentDidMount() {
    this.props.getCategories;
  }

  render() {
    const { errors, data } = this.state;
    const { categories } = this.props;
    return (
      <Modal header="Edit Category" trigger={<a href="#"> Edit </a>}>
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
function mapStateToProps(state) {
  return {
    categories: state.category
  };
}

export default EditModal;
