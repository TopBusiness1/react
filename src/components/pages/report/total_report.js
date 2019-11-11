import React, { Component } from 'react';

export default class TotalReport extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { item } = this.props;
        return (
            <div className="tab-content">
                <div className="tab-pane fade in active"><h2>
                    <div>Total task created : {item.total_task_created}</div>
                    <div>Total task completed : {item.total_task_completed}</div>
                    <div>Tasks Assigned to me : {item.completed_my_task + item.tasks_assigned_to_me}</div>
                    <div>Completed My Task : {item.completed_my_task}</div></h2>
                </div>
            </div>
        );
    }
}