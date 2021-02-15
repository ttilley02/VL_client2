import React, { Component } from "react";

import Features from "../components/Features";
import "./Landing.css";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <div className="land">
          <br />
          <div className="logo" />
          <Features />
        </div>
      </>
    );
  }
}
