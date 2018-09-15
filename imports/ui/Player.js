import React from "react";
import PropTypes from "prop-types";

import { Players } from "./../api/players";

export default class Player extends React.Component {
  render() {
    let itemClassName = `item item--position-${this.props.player.rank}`;
    return (
      <div className={itemClassName} key={this.props.player._id}>
        <div className="player">
          <div>
            <h3 className="player__name">{this.props.player.name}</h3>
            <p className="player__stats">
              {this.props.player.position} place | &nbsp;
              {this.props.player.score + " "}
              {this.props.player.score == 1 || this.props.player.score == -1
                ? "point"
                : "points"}
              .
            </p>
          </div>
          <div className="player__actions">
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
        </div>
      </div>
    );
  }
}

// Set up prop types. Player should be a required object
Player.propTypes = {
  player: PropTypes.object.isRequired
};
