import React from 'react';
import { Modal, Button, Link } from 'react-materialize';

const DeleteModal = () => (
  <Modal header="Modal Header" trigger={<a href="#"> Delete </a>}>
    <div>Are You sure you want to delete stuff</div>
  </Modal>
);
export default DeleteModal;
