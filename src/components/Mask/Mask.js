
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import './Mask.scss';

class Mask extends Component {

    render () { 
        let maskClassSet = classnames({
            "ui-mask"   : true,
            "in"        : this.props.visable,
        });

        return (
            <div className={maskClassSet} onClick={this.props.onClose}></div>
        );
    }

}

Mask.propTypes = { 
    visable: PropTypes.bool,
    onClose: PropTypes.func,
};

Mask.defaultProps = {
    visable: false,
    onClose: function () {},
};

export default Mask;