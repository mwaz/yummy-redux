import React from 'react';
import { Modal, Button } from 'react-materialize';

const EditModal = () => (
  <Modal header="Modal Header" trigger={<a href="#"> Edit </a>}>
    <div>Stuff will be edited here</div>
  </Modal>
);
export default EditModal;
