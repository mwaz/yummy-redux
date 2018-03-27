import React from 'react';
import { Modal, Button, Row, Col } from 'react-materialize';

const DeleteModal = props => (
  <div>
    <Modal header={props.item_name} trigger={<a href="#"> Delete </a>}>
      <center>
        {' '}
        <h5 style={{ marginTop: '30px' }}>
          Are You sure you want to delete this {props.delete}, and all its
          recipes?
        </h5>{' '}
      </center>
      <Row>
        <Col className="s3"> </Col>
        <div style={{ marginTop: '20px' }}>
          <Col className="s2">
            <Button className="waves-dark red">Delete</Button>
          </Col>
          <Col className="s1"> </Col>
          <Col className="s2">
            <Button className="waves light">Cancel</Button>
          </Col>
        </div>
      </Row>
    </Modal>
  </div>
);
export default DeleteModal;
