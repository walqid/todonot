import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase";

class Login extends Component {

  state = {
    emailId: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      const { emailId, password } = this.state;
      if (emailId && password) {
        let data = await firebase
          .auth()
          .signInWithEmailAndPassword(emailId, password);
        console.log(data);
      } else {
        throw new Error("Please enter email and password");
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
        <div className="col-4">
          <h3>Log in</h3>
          <hr />
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                name="emailId"
                placeholder="Enter email"
                onChange={this.handleChange}
                value={this.state.emailId}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Enter password"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Log in
            </button>
            &nbsp;
            <Link to="/signup" className="btn btn-primary">
              Sign up
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
