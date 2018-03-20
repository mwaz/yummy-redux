import React, { Component } from 'react';
import LoginForm from './forms/LoginForm';
import PropTypes from 'prop-types';
import { Redirect } from 'react-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

class Login extends Component {
  submit = data =>
    // console.log(this.props);
    this.props.login(data).then(() => this.props.history.push(''));

  render() {
    return (
      <div>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}
Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

/* 
* first parameter of conncet is map state to props 
* which allows the coponent to obtain data from store
* this case null
*/
export default connect(null, { login })(Login);
