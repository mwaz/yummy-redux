import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/auth';

const NavigationBar = ({ isAuthenticated, logout }) => {
  return (
    <nav>
      <div className="nav-wrapper" style={{ backgroundColor: '#5D6D7E' }}>
        <a className="brand-logo" style={{ fontSize: '1.6em' }}>
          Yummy Recipes
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            {!isAuthenticated ? (
              <Link to="/login"> Login </Link>
            ) : (
              <Link to="/login" onClick={() => logout()}>
                {' '}
                Logout{' '}
              </Link>
            )}
          </li>
          <li>
            <Link to="#"> Password Reset </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
NavigationBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.users.access_token
  };
}
export default connect(mapStateToProps, { logout: actions.logout })(
  NavigationBar
);
