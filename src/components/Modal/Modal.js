
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import './Modal.scss';

import Mask from '../Mask';

class Modal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      height : 0,
    };
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');

    const dom = this.refs.container;
    this.setState({
      height : dom.offsetHeight
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');

    if (this.state.height == 0) {
      return true;
    } else {
      return false;
    }
    // return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  _onContainerClick(e) {
    e.stopPropagation();
  }

  render () {
    console.log('render');
    const style = {};

    style.modal = {};
    style.wrapper = {
      width     : '100%',
      height    : '100%',
    };
    style.container = {
      position  : 'absolute',
      left      : '50%',
      top       : '50%',
      marginLeft: - this.props.width / 2,
      marginTop : - this.state.height / 2,
      width     : this.props.width,
    };

    if (this.state.height > window.innerHeight) {
      style.modal.WebkitOverflowScrolling = 'touch';
      style.wrapper = {};
      style.container.position = 'relative';
      style.container.top = 0;
      style.container.marginTop = 0;
    }

    if (this.props.width > window.innerWidth) {
      style.modal.WebkitOverflowScrolling = 'touch';
      style.container.position = 'relative';
      style.container.left = 0;
      style.container.marginLeft = 0;
    }

    return (
      <div className="ui-modal" style={style.modal} onClick={this.props.onMaskClick}>
        <div className="ui-modal-wrapper" style={style.wrapper}>
          <div className="ui-modal-container" ref="container" style={style.container} onClick={this._onContainerClick}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }

}

Modal.propTypes = { 
  width       : PropTypes.number,
  // height      : PropTypes.number,
  onMaskClick : PropTypes.func,
};

Modal.defaultProps = {
  width       : 600,
  // height      : 400,
  onMaskClick : function () {},
};

export default Modal;

