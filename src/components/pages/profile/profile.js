import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

class Profile extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.props.getProfile();
    }
    handleSubmit() {
        if ($(this.refs.new_password).val() != $(this.refs.confirm_password).val()) {
            alert("please confirm password again!");
            return;
        }


        if ($(this.refs.new_password).val() == "") {
            const user = {
                id: this.props.users._id,
                name: $(this.refs.name).val(),
                email: $(this.refs.email).val(),
                gender: $(this.refs.gender).val(),
                birthday: $(this.refs.birthday).val()
            }
            this.props.userUpdate(user);
            return;
        }
        const user = {
            id: this.props.users._id,
            name: $(this.refs.name).val(),
            email: $(this.refs.email).val(),
            password: $(this.refs.new_password).val(),
            gender: $(this.refs.gender).val(),
            birthday: $(this.refs.birthday).val()
        }
        this.props.userUpdate(user);
    }
    render() {
        const { users } = this.props;
        $(this.refs.name).val(users.name);
        $(this.refs.email).val(users.email);
        $(this.refs.new_password).val();
        $(this.refs.confirm_password).val();
        $(this.refs.gender).val(users.gender);
        $(this.refs.birthday).val(users.birthday);
        return (
            <div className="container">
                <div className="col-sm-3"></div>
                <div className="w3-card-2 col-sm-6">
                    <center>
                        <img src="../../../../style/img/profiles/img1-large.jpg" className="img-circle" width="130" />
                        <h2><input type="text" ref="name" className="quantity" /></h2>
                    </center>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label className="control-label col-sm-4" htmlFor="email">Email:</label>
                            <div className="col-sm-8">
                                <input type="email"
                                    className="form-control"
                                    id="email" name="email"
                                    ref="email"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-4" htmlFor="new_pwd">New Password:</label>
                            <div className="col-sm-8">
                                <input type="password"
                                    className="form-control"
                                    id="new_pwd" name="new_pwd"
                                    ref="new_password"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-4" htmlFor="confirm_pwd">Confirm Password:</label>
                            <div className="col-sm-8">
                                <input type="password"
                                    className="form-control"
                                    id="confirm_pwd" name="confirm_pwd"
                                    ref="confirm_password"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-4" htmlFor="gender">Gander:</label>
                            <div className="col-sm-8">
                                <select
                                    className="form-control"
                                    id="gender"
                                    ref="gender">
                                    <option defaultValue="man">man</option>
                                    <option defaultValue="woman">woman</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-4" htmlFor="birthday">Birthday:</label>
                            <div className="col-sm-8">
                                <input type="date"
                                    className="form-control"
                                    id="birthday"
                                    ref="birthday"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <div className="checkbox">
                                    <label><input type="checkbox" name="remember" /> Remember me</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-8 col-sm-10">
                                <button
                                    className="btn btn-success"
                                    onClick={this.handleSubmit.bind(this)}
                                >
                                    Uadate
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-sm-3"></div>
            </div>);
    }
}

function mapStateToProps(state) {
    return { users: state.auth.users || [], };
}

export default connect(mapStateToProps, actions)(Profile);
