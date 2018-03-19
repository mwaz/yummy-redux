import React, { Component } from 'react';
import RegistrationForm from './forms/RegistrationForm';

export default class Register extends Component {
  submit = data => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <RegistrationForm submit={this.submit} />
      </div>
    );
  }
}
