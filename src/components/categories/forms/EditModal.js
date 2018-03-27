import React from 'react';
import { Modal, Row, Input, Button } from 'react-materialize';

const EditModal = () => (
  <Modal header="Edit Category" trigger={<a href="#"> Edit </a>}>
    <div>
      <Row>
        <Input
          s={6}
          label="Category Name"
          validate
          placeholder="Category Name"
        />
      </Row>
      <Button waves="light">Edit Category</Button>
      <Row />
    </div>
  </Modal>
);
export default EditModal;
