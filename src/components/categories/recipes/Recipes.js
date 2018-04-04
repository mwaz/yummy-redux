import React from 'react';
import { Button, Pagination, Row, Col } from 'react-materialize';
import Notifications, { toastify, notify } from 'react-notify-toast';
import NavigationBar from '../../common/NavigationBar';
import InlineError from '../../messages/InlineError';
import SearchForm from '../../common/SearchForm';
import AddRecipe from '../../categories/recipes/forms/AddRecipe';

class RecipeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        recipe_name: '',
        recipe_ingredients: '',
        recipe_methods: ''
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
      this.props.addRecipe(this.state.data).catch(error => {
        if (error.response) {
          this.setState({
            errors: error.response.data.message,
            loading: false
          });
          notify.show(`${error.response.data.message}, 'error', 6000`);
        }
      });
    }
  };
  validate(data) {
    const errors = {};
    if (!data.recipe_methods)
      errors.recipe_methods = 'recipe methods cannot be blank';
    if (!data.recipe_name) errors.recipe_name = 'recipe name cannot be blank';
    if (!data.recipe_ingredients)
      errors.recipe_ingredients = 'recipe ingredients cannot be blank';
    return errors;
  }

  render() {
    const { errors } = this.state;
    console.log({ errors });
    return (
      <div>
        <NavigationBar />
        <Notifications />
        <div className="category-background">
          <div className="row">
            <div className="col s12 m1"> </div>
            <div className="col s12 m10">
              <div className="category-main">
                <div className="something-empty"> </div>

                <div className="row">
                  <div className="col s12 m4">
                    <div
                      className="card-panel"
                      style={{ backgroundColor: '#1B4F72' }}
                    >
                      {errors && <InlineError text={errors.category_name} />}

                      <span className="white-text">
                        <h5 style={{ fontSize: '18px' }}>Add Recipes</h5>
                        <AddRecipe onSubmit={this.onSubmit} errors={errors} />
                      </span>
                    </div>
                  </div>
                  <div className="col s12 m4" />
                  <div className="col s12 m4">
                    <SearchForm />
                  </div>
                </div>

                {/* {categories.length === 0 && <AddCategories />} */}
                <div className="row">
                  <div className="col s12 m4">
                    <div className="card blue-grey darken-1">
                      <div className="card-content white-text">
                        <span className="card-title">Card Title</span>
                        <p>Just a card</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Row>
                  <Col className="s2 m4"> </Col>
                  <Col className="s12 m4">
                    <Pagination items={10} activePage={2} maxButtons={8} />
                  </Col>
                  <Col className="s2 m4"> </Col>
                </Row>
              </div>
              <div className="col s12 m1"> </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RecipeComponent;
