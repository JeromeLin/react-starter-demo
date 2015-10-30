
import React, { Component, PropTypes } from 'react';
import './ModalFooter.scss';

class ModalFooter extends Component {

    render () { 
        let liStyle = {
            width: 100 / React.Children.count(this.props.children) + '%',
        };

        let children = React.Children.map(this.props.children, (option, index) => {
            return <li key={index} style={liStyle}>{option}</li>
        }, this);

        return (
            <div className="ui-modal-footer">
                <ul>
                    {children}
                </ul>
            </div>
        );
    }

}

export default ModalFooter;

