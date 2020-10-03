import React, { Component } from "react";
import socket from "../apis/socketClient";
import { Button, ButtonGroup } from "reactstrap";

// import "./VideoControl.css";

class VideoControl extends Component {
  playVideo = () => {
    socket.emit("videoControl", sessionStorage.getItem("roomToken"), 1);
    this.props.player.playVideo();
  };

  pauseVideo = () => {
    socket.emit("videoControl", sessionStorage.getItem("roomToken"), 0);
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
