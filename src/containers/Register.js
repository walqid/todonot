import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import firebase from "../firebase";

class Register extends Component {
  state = {
    emailId: "",
    name: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //We are using async to make the execution synchronous.
  handleSubmit = async e => {
    e.preventDefault();
    try {
      const { name, emailId, password } = this.state;
      if (name && emailId && password) {
        //Here we need to use await to resolve or reject the promise from firebase
        let data = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailId, password);
        data.user.updateProfile({
          displayName: name
        });
        if (data) {
          alert("Registered Successfully");
          this.props.history.replace("/");
        }
      }
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  render() {
    return (
      <div
        className="row align-items-center justify-content-center"
        style={{ height: "70vh" }}
      >
        <div className="col-6">
          <h3>Sign Up</h3>
          <hr />
          <form onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Required"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Required"
                  name="emailId"
                  value={this.state.emailId}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Required"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Create
            </button>
            &nbsp;
            <Link to="/" className="btn btn-primary">
              Log in
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
