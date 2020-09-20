import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import Chat from "./Chat";
import VideoPlayer from "./VideoPlayer";
import VideoPlaylist from "./VideoPlaylist";

import "./Room.css";

export class Room extends Component {
  state = { roomToken: "", currentVideoId: "" };

  componentDidMount() {
    this.setState({ roomToken: this.props.location.roomToken });
  }

  setVideoId = (videoId) => {
    this.setState({ currentVideoId: videoId });
  };

  render() {
    return (
      <div className="room-container">
        <div className="player">
          <VideoPlayer roomToken={this.state.roomToken} videoId={this.state.currentVideoId} />
        </div>
        <div className="playlist">
          <VideoPlaylist roomToken={this.state.roomToken} setVideoId={this.setVideoId} />
        </div>
        <div className="chat">
          <Chat roomToken={this.state.roomToken} />
        </div>
      </div>
    );
  }
}

export default withRouter(Room);
