import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Footer extends Component {

  render() {
    return (
      <div>
          {/* <!-- Footer --> */}
        <footer className="footer_group text-center">
        <a className="up-arrow" href="#" data-toggle="tooltip" title="TO TOP">
            <span className="glyphicon glyphicon-chevron-up"></span>
        </a><br/>
        <p>Bootstrap Theme Made By <a href="../index.html" data-toggle="tooltip" title="Visit w3schools">www.w3schools.com</a></p> 
        </footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Footer);
