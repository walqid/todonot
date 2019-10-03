import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import firebase from "../firebase";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks } from '@fortawesome/free-solid-svg-icons'


class Header extends React.Component {
  state = {
    currentTime: moment().format("DD MMM YYYY hh:mm A")
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentTime: moment().format("DD MMM YYYY hh:mm A")
      });
    }, 1000);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <FontAwesomeIcon icon={faTasks} color="#3273dc" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <Link className="navbar-brand" to="/" replace>
          Todo&not;
          </Link>
          <ul className="navbar-nav">
            <li
              className={`nav-item ${
                window.location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li
              className={`nav-item ${
                window.location.pathname === "/aboutus" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/aboutus">
                About
              </Link>
            </li>
          </ul>
        </div>
            {this.props.isLoggedIn && (
              <ul className="navbar-nav">

              <li
              className={`nav-item`}
              >
                <Link
                  to="" 
                  className="nav-link"
                  style={{direction: 'left'}}
                  onClick={() => firebase.auth().signOut()}
                >
                  Logout
                </Link>
              </li>
              </ul>
            )}
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  displayName: state.auth.userDetails.displayName,
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(
  mapStateToProps,
  null
)(Header);
