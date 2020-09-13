import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import Chat from "./Chat";
import VideoPlayer from "./VideoPlayer";
import VideoPlaylist from "./VideoPlaylist";

import "./Room.css";

export class Room extends Component {
  state = { roomToken: "" };

  componentDidMount() {
    this.setState({ roomToken: this.props.location.roomToken });
  }

  render() {
    return (
      <div className="room-container">
        <div className="player">
          <VideoPlayer />
        </div>
        <div className="playlist">
          <VideoPlaylist />
        </div>
        <div className="chat">
          <Chat />
        </div>
      </div>
    );
  }
}

export default withRouter(Room);
