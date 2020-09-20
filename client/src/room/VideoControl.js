import React, { Component } from "react";

import { Button, ButtonGroup } from "reactstrap";

// import "./VideoControl.css";

class VideoControl extends Component {
  playVideo = () => {
    this.props.player.playVideo();
  };

  pauseVideo = () => {
    this.props.player.pauseVideo();
  };

  render() {
    return (
      <ButtonGroup>
        <Button onClick={this.playVideo}>Play</Button>
        <Button onClick={this.pauseVideo}>Stop</Button>
      </ButtonGroup>
    );
  }
}

export default VideoControl;
