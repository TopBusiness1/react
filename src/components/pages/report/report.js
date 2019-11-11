import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/tasks';
import TotalReport from './total_report';

class Report extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const date = new Date();
        date.setDate(date.getDate() - 7);
        this.props.getTaskItem_date(date);
    }

    handleWeek() {
        const date = new Date();
        date.setDate(date.getDate() - 7);
        this.props.getTaskItem_date(date)
    }
    handleMonth() {
        const date = new Date();
        date.setDate(date.getDate() - 30);
        this.props.getTaskItem_date(date)
    }
    render() {
        return (
            <div className="container">
                <div className="col-sm-3"></div>
                <div className="w3-card-2 col-sm-6">
                    <ul className="nav nav-tabs">
                        <li className="active">
                            <a data-toggle="tab" href="#a"
                                onClick={this.handleWeek.bind(this)}>Last 7 days</a></li>
                        <li>
                            <a data-toggle="tab" href="#a"
                                onClick={this.handleMonth.bind(this)}>Last 1 Month</a></li>
                    </ul>
                    <TotalReport item={this.props.tasks} />
                </div>
                <div className="col-sm-3"></div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { tasks: state.task.reports || [], };
}

export default connect(mapStateToProps, actions)(Report);
