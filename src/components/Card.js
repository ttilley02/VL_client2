import React, { Component } from "react";
import TokenService from "../services/token-service";
import config from "../config";
import Context from "../context";
import "./Card.css";

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
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h1 className="ftext">{card.spa_content}</h1>
          </div>
          <div className="flip-card-back">
            <div className="btext">{card.eng_content}</div>
            <p>
              <button
                className="favoriteButton"
                name={card.id}
                onClick={this.handleClick}
              >
                Save
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
