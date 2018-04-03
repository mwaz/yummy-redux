import React from 'react';
import { Toast } from 'react-materialize';

export default class Toaster extends React.Component {
  render() {
    return (
      <div>
        <Toast toast={this.props.message_toast}> </Toast>
      </div>
    );
  }
}
