import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import HeaderBar from './header_bar';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/tasks">Task</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/report">Report</Link>
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
      <header>
        <HeaderBar />
        <nav className="navbar navbar-info navbar-light" data-spy="affix" data-offset-top="55">
          <ul className="nav navbar-nav">
            {this.renderLinks()}
          </ul>
          <ul className="nav navbar-nav navbar-right">
            {this.renderUserProfile()}
          </ul>
        </nav>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
