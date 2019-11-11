import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/todos';
import AddTodo from './add_todo';
import TotalInfo from './total_info';
import TodoList from './todo_list';

class Todo extends Component {

    componentDidMount() {
        this.props.getTodos();
    }

    render() {

        const renderData = {
            loading: <li> Loading...</li>,

            loaded: <TodoList item={this.props.todos} />,

            failed: <li>{this.props.loadMsg}</li>
        }

        return (
            <div className="col-sm-6">
                <h2>Todo App</h2>
                <AddTodo />
                <TotalInfo />
                {
                    renderData[this.props.loadStatus]
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todo.todos || [],
        total: state.todo.total,
        completed: state.todo.completed,
        text: state.todo.text,
        loadMsg: state.todo.loadMsg,
        loadStatus: state.todo.loadStatus
    };
}

export default connect(mapStateToProps, actions)(Todo);
