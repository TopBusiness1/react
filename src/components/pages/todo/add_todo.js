import React, { Component, PropTypes } from 'react';
import * as actions from '../../../actions/todos';
import { connect } from 'react-redux';

class AddTodo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: this.props.selected.text
        }
    }

    createTodo() {
        // const text = this.state.text;
        this.props.createTodo(this.state.text);

    }

    handleText(e) {
        this.setState({ text: e.target.value });
        const selected = this.props.selected;
        selected.text = e.target.value;
        this.props.handleSelected(selected);
    }

    updateTodo() {
        const { _id, text } = this.props.selected;
        this.props.updateTodo(_id, text);
        this.props.handleFormStatus('add');
        const selected = {};
        this.props.handleSelected(selected)
    }

    render() {
        const renderData = {
            add: <button onClick={this.createTodo.bind(this)} className="btn btn-info">Add</button>,
            update: <button onClick={this.updateTodo.bind(this)} className="btn btn-danger">Update</button>
        }
        return (
            <div className="row">
                <div className="col-md-offset-2">
                    <form className="form-inline" onSubmit={e => { e.preventDefault() }}>
                        <div className="form-group">
                            <label for="val">Add value:</label>
                            <input type="text" className="form-control" id="val"
                                onChange={this.handleText.bind(this)}
                                placeholder="Title..." value={this.props.selected.text}
                            />
                        </div>
                        {renderData[this.props.formStatus]}
                    </form>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        selected: state.todo.selected || {},
        formStatus: state.todo.formStatus
    };
}

export default connect(mapStateToProps, actions)(AddTodo);
