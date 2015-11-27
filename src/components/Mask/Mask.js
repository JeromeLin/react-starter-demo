
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import './Mask.scss';

class Mask extends Component {

  render () { 
    const markClass = classnames({
      "ui-mask"      : true,
      "transparent"  : this.props.type === 'transparent',
      "light"        : this.props.type === 'light',
      "dark"         : this.props.type === 'dark',
    })
    return (
      <div className={markClass} onClick={this.props.onClose}></div>
    );
  }

}

Mask.propTypes = {
  type   : PropTypes.oneOf(['transparent', 'light', 'normal', 'dark']),
  onClose: PropTypes.func,
};

Mask.defaultProps = {
  type   : 'normal',
  onClose: function () {},
};

export default Mask;