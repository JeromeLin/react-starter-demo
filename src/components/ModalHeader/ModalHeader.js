
import React, { Component, PropTypes } from 'react';
import './ModalHeader.scss';

class ModalHeader extends Component {

    render () { 
        let btnClose = this.props.onClose ? (<div className="ui-modal-more" onClick={this.props.onClose}>x</div>) : "";
        return (
            <div className="ui-modal-header">
                <div className="ui-modal-title">{this.props.title}</div>
                {btnClose}
            </div>
        );
    }

}

ModalHeader.propTypes = { 
    title   : PropTypes.string,
    onClose : PropTypes.func,
};

ModalHeader.defaultProps = {
    title   : '',
};

export default ModalHeader;

