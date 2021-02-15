import React, { Component } from "react";
import TokenService from "../services/token-service";
import config from "../config";
import { Link } from "react-router-dom";
import Context from "../context";
import "./UserCards.css";

export default class Card extends Component {
  static contextType = Context;

  handleDeleteClick = (ev) => {
    //API request to delete the card reference per the ID of current card.  Note table being deleted which calls user Cards
    ev.preventDefault();
    this.setState({ error: null });

    let cardId = ev.target.name;

    return fetch(`${config.API_ENDPOINT}/api/notes/` + cardId, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(this.context.deleteNotefromPage(cardId));
  };

  render() {
    const { card } = this.props;
    let noteMessage;

    //if the user has already entered a note show "Edit" if not show "Add"
    if (this.props.note === null) {
      noteMessage = "Add Note";
    } else {
      noteMessage = "Edit Note";
    }

    return (
      //Other side of the card with the options to delete from your favorites or make a note.
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h1 className="ftext">{card.spa_content}</h1>
          </div>
          <div className="flip-card-back">
            <div className="btext">{card.eng_content}</div>

            <button
              className="deleteButton"
              name={card.id}
              onClick={this.handleDeleteClick}
            >
              delete
            </button>
            <div>
              <Link
                className="addNote_"
                to={{ pathname: `/addNote/${card.id}` }}
                history={this.props.history}
              >
                <div className="noteMessage">{noteMessage}</div>
              </Link>
              <section className="">
                <div>{this.props.note}</div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
