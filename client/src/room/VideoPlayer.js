import React, { Component } from "react";

import Youtube from "react-youtube";

class VideoPlayer extends Component {
  render() {
    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
    return (
      <div style={{ diplay: "flex" }}>
        <Youtube
          style={{ objectFit: "fill" }}
          videoId="2g811Eo7K8U"
          opts={opts}
        />
      </div>
    );
  }
}

export default VideoPlayer;
