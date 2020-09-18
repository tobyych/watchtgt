import React, { Component } from "react";

import { ListGroup, Button } from 'reactstrap';

import './VideoPlaylist.css';

export class VideoPlaylist extends Component {
  constructor() {
    super();
    this.state = {
      playlistInput: '',
      playlist: []
    };
  }

  appendPlaylistItem = () => {
    this.setState({ playlist: [...this.state.playlist, this.state.playlistInput], playlistInput: '' });
  };

  changeInput = (e) => {
    this.setState({ playlistInput: e.target.value });
  };

  changeVideo() {
    //TODO: change the VideoPlayer's state and let it re-render
  }

  listItems() {
    return this.state.playlist.map(item => {
      return (
        <li className="playlist-item" key={`${Math.floor(Math.random() * 10000) + 1}`} >
          <p className="playlist-item-text">{item}</p>
          <div className="playlist-item-append">
            <Button className="playlist-item-button" onClick={this.changeVideo}>Go</Button>
          </div>
        </li >
      );
    })
  }

  render() {
    return (
      <ListGroup>
        <li className="playlist-item">
          <input className="playlist-item-input" onChange={this.changeInput} value={this.state.playlistInput} />
          <div className="playlist-item-append">
            <Button className="playlist-item-button" onClick={this.appendPlaylistItem}>Add</Button>
          </div>
        </li>
        <li className="playlist-item">
          <p className="playlist-item-text">Hello</p>
          <div className="playlist-item-append">
            <Button className="playlist-item-button">Go</Button>
          </div>
        </li>
        {this.listItems()}
      </ListGroup>
    );
  }
}

export default VideoPlaylist;
