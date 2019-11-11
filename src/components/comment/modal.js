import React, { Component } from 'react';

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: this.props.show
    }
  }

  toggleModal() {
    if (this.state.show) {
      this.$el.modal("show");
    } else {
      this.$el.modal("hide");
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      show: nextProps.show
    });
  }

  componentDidUpdate() {
    this.toggleModal();
  }

  componentDidMount() {
    this.$el = $(this.el);
    this.toggleModal();

    const that = this
    this.$el.on('show.bs.modal', (e) => {
      if (that.props.onShow) {
        that.props.onShow();
      }
    });

    this.$el.on('hide.bs.modal', (e) => {
      if (that.props.onHide) {
        that.props.onHide();
      }
    });
  }

  render() {
    // console.log(this.props);
    return (
      <div className="modal fade" tabIndex="-1" role="dialog" ref={el => this.el = el}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">{this.props.title}</h4>
            </div>
            <div className="modal-body">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}