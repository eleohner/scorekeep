import React from "react";
import ReactDOM from "react-dom"; // npm packages
import { Meteor } from "meteor/meteor"; // meteor modules
import { Tracker } from "meteor/tracker";

import { Players, calculatePlayerPositions } from "./../imports/api/players"; // ./../ file system targets
import App from "./../imports/ui/App";

Meteor.startup(_ => {
  // call tracker.autorun
  Tracker.autorun(_ => {
    let players = Players.find(
      {},
      {
        sort: {
          score: -1
        }
      }
    ).fetch();
    let positionedPlayers = calculatePlayerPositions(players);
    let title = "Score Keep";
    ReactDOM.render(
      <App title={title} players={positionedPlayers} />,
      document.querySelector("#app")
    );
  });
});
