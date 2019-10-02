import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import firebase from "./firebase";

import Dashboard from "./containers/Dashboard";
import AboutUs from "./containers/AboutUs";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Register from "./containers/Register";

import { updateAuth } from "./redux/actions/actions-auth";
import Loader from "./components/Loader";

class Routes extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.updateAuth({
          uid: user.uid,
          displayName: user.displayName,
          emailId: user.email
        });
      } else {
        this.props.updateAuth(null);
      }
      this.setState({
        loading: false
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    }
    return (
      <Switch>
        {this.props.isLoggedIn ? (
          <Route path="/" component={Dashboard} exact />
        ) : (
          <>
            <Route path="/" component={Login} exact />
            <Route path="/signup" component={Register} exact />
          </>
        )}
        <Route path="/aboutus" component={AboutUs} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  updateAuth: userDetails => dispatch(updateAuth(userDetails))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);
