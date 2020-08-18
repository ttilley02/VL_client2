import React, { Component } from "react";
import TokenService from "../services/token-service";
import config from "../config";
import Context from "../context";

export default class Card extends Component {
  static contextType = Context;

  //setting note as a favorite to be stored in user profile
  handleClick = (ev) => {
    ev.preventDefault();

    this.setState({ error: null });

    //safeguard against the favorite button appearing when the card is already favorited
    var x = ev.target;
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    let fav = ev.target.name;
    return fetch(`${config.API_ENDPOINT}/api/cards/fav/${fav}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        favorite: "yes",
        card_id: fav
      })
    }).then((res) => {
      if (!res.ok) {
        this.props.history.push("/login");
      }
    });
  };

  render() {
    const { card } = this.props;
    //render the card
    return (
      <div className="flip flip-vertical">
        <div className="front">
          <h1 className="text-shadow">{card.spa_content}</h1>
        </div>
        <div className="back">
          <h2>{card.eng_content}</h2>
          <p>
            <button
              className="favorite"
              name={card.id}
              onClick={this.handleClick}
            >
              favorite
            </button>
          </p>
        </div>
      </div>
    );
  }
}
