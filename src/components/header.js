import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/protected_content">Protected Content</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/admin_area">Admin Area</Link>
        </li>,
        <li className="nav-item" key={3}>
          <Link className="nav-link" to="/admin_activation">Admin Activation</Link>
        </li>,
        <li className="nav-item" key={5}>
          <Link className="nav-link" to="/cart">shopping Cart</Link>
        </li>,
        <li className="nav-item" key={6}>
          <Link className="nav-link" to="/todo">Todo App</Link>
        </li>
      ];
    } else {
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/signin">Sign In</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ];
    }
  }

  renderUserProfile() {
    if (this.props.authenticated) {
      return [
        <li className="dropdown user_profile" key={1}>
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">
            <i className="glyphicon glyphicon-user"></i>
            User Profile<span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><Link className="nav-link" to="/profile">
              <i className="glyphicon glyphicon-user"></i>
              My profile</Link></li>
            <li><Link className="nav-link" to="/signout">
              <i className="glyphicon glyphicon-log-out"></i>
              Sign Out</Link></li>
          </ul>
        </li>
      ];
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand header-text">
          <span><img src="../../style/img/shopping-cart.png" />
            Shopping Cart</span></Link>
        <ul className="nav navbar-nav">
          {this.renderLinks()}
        </ul>
        <ul className="nav navbar-nav navbar-right">
          {this.renderUserProfile()}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
