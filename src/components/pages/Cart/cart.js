import React from 'react';
import { Component } from 'react';
import LineItem from './lineitem';
import ShopCart from './shopcart';

export default class Cart extends Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    id: 1,
                    product: { name: 'Record', image: '/style/img/00009.png' },
                    price: 500,
                    quantity: 2,
                    total: 0
                },
                {
                    id: 2,
                    product: { name: 'video', image: '/style/img/00028.png' },
                    price: 700,
                    quantity: 1,
                    total: 0
                },
                {
                    id: 3,
                    product: { name: 'music', image: '/style/img/00046.png' },
                    price: 30,
                    quantity: 5,
                    total: 0
                }
            ],
            cartInfo: {
                subTotal: 0,
                shipping: 50,
                discount: 0,
                total: 0
            }
        }
        this.state.cartInfo = this.updateCartInfo(this.state.products);
        this.changeQuantity = this.changeQuantity.bind(this);
        this.removeLineItem = this.removeLineItem.bind(this)
    }
    changeQuantity(quantity, productId) {
        const products = this.state.products;
        const product = products.filter(p => p.id == productId)[0];
        product.quantity = quantity;
        product.total = product.quantity * product.price;
        const cartInfo = this.updateCartInfo(products);
        this.setState({
            products: products,
            cartInfo: cartInfo
        });
    }
    updateCartInfo(products) {
        let subTotal = 0;

        products.forEach(product => {
            product.total = product.price * product.quantity;
            subTotal += product.total;
        });
        subTotal += this.state.cartInfo.shipping;
        const discount = subTotal * 0.1;
        const total = subTotal - discount;
        return {
            subTotal: subTotal,
            discount: discount,
            shipping: 50,
            total: total
        };
    }
    removeLineItem(productId) {
        const products = this.state.products.filter(p => p.id != productId);
        const cartInfo = this.updateCartInfo(products);
        this.setState({
            products: products,
            cartInfo: cartInfo
        });
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="portlet box purple ">
                            <div className="portlet-title ">
                                <div className="caption ">
                                    <i className="glyphicon glyphicon-tasks "></i>Cart
                                </div>
                                {/* {<div className="tools">
                                    <a href="" className="collapse"></a>
                                    <a href="#portlet-config" data-toggle="modal" className="config"></a>
                                    <a href="" className="reload"></a>
                                    <a href="" className="remove"></a>
                                </div>} */}
                            </div>
                            <div className="portlet-body ">
                                <div className="table-scrollable ">
                                    <table className="table table-striped table-hover table-bordered">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th>del</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.products.map((li, index) => <LineItem
                                                key={index} item={li} idx={index}
                                                handleRemove={this.removeLineItem}
                                                changeQuantity={this.changeQuantity} />)}
                                            <ShopCart label={"Shipping"} value={this.state.cartInfo.shipping} />
                                            <ShopCart label={"Subtotal"} value={this.state.cartInfo.subTotal} />
                                            <ShopCart label={"Discount(Coupon:10%)"} value={this.state.cartInfo.discount} />
                                            <ShopCart label={"Total"} value={this.state.cartInfo.total} />
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
