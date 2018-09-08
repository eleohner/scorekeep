import React from "react";
import PropTypes from "prop-types";

import { Players } from "./../api/players";

export default class Player extends React.Component {
  render() {
    return (
      <div className="item" key={this.props.player._id}>
        <p>
          {this.props.player.name} has {this.props.player.score}{" "}
          {this.props.player.score == 1 || this.props.player.score == -1
            ? "point"
            : "points"}
          .
        </p>
        <button
          className="button button--round"
          onClick={_ =>
            Players.update(this.props.player._id, { $inc: { score: -1 } })
          }
        >
          -1
        </button>
        <button
          className="button button--round"
          onClick={_ =>
            Players.update(this.props.player._id, { $inc: { score: 1 } })
          }
        >
          +1
        </button>
        <button
          className="button button--round"
          onClick={_ => Players.remove({ _id: this.props.player._id })}
        >
          X
        </button>
      </div>
    );
  }
}

// Set up prop types. Player should be a required object
Player.propTypes = {
  player: PropTypes.object.isRequired
};
