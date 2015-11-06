
import React, { Component, PropTypes } from 'react';
import './App.scss';

// import withContext from '../../decorators/withContext';
import Header from '../Header';
import Footer from '../Footer';

// @withContext
class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="App-container">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children : PropTypes.element.isRequired,
  error    : PropTypes.object,
};

export default App;