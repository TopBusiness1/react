import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class HeaderBar extends Component {

  render() {
    return (
      <div className="container-fluid header-bar">
        <Link to="/" className="navbar-brand header-text">
          <span><img src="../../../../style/img/shopping-cart.png" width="30" />
            <span className="header_title">Future</span></span></Link>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(HeaderBar);
