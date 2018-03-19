import React, { Component } from 'react';
import Validator from 'validator';
import InlineError from '../../messages/InlineError';
import PropTypes from 'prop-types';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: '',
        password: ''
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
      this.props.submit(this.state.data);
    }
  };

  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = 'email is not valid';
    if (!data.password) errors.password = 'password cannot be blank';
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
                  error={!!errors.email}
                  type="email"
                  placeholder="Email"
                  id="email"
                  className="validate"
                  name="email"
                  value={data.email}
                  onChange={this.onChange}
                />
                <label htmlFor="email"> Email </label>
                {errors.email && <InlineError text={errors.email} />}
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  error={!!errors.password}
                  type="password"
                  placeholder="Password"
                  id="password"
                  className="validate"
                  name="password"
                  value={data.password}
                  onChange={this.onChange}
                />
                <label htmlFor="password"> Password </label>
                {errors.password && <InlineError text={errors.password} />}
              </div>
            </div>
            <div className="row">
              <div className="col s4">
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  Login{' '}
                </button>
              </div>
            </div>
          </form>
        </div>
        <p> </p>
      </div>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};
