import React from 'react';
import { Modal, Button, Row, Col } from 'react-materialize';
import PropTypes from 'prop-types';

class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      errors: {}
    };
  }

  render() {
    const { errors } = this.state;
    const { deleteAction } = this.props;
    console.log(this.props.display);
    return (
      <div>
        <Modal
          style={{ display: this.props.display }}
          header={this.props.item_name}
          trigger={<a href="#"> Delete </a>}
        >
          {errors.message && (
            <div
              className="alert alert-danger"
              role="alert"
              style={{ color: '#880000' }}
            >
              <strong> {errors.message} </strong>
            </div>
          )}

          <center>
            {' '}
            <h5 style={{ marginTop: '30px', fontSize: '19px' }}>
              Are You sure you want to delete{' '}
              <div className="chip"> {this.props.category_name}</div>
              {this.props.delete} ?
            </h5>{' '}
          </center>
          <Row>
            <Col className="s3"> </Col>
            <div style={{ marginTop: '20px' }}>
              <Col className="s2">
                <Button
                  className="waves-dark red"
                  onClick={() => deleteAction()}
                >
                  Delete
                </Button>
              </Col>
              <Col className="s1"> </Col>
              <Col className="s2">
                <Button className="waves light" modal="close">
                  Cancel
                </Button>
              </Col>
            </div>
          </Row>
        </Modal>
      </div>
    );
  }
}
DeleteModal.propTypes = {
  deleteAction: PropTypes.func.isRequired
};
export default DeleteModal;
