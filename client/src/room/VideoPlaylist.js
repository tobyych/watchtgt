import React, { Component } from "react";
import { ListGroup, Button } from "reactstrap";

import socketClient from "../apis/socketClient";

import "./VideoPlaylist.css";

export class VideoPlaylist extends Component {
  constructor() {
    super();
    this.state = {
      playlistInput: "",
      playlist: [],
    };
  }

  appendPlaylistItem = () => {
    socketClient.emit(
      "addToPlaylist",
      sessionStorage.getItem("roomToken"),
      this.state.playlistInput
    );
    this.setState({
      playlist: [...this.state.playlist, this.state.playlistInput],
      playlistInput: "",
    });
  };

  changeInput = (e) => {
    this.setState({ playlistInput: e.target.value });
  };

  changeVideo = (idx) => {
    //TODO: change the VideoPlayer's state and let it re-render
    this.props.setVideoId(this.state.playlist[idx]);
  };

  listItems() {
    return this.state.playlist.map((item, idx) => {
      return (
        <li className="playlist-item" key={idx}>
          <p className="playlist-item-text">{item}</p>
          <div className="playlist-item-append">
            <Button
              className="playlist-item-button"
              onClick={() => this.changeVideo(idx)}
            >
              Go
            </Button>
          </div>
        </li>
      );
    });
  }

  componentWillMount() {
    socketClient.on("addToPlaylist", (roomToken, playlistItem) => {
      console.log(roomToken);
      console.log(playlistItem);
    });
    this.forceUpdate();
  }

  render() {
    return (
      <ListGroup>
        <li className="playlist-item">
          <input
            className="playlist-item-input"
            onChange={this.changeInput}
            value={this.state.playlistInput}
          />
          <div className="playlist-item-append">
            <Button
              className="playlist-item-button"
              onClick={this.appendPlaylistItem}
            >
              Add
            </Button>
          </div>
        </li>
        {this.listItems()}
      </ListGroup>
    );
  }
}

export default VideoPlaylist;
