import React from 'react';
import { Modal, Row, Input, Button } from 'react-materialize';

class ViewModal extends React.Component {
  render() {
    return (
      <Modal
        id={this.props.recipe_id}
        open={this.props.editOpen}
        style={{ display: this.props.display }}
        header="View Recipe Details"
        trigger={<a href="#"> Recipe Details </a>}
      >
        <form onSubmit={this.props.onSubmit}>
          <div>
            <Row>
              <Input
                s={8}
                label="recipe Name"
                name="recipe_name"
                validate
                value={this.props.category_name}
                readOnly
              />
            </Row>
            <Row>
              <Input
                s={8}
                label="Recipe Ingredients"
                name="recipe_ingredients"
                validate
                value={this.props.recipe_ingredients}
                readOnly
              />
            </Row>
            <Row>
              <Input
                s={8}
                label="Recipe Methods"
                name="recipe_methods"
                validate
                value={this.props.recipe_methods}
                readOnly
              />
            </Row>
            <Button type="submit" danger="red">
              Close
            </Button>

            <Row />
          </div>
        </form>
      </Modal>
    );
  }
}

export default ViewModal;
