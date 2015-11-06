
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import './Mask.scss';

class Mask extends Component {

  render () { 
    return (
      <div className="ui-mask" onClick={this.props.onClose}></div>
    );
  }

}

Mask.propTypes = { 
  onClose: PropTypes.func,
};

Mask.defaultProps = {
  onClose: function () {},
};

export default Mask;