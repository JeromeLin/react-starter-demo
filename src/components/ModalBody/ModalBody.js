
import React, { Component, PropTypes } from 'react';
import './ModalBody.scss';

class ModalBody extends Component {

  render () {
    
    const style = {};
    style.body = {
      height: this.props.height,
    }

    return (
      <div className="ui-modal-body" style={style.body}>
        {this.props.children}
      </div>
    );
  }

}

ModalBody.propTypes = { 
  height   : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ModalBody.defaultProps = {
  
};

export default ModalBody;

