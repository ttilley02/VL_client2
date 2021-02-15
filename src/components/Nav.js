import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../services/token-service";
import Context from "../context";
import "./Nav.css";

export default class Nav extends Component {
  static contextType = Context;

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.forceUpdate();
  };
  renderLogoutLink() {
    return (
      <li className="Header__logged-in">
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </li>
    );
  }

  renderLoginLink() {
    return (
      <>
        <Link to="/login">Log in</Link>
        <Link to="/reg">Register</Link>
      </>
    );
  }

  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  render() {
    return (
      <>
        <div className="topnav" id="myTopnav">
          <Link to="/" className="active">
            Vocabulab
          </Link>
          <Link to="/cards"> Cards </Link>
          <Link to="/profile"> My Cards </Link>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink() //User Logged in? Show Logout option. Logged out? Show Reg and Login
            : this.renderLoginLink()}
          <div className="icon" onClick={this.myFunction}>
            <div className="tinyMenu">MENU</div>
          </div>

          <br />
        </div>
      </>
    );
  }
}
