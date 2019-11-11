import React, { Component } from 'react';

export default class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this)
        this.handleModal = this.handleModal.bind(this)
    }

    handleRemove() {
        this.props.handleRemove(this.props.item._id);
    }

    handleModal() {
        this.props.TitleModal(this.props.item);
    }

    handlecheck() {
        const complete = this.props.item.completedOn == null ? new Date() : null;
        this.props.Checkboxfunc(this.props.item._id, complete);
    }

    render() {
        const { item } = this.props;
        const titleclass = ["panel panel-primary", "panel panel-info", "panel panel-success"];
        return (
            <div id={item._id+"taskitem"} className="col-sm-6 col-md-4">
                <div className={titleclass[item.completedOn != null ? 0 : 1]}>
                    <div className="panel-heading">
                        <a style={{ color: "white" }}
                            onClick={this.handleModal}
                        >{item.title}</a>
                        <span className="navbar-left">
                            <input type="checkbox"
                                onChange={this.handlecheck.bind(this)}
                                checked={item.completedOn != null ? true : false}
                            />
                        </span>
                        <span className="navbar-right">
                            <a className="btn-primary"
                                onClick={this.handleRemove}
                            >
                                <i className="glyphicon glyphicon-trash"></i>
                            </a>
                        </span>
                    </div>
                    <div className="panel-body">{item.content}</div>
                    <div className="panel-footer">
                        <div className="col-sm-8">
                            {item.createdAt}
                        </div>
                        <div className="">
                            <span>{item.assigndedUser.name?item.assigndedUser.name:"Me"}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}