import React, { Component } from 'react';
import RegistrationForm from './forms/RegistrationForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { register } from '../actions/auth';

class Register extends Component {
  submit = data =>
    this.props.register(data).then(() => this.props.history.push('/login'));

  render() {
    return (
      <div>
        <RegistrationForm submit={this.submit} />
      </div>
    );
  }
}

Register.propType = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  register: PropTypes.func.isRequired
};
export default connect(null, { register })(Register);
