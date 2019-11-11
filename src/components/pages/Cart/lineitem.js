import React from "react";
import { Component } from "react";
import { Product } from './product';
export default class LineItem extends Component {
    constructor(props) {
        super(props);

        this.onChangeQuantity = this.onChangeQuantity.bind(this);
    }
    onChangeQuantity(event) {
        const value = event.target.value;
        this.props.changeQuantity(value, this.props.item.id);
    }
    render() {
        const { item } = this.props;
        return (
            <tr>
                <td>{this.props.idx + 1}</td>
                <td><Product product={item.product} /></td>
                <td>${item.price}</td>
                <td>
                    <input type="number"
                        onChange={this.onChangeQuantity.bind()}
                        min="1"
                        defaultValue={item.quantity}
                        className="form-control quantity" />
                </td>
                <td>${item.total}</td>
                <td><a href="#" onClick={e => this.props.handleRemove(item.id)}><i className="glyphicon glyphicon-trash"></i></a></td>
            </tr>
        );
    }
}