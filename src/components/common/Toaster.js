import React from 'react';
import Toast from 'react-materialize';

const Toaster = props => (
  <div>
    <Toast toast={props.toast}> </Toast>
  </div>
);
export default Toaster;
