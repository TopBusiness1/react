import React from 'react';

import { Component } from 'react';
export class MyJob extends Component {
    render() {
        const myjob = "Programmer of information institue of Man po city";
        return (
            <div>
                <center>
                    <h2>My job</h2>
                    <h3>{myjob}</h3>
                </center>
            </div>);
    }
}
export class MyLanguage extends Component {
    constructor(props) {
        super(props);
        this.state =
            { language: this.props.language };
    }
    render() {
        const language = this.state.language.split(' ').sort();
        return (
            <div>
                <center>
                    <h2>My Own language</h2>
                    <h3>{language.map((item, i) => <div key={i}>{item}</div>)}</h3>
                </center>
            </div>
        );
    }
}