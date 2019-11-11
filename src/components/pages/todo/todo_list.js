import React, { Component } from 'react';
import TodoItem from './todo_item';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { item } = this.props;
        return (
            <table className="table table-hover">
                <thead>
                    <th>No</th>
                    <th>Title</th>
                    <th>Complete</th>
                    <th>Edit</th>
                    <th>Remove</th>
                </thead>
                <tbody>
                    {item.map((item, li) =>
                        <TodoItem {...item} key={item._id} idx={li} />
                    )}
                </tbody>
            </table>
        )
    }
}