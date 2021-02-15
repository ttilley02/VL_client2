import React, { Component } from "react";
import LanguageChoice from "../components/LanguageChoice";

export default class Features extends Component {
  //description of the app and citations as needed.
  render() {
    return (
      <>
        <div list-style="none" className="main">
          <LanguageChoice />
          <i> Powered by the University of Texas at Austin</i>

          <h3>
            Beginner and Intermediate card exercises powered by the University
            of Texas Spanish Program. Get into the weeds with grammar, phrases
            and vocab that range from causal to business travel. Designed to
            assist in conversations with a wide range of variety from numbers to
            describing your work day!
            <br />
            <br />
            Cycle through cards containing content from the UTexas curriculum
            with a focused approach to learning spanish. FAVORITE your cards and
            personalize them with NOTES for later reference and extra practice.
          </h3>
        </div>
      </>
    );
  }
}
