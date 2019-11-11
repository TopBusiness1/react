import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ProtectedContent extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <div className="msg"><h1>HELLO WORLD</h1>{this.props.message}</div>
    );
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(ProtectedContent);
