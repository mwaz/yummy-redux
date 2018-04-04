import React from 'react';
import Notifications, { toastify } from 'react-notify-toast';
import NavigationBar from '../../common/NavigationBar';
import InlineError from '../../messages/InlineError';

class RecipeComponent extends React.Component {
  render() {
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
export default RecipeComponent;
