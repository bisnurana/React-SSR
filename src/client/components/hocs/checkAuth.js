import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default (ChildComponent) => {
  class CheckAuth extends PureComponent {
    render() {
      switch (this.props.auth) {
        case false:
          return <Redirect to="/" />;
        case null:
          return <div>Authenticating...</div>;
        default:
          return <ChildComponent {...this.props} />;
      }
    }
  }
  function mapStateToProps({ auth }) {
    return { auth };
  }
  return connect(mapStateToProps)(CheckAuth);
};
