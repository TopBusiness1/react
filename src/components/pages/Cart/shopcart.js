import React from "react";
import { Component } from "react";

export default class ShopCart extends Component {
    render() {
        // const { lebel, value } = this.props;
        return (
            <tr>
                <td colSpan="4" className="text-right">
                    {this.props.label}
                </td>
                <td>
                    ${this.props.value}
                </td>
                <td></td>
            </tr>
        );
    }
}