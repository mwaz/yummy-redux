import React from 'react';
import { Modal, Row, Button, Input } from 'react-materialize';

class AddRecipe extends React.Component {
  render() {
    return (
      <div>
        <Modal
          id={this.props.recipe_id}
          //   open={this.state.isOpen}
          header="Add New Recipe"
          trigger={
            <Button
              style={{ marginRight: '30px' }}
              className="btn-floating btn-large waves-effect waves-light red"
              onSubmit={this.props.onSubmit}
            >
              <i className="material-icons">add</i>
            </Button>
          }
        >
          <form onSubmit={this.props.onSubmit}>
            <div>
              <Row>
                <Input
                  s={6}
                  label="recipe Name"
                  name="recipe_name"
                  validate
                  value={this.props.category_name}
                  onChange={this.onChange}
                />
              </Row>
              <Row>
                <Input
                  s={6}
                  label="Recipe Ingredients"
                  name="recipe_ingredients"
                  validate
                  value={this.props.recipe_ingredients}
                  onChange={this.onChange}
                />
              </Row>
              <Row>
                <Input
                  s={6}
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
      </div>
    );
  }
}

export default AddRecipe;
