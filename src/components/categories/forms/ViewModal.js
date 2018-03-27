import React from 'react';
import { Modal } from 'react-materialize';

const ViewModal = () => (
  <Modal header="Modal Header" trigger={<a href="#"> View </a>}>
    <div>Stuff will be shown here</div>
  </Modal>
);
export default ViewModal;
