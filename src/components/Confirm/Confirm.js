
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import Modal from '../Modal';
import ModalBody from '../ModalBody';
import ModalFooter from '../ModalFooter';

class Confirm extends Component {

  render () {
    return (
      <Modal width={270}>
        <ModalBody>
          <p style={{textAlign: 'center'}}>{this.props.message}</p>
        </ModalBody>
        <ModalFooter>
          <button type="button" onClick={this.props.onCancel}>取消</button>
          <button type="button" onClick={this.props.onOK}>确定</button>
        </ModalFooter>
      </Modal>
    );
  }
}

Confirm.propTypes = {
  message : PropTypes.string,
  onOK    : PropTypes.func,
  onCancel: PropTypes.func,
};

Confirm.defaultProps = {
  message : '',
  onOK    : function () {},
  onCancel: function () {},
};

export default Confirm;

