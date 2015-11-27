
import React, { Component, PropTypes } from 'react';
import './Loading.scss';

import Mask from '../Mask';

class Loading extends Component {

  render () {
    const style = {};

    style.loading = {};
    style.body = {
      position  : 'absolute',
      left      : '50%',
      top       : '50%',
      marginLeft: - this.props.width / 2,
      marginTop : - this.props.height / 2,
      width     : this.props.width,
      height    : this.props.height,
    };

    return (
      <div className="ui-loading" style={style.loading}>
        <div className="ui-loading-body" style={style.body}>
          <br />
          {this.props.message}
        </div>
        <Mask type="light" />
      </div>
    );
  }

}

Loading.propTypes = { 
  width       : PropTypes.number,
  height      : PropTypes.number,
};

Loading.defaultProps = {
  width       : 80,
  height      : 80,
};

export default Loading;

