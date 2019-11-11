import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

import Modal from '../../comment/modal';

class TaskModal extends Component {
  constructor(props) {
    super(props);
  }

  onHide() {
    this.props.onHide();
  }

  handlemodal() {
    const task = {
      title: this.refs.title.value,
      content: this.refs.content.value
    }
    this.props.handleModal(task);
    this.onHide();
  }

  render() {
    const { item } = this.props;
    $(this.refs.title).val(item.title);
    $(this.refs.content).val(item.content);
    return (
      <Modal
        show={this.props.show}
        title={'TASK MODAL...'}
        onHide={this.onHide.bind(this)}
      >
        <div>
          <div className="form-group">
            <label htmlFor="usr">Title:</label>
            <input type="text"
              className="form-control"
              ref="title"
              id="usr" />
          </div>
          <div className="form-group">
            <label htmlFor="comment">Content:</label>
            <textarea className="form-control" rows="5"
              ref="content"
              id="comment"></textarea>
          </div>
        </div>
        <div className="text-right">
          <button type="button" onClick={this.handlemodal.bind(this)} className="btn btn-primary">Save changes</button>
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    show: state.auth.showTaskModal
  };
}

export default connect(mapStateToProps, actions)(TaskModal);