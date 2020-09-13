import React, { Component } from "react";

import Youtube from "react-youtube";
import './VideoPlayer.css';

class VideoPlayer extends Component {
  render() {
    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        controls: 0,
        disablekb: 1

      },
    };
    return (
      <div className="video-wrapper">
        <Youtube
          className="video"
          videoId="2g811Eo7K8U"
          opts={opts}
        />
      </div>
    );
  }
}

export default VideoPlayer;
