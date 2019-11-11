import React from 'react';
import { Component } from 'react';


export default class Tooltip extends Component {
    render() {
        return (
            <TooltipContent title='hello world' placement='bottom'>
                <a href='#'>Tolltip Content</a>
            </TooltipContent>
        )
    }
}
class TooltipContent extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.$el = $(this.el);
        this.$el.tooltip({
            title: this.props.title,
            placement: this.props.placement
        })
    }
    componentWillUnmount() {
        this.$el.tooltip('destroy');
    }
    componentDidUpdate() {
        this.$el.tooltip('destroy');
        let that = this;
        setTimeout(function () {
            that.$el.tooltip({
                title: that.props.title,
                placement: that.props.placement
            });
        }, 1000)
    }
    render() {
        var tooltipstyle = { display: 'inline' }
        return (
            <div ref={el => this.el = el} style={tooltipstyle}>{this.props.children}</div>
        );
    }
}