
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import './Modal.scss';

import Mask from '../Mask';

class Modal extends Component {

    render () {
        let modalClassSet = classnames({
            "ui-modal"  : true,
            "in"        : this.props.visable,
        });

        let dialogStyle = {
            position    : 'absolute',
            left        : '50%',
            top         : '50%',
            marginLeft  : - this.props.width / 2,
            marginTop   : - this.props.height / 2,
            width       : this.props.width,
            height      : this.props.height,
        };

        return (
            <div className={modalClassSet} ref="modal">
                <div className="ui-modal-container" style={dialogStyle}>
                    {this.props.children}
                </div>
                <Mask visable={this.props.visable} onClose={this.props.onMaskClick} />
            </div>
        );
    }

}

Modal.propTypes = { 
    width       : PropTypes.number,
    height      : PropTypes.number,
    visable     : PropTypes.bool,
    onMaskClick : PropTypes.func,
};

Modal.defaultProps = {
    width       : 600,
    height      : 400,
    visable     : false,
    onMaskClick : function () {},
};

export default Modal;

