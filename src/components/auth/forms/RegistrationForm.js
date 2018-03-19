import React, { Component } from 'react';
import Validator from 'validator';
import PropTypes from 'prop-types';
import InlineError from '../../messages/InlineError';

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: '',
        password: '',
        username: '',
        cpassword: ''
      },
      loading: false,
      errors: {}
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
      this.props.submit(this.state.data);
    }
  };

  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = 'Email is not valid';
    if (!data.username) errors.username = 'Username must be provided';
    if (!data.password || data.password.length < 6)
      errors.password = 'Please Provide a password with more than 6 characters';
    if (!data.cpassword)
      errors.cpassword = 'Please Provide a confirmation password';
    if (!data.password || data.password !== data.cpassword)
      errors.cpassword = 'Password and Confirm Password do not match';
    return errors;
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <div className="row">
          <form className="col s12" onSubmit={this.onSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  className="validate"
                  onChange={this.onChange}
                  value={data.email}
                />
                <label htmlFor="email">Email</label>
                {errors.email && <InlineError text={errors.email} />}
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  id="username"
                  className="validate"
                  onChange={this.onChange}
                  value={data.username}
                />
                <label htmlFor="username"> Username </label>
                {errors.username && <InlineError text={errors.username} />}
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                  className="validate"
                  onChange={this.onChange}
                  value={data.password}
                />
                <label htmlFor="password"> Password </label>
                {errors.password && <InlineError text={errors.password} />}
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  type="password"
                  name="cpassword"
                  placeholder="Confirm Password"
                  id="cpassword"
                  className="validate"
                  onChange={this.onChange}
                  value={data.cpassword}
                />
                <label htmlFor="cpassword"> Confirm Password </label>
                {errors.cpassword && <InlineError text={errors.cpassword} />}
              </div>
            </div>
            <div className="row">
              <div className="col s4">
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  Register{' '}
                </button>
              </div>
            </div>
          </form>
        </div>
        <p />
      </div>
    );
  }
}

RegistrationForm.propTypes = {
  submit: PropTypes.func.isRequired
};
