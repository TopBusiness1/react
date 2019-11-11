import React, { Component, PropTypes } from 'react';
import * as actions from '../../../actions/todos';
import { connect } from 'react-redux';

class TodoItem extends Component {
    toggleChecked(e) {
        let endDate = Date();
        if (e.target.value == 'on') {
            const isChecked = this.props.completed == false ? true : false;
            if (isChecked == true) {
                endDate = new Date;
            }
            else {
                endDate = "";
            }
            this.props.toggleCompleted(this.props._id, isChecked, endDate)

        }
        // if (e.target.tagName == "LI") {
        //     const classList = this.el.classList;
        //     classList.toggle('checked');
        //     const isChecked = classList.contains('checked');

        //     this.props.toggleCompleted(this.props._id, isChecked)
        // }
    }

    removeTodo() {
        if (!confirm('Are you sure? Do you want to delete it parmanently?')) return;
        this.props.removeTodo(this.props._id, this.props.completed);
    }

    updateTodo() {
        const todo = { _id: this.props._id, text: this.props.text };
        this.props.handleSelected(todo);
        this.props.handleFormStatus('update');
    }

    render() {

        return (
            <tr>
                <td>{this.props.idx + 1}</td>
                <td>{this.props.text}</td>
                <td>
                    <input type="checkbox"
                        onChange={this.toggleChecked.bind(this)}
                        defaultChecked={this.props.completed ? true : false}
                    />
                </td>
                <td><span onClick={this.updateTodo.bind(this)} className="btn" ><i className='glyphicon glyphicon-edit'></i></span></td>
                <td><span onClick={this.removeTodo.bind(this)} className="btn"><i className='glyphicon glyphicon-trash'></i></span></td>
            </tr>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, actions)(TodoItem);
