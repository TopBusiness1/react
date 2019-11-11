import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoInfo extends Component {

  render() {

    return (
      <div className='todo-info'>
        <span>Total: {this.props.total}</span>
        <span className='complete'>Completed: {this.props.completed}</span>
        <span><input type='date' className='date' defaultValue='2019-09-16' /></span>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    total: state.todo.total,
    completed: state.todo.completed,
  };
}

export default connect(mapStateToProps)(TodoInfo);
