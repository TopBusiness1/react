import React, { Component } from 'react';
import { connect } from 'react-redux';

class TotalInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container"><br />
        <div className="list-group-item col-md-5">
          Total :<span style={{ color: "red", marginRight: 30 }}>{this.props.total}</span>
          Complete :<span style={{ color: "red" }}>{this.props.completed}</span>
          <input type='date' className='form-control' defaultValue='2019-09-16' />
        </div>
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

export default connect(mapStateToProps)(TotalInfo);
