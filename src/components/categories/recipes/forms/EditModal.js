import React from 'react';
import { Modal, Row, Input, Button } from 'react-materialize';
import InlineError from '../../../messages/InlineError';
import { error } from 'util';
import { notify } from 'react-notify-toast';
import PropTypes from 'prop-types';

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
        id={this.props.recipe_id}
        open={this.state.editOpen}
        style={{ display: this.props.display }}
        header="Edit Recipe"
        trigger={<a href="#"> Edit </a>}
      >
        <form onSubmit={this.props.onSubmit}>
          <div>
            <Row>
              {errors && <InlineError text={errors.recipe_name} />}
              <Input
                s={8}
                label="recipe Name"
                name="recipe_name"
                validate
                value={this.props.category_name}
                onChange={this.props.onChange}
              />
            </Row>
            <Row>
              {errors && <InlineError text={errors.recipe_ingredients} />}
              <Input
                s={8}
                label="Recipe Ingredients"
                name="recipe_ingredients"
                validate
                value={this.props.recipe_ingredients}
                onChange={this.props.onChange}
              />
            </Row>
            <Row>
              {errors && <InlineError text={errors.recipe_methods} />}
              <Input
                s={8}
                label="Recipe Methods"
                name="recipe_methods"
                validate
                value={this.props.recipe_methods}
                onChange={this.props.onChange}
              />
            </Row>
            <Button type="submit" waves="light" onSubmit={this.props.onSubmit}>
              Edit Recipe
            </Button>

            <Row />
          </div>
        </form>
      </Modal>
    );
  }
}

export default EditModal;
