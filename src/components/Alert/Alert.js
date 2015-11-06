
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import Modal from '../Modal';
import ModalBody from '../ModalBody';
import ModalFooter from '../ModalFooter';

class Alert extends Component {

	render () {
		return (
			<Modal width={270}>
        <ModalBody>
          <p style={{textAlign: 'center'}}>{this.props.message}</p>
        </ModalBody>
        <ModalFooter>
          <button type="button" onClick={this.props.onClose}>关闭</button>
        </ModalFooter>
      </Modal>
		);
	}
}

Alert.propTypes = {
	message: PropTypes.string,
	onClose: PropTypes.func,
};

Alert.defaultProps = {
	message: '',
	onClose: function () {},
};

export default Alert;

