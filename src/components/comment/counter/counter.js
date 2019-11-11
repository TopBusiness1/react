import React from 'react';
import { Component } from 'react';

export default class CCC extends Component {

    render() {
        return (<PlusCounter start={1} step={2} />)
    }
}

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.start || 1,
            step: this.props.step || 1,
            operator: this.props.operator || 'plus'
        };
        this.handleclick = this.handleclick.bind(this);
    }
    handleclick(e) {
        const { step } = this.state;

        let value = this.state.value;

        if (this.props.operator == "plus") {
            value = value + step;
        }
        else if (this.props.operator == "minus") {
            value = value - step;
        }
        else {
            console.log(`unkown operator ${this.props.operator}`);
        }
        this.setState({
            value: value
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.value}</h1>
                <button onClick={this.handleclick} type='button' >Counter ({this.state.operator})</button>
            </div>
        );
    }
}
class PlusCounter extends Component {
    render() {
        return (<Counter operator="plus" {...this.props} />);
    }
}
class MinusCounter extends Component {
    render() {
        return (<Counter operator="minus" {...this.props} />);
    }
}
class MultiCounter extends Component {
    render() {
        return (<Counter operator="multi" {...this.props} />);
    }
}
