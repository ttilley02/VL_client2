import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../services/token-service";
import Context from "../context";

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
        <li className="Header__not-logged-in">
          <Link to="/login">Log in</Link>
        </li>
        <li>
          <Link to="/reg">Register</Link>
        </li>
      </>
    );
  }

  render() {
    return (
      <>
        <nav className="header">
          <Link to="/" className="title">
            Vocabulab
          </Link>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>

          <ul className="menu">
            <li>
              <Link to="/cards"> Cards </Link>
            </li>
            <li>
              <Link to="/profile"> My Cards </Link>
            </li>
            {TokenService.hasAuthToken()
              ? this.renderLogoutLink() //User Logged in? Show Logout option. Logged out? Show Reg and Login
              : this.renderLoginLink()}
          </ul>
          <br />
        </nav>
      </>
    );
  }
}
