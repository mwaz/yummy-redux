import React from 'react';
// import { connect } from 'react-redux';
import ViewModal from '../recipes/forms/ViewModal';
import EditModal from '../recipes/forms/EditModal';
import DeleteModal from '../recipes/forms/DeleteModal';
// import { editRecipe, getRecipes, deleteRecipe } from '../../actions/recipes';
import { notify } from 'react-notify-toast';

class RecipeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        recipe_id: props.recipe_id,
        recipe_name: props.recipe_name,
        recipe_ingredients: props.recipe_ingredients,
        recipe_methods: props.recipe_ingredients
      },
      isOpen: false
    };
  }

  render() {
    return (
      <div className="col s12 m4">
        <div className="card" style={{ backgroundColor: '#1B4F72' }}>
          <div className="card-content white-text">
            <span className="card-title">{this.props.recipe_name}</span>
            <p> Created: {this.props.date_created}</p>
            <p>Modified: {this.props.date_modified}</p>
          </div>
          <div className="card-action">
            <div className="row">
              <div className="col s3">
                <ViewModal />{' '}
              </div>
              <div className="col s3">
                {' '}
                <EditModal />{' '}
              </div>
              <div className="col s3">
                {' '}
                <DeleteModal />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RecipeCard;
