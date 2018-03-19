import React, { Component } from 'react';
import LoginForm from './forms/LoginForm';

export default class Login extends Component {
  submit = data => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}
