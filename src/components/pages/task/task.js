import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/tasks';
import Search from '../../comment/search';
import TaskModal from './task_modal';
import TaskItem from './task_item';

class Task extends Component {
    constructor(props) {
        super(props);

        this.state = {
            taskSet: {},
            searchval:"",
            addBtn: "All"
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleModal = this.handleModal.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.TitleModal = this.TitleModal.bind(this);
        this.Checkboxfunc = this.Checkboxfunc.bind(this);
    }

    handleSearch(val) {
        for (let i = 0; i < this.props.tasks.length; i++) {
            const element = this.props.tasks[i].title;
            let hit = 0;
            if((element.toUpperCase().indexOf(val.toUpperCase()) > -1)){
                hit=1;
            }
            if (hit == 1) {
                $("#"+this.props.tasks[i]._id+"taskitem").show();
            } else {
                $("#"+this.props.tasks[i]._id+"taskitem").hide();
            }
        }
    }
    handleModal(val) {
        if (this.state.taskSet._id == undefined) {
            this.props.created(val);
        }
        else {
            this.props.update_task(val, this.state.taskSet._id);
        }
        // this.props.dispatch(actions.created(val));
    }
    TitleModal(datas) {
        // console.log(datas);
        this.setState({
            taskSet: datas
        });
        this.props.showTaskModal();
    }
    handleRemove(id) {
        if (!confirm("do you want to the delete?")) return;
        this.props.remove(id);
    }

    Checkboxfunc(id, check) {
        const taskcheck = {
            completedOn: check
        }
        this.props.update_task(taskcheck, id);
    }

    // task modal
    onClickShowModal() {
        this.setState({
            taskSet: {}
        })
        // this.props.dispatch(actions.showTaskModal());
        this.props.showTaskModal();
    }

    onHideModal() {
        // this.props.dispatch(actions.hideTaskModal());
        this.props.hideTaskModal();
    }
    //task modal end

    componentWillMount() {
        // this.props.dispatch(actions.reading());
        this.props.reading_all();
    }

    handleReading(){
        if(this.refs.reading.value == "All"){
            this.setState({
                addBtn:"All"
            })
            this.props.reading_all();
        }
        else{
            this.setState({
                addBtn:"Me"
            })
            this.props.reading();
        }
    }

    render() {
        const { tasks } = this.props;
        const tasksearch = this.props.tasks;
        const addButton = {
            All: <span>If you adding the task,please option the me in the select...</span>,
            Me: <button className="btn btn-info btn-lg" onClick={this.onClickShowModal.bind(this)}>Add Task</button>
        };
        return (
            <div>
                <div className="container">
                    <div className="col-sm-2">
                        <select className="form-control" ref="reading" onChange={this.handleReading.bind(this)}>
                            <option>All</option>
                            <option>Me</option>
                        </select>
                    </div>
                    <div className="col-sm-6">
                        <Search handleSearch={this.handleSearch} />
                    </div>
                    <div className="col-sm-4">
                        {addButton[this.state.addBtn]}
                        <TaskModal
                            show={this.props.showTaskModal}
                            onHide={this.onHideModal.bind(this)}
                            handleModal={this.handleModal}
                            item={this.state.taskSet}
                        />
                    </div>
                </div>
                <div className="row text-center">
                    {tasks.map((item, li) =>
                        <TaskItem
                            key={li}
                            item={item}
                            idx={li}
                            handleRemove={this.handleRemove}
                            TitleModal={this.TitleModal}
                            Checkboxfunc={this.Checkboxfunc}
                        />)}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { tasks: state.task.tasks || [], };
}

export default connect(mapStateToProps, actions)(Task);
