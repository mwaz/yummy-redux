import React from 'react';
import { Modal, Row, Button, Input, Col } from 'react-materialize';
import InlineError from '../../../messages/InlineError';

class AddRecipe extends React.Component {
  render() {
    const errors = this.props.errors;
    console.log(errors);
    return (
      <div>
        <Row>
          <Col s={9}>
            <Modal
              id={this.props.recipe_id}
              //   open={this.state.isOpen}
              header="Add New Recipe"
              trigger={
                <Button
                  style={{ marginRight: '30px' }}
                  className="btn-floating btn-large waves-effect waves-light red"
                >
                  <i className="material-icons">add</i>
                </Button>
              }
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
                      onChange={this.onChange}
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
                      onChange={this.onChange}
                    />
                  </Row>
                  <Row>
                    {errors && <InlineError text={errors.recipe_methods} />}
                    <Input
                      s={8}
                      label="Recipe Methods"
                      name="recipe_ingredients"
                      validate
                      value={this.props.recipe_methods}
                      onChange={this.onChange}
                    />
                  </Row>
                  <Button
                    type="submit"
                    waves="light"
                    onSubmit={this.props.onSubmit}
                  >
                    Add Recipe
                  </Button>

                  <Row />
                </div>
              </form>
            </Modal>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AddRecipe;
