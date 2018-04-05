import React from 'react';
import { notify } from 'react-notify-toast';
import RecipeComponent from './Recipes';
import { connect } from 'react-redux';
import { createRecipe, getRecipes } from '../../actions/recipes';

class ViewRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: this.props.match.params.category_id
    };
  }

  componentWillMount() {
    this.setState({
      loading: true
    });
    this.props
      .getRecipes(this.state.categoryId)
      .then(() => this.setState({ loading: false }));
  }

  addRecipe = (data, categoryId) =>
    this.props
      .createRecipe(data, this.state.categoryId)
      .then(
        notify.show('Succesfully added recipe', 'success', 6000),
        this.props.getRecipes(this.state.categoryId)
      );

  render() {
    return (
      <div>
        <RecipeComponent addRecipe={this.addRecipe} />
      </div>
    );
  }
}
export default connect(null, { createRecipe, getRecipes })(ViewRecipes);
