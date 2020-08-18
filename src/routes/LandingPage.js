import React, { Component } from "react";
import LanguageChoice from "../components/LanguageChoice";
import Features from "../components/Features";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <br />
        <br />
        <LanguageChoice />
        <Features />
      </>
    );
  }
}
