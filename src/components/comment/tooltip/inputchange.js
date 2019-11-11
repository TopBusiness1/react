import React from 'react';
import { Component } from 'react';
import Tooltip from './tooltip';
export class InputChange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            placement: ''
        };
        this.updateState = this.updateState.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.$el = $(this.el);
        this.$el.on('change', this.handleChange);
    }
    componentWillUnmount() {
        this.$el.off('change', this.handleChange);
    }

    handleChange(e) {
        this.setState({ placement: e.target.value });
    }
    updateState(e) {
        this.setState({ title: e.target.value });
    }
    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <input className="form-control" type="text" value={this.state.title}
                            onChange={this.updateState} />
                    </div>
                    <div className="col-md-6">
                        <select className="form-control" onChange={this.handleChange}>
                            <option>top</option>
                            <option>bottom</option>
                            <option>left</option>
                            <option>right</option>
                        </select>
                    </div>
                </div>
                <Tooltip title={this.state.title} placement={this.state.placement}>
                    tooltip
                </Tooltip>
            </div>
        );
    }
}