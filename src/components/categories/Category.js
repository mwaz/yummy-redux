import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Notifications, { notify } from 'react-notify-toast';
import { Pagination, Row, Toast } from 'react-materialize';
import NavigationBar from '../common/NavigationBar';
import Card from '../common/Card';
import CategoryModal from '../common/CategoryModal';
import { categories } from '../../reducers/categories';
import InlineError from '../messages/InlineError';
import { getCategories } from '../actions/categories';
import SearchForm from '../common/SearchForm';
import Col from 'react-materialize/lib/Col';

class CategoryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        category_name: ''
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
  redirectCategories = () => this.props.history.push('/categories');
  // setMessage = () => ;

  componentDidMount() {
    this.props.getCategories();
  }
  render() {
    const { errors, data } = this.state;
    const { categories } = this.props;

    return (
      <div>
        <NavigationBar />
        <Notifications />
        {/* <Toast toast={props.} /> */}
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
                      <CategoryModal
                        onChange={this.onChange}
                        value={data.category_name}
                      />
                      <span className="white-text">
                        <a
                          style={{ marginRight: '30px' }}
                          className="btn-floating btn-large waves-effect waves-light red"
                          onClick={this.onSubmit}
                        >
                          <i className="material-icons">add</i>
                        </a>
                        Add New Category
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
                  {categories && categories.length > 0 ? (
                    (<p> blah </p>,
                    categories.map(category => (
                      <Card
                        setMessage={this.setMessage}
                        redirectCategories={this.redirectCategories}
                        category_id={category.id}
                        category_name={category.category_name}
                        date_created={category.date_created}
                        date_modified={category.date_modified}
                      />
                    )))
                  ) : (
                    <p> No categories </p>
                  )}
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

function mapStateToProps(state) {
  return {
    categories: state.category
  };
}

export default connect(mapStateToProps, { getCategories })(CategoryComponent);
