
import React, { Component, PropTypes } from 'react';
import { googleAnalyticsId } from '../../config';

class Html extends Component {

  trackingCode() {
    return ({__html:
      `(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=` +
      `function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;` +
      `e=o.createElement(i);r=o.getElementsByTagName(i)[0];` +
      `e.src='https://www.google-analytics.com/analytics.js';` +
      `r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));` +
      `ga('create','${googleAnalyticsId}','auto');ga('send','pageview');`,
    });
  }

  render() {
    return (
      <html>
        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>{this.props.title}</title>
          <meta name="description" content={this.props.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <style id="css" dangerouslySetInnerHTML={{__html: this.props.css}} />
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{__html: this.props.body}} />
          <script src="/js/vendors.min.js"></script>
          <script src="/js/index.min.js"></script>
          <script dangerouslySetInnerHTML={this.trackingCode()} />
        </body>
      </html>
    );
  }

}

Html.propTypes = {
  title       : PropTypes.string,
  description : PropTypes.string,
  css         : PropTypes.string,
  body        : PropTypes.string.isRequired,
};

Html.defaultProps = {
  title       : '',
  description : '',
};

export default Html;
