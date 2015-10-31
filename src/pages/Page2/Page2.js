
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import './Page2.scss';

class Page2 extends Component {

  render() {
    return (
      <div>
        <p>This is Page2</p>
        <p><Link to="/Page1">=> Goto Page1</Link></p>
      </div>
    );
  }
}

export default Page2;