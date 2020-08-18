import React, { Component } from "react";
import Context from "../context";
import Card from "../components/Card";

//The basic page that renders the random cards grabbed from the initial fetch.
export default class LangChoice extends Component {
  static contextType = Context;

  //calls app to grab another random 3 cards
  handleClick = (ev) => {
    ev.preventDefault();

    window.location.reload(false);
  };

  render() {
    const cardList = this.context.cards;
    console.log(cardList);
    return (
      <div className="App__main">
        {cardList.map((card, index) => (
          <Card key={index} card={card} history={this.props.history} />
        ))}
        <br />
        <br />
        <button onClick={this.handleClick}> more...</button>
      </div>
    );
  }
}
