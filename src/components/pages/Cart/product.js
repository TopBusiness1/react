import React from "react";
import { Component } from "react";

export class Product extends Component {
    render() {
        return (
            <a href="" className="product_info">
                <div>
                    <img src={this.props.product.image} className="img-thumbnail" width="60" height="60" />
                    <span className="product_name">{this.props.product.name}</span>
                </div>
            </a>
        );
    }
}