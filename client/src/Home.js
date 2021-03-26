import React, { Component } from "react";
import socketClient from "./apis/socketClient";

import { InputGroup, Input, InputGroupAddon } from "reactstrap";

import { Link } from "react-router-dom";

import "./Home.css";

class Home extends Component {
  constructor() {
    super()
    this.state = {
      roomToken: "",
      randomToken: "",
    };
  }

  createRoom = () => {
    var randomToken = '';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < 5; i++) {
      randomToken += letters.charAt(Math.floor(Math.random() * letters.length))
    }
    sessionStorage.setItem("roomToken", randomToken);
    socketClient.emit("joinRoom", randomToken);
  };

  onChange = (e) => {
    this.setState({ roomToken: e.target.value });
  };

  setRoomToken = () => {
    sessionStorage.setItem("roomToken", this.state.roomToken);
    socketClient.emit("joinRoom", this.state.roomToken);
  };

  render() {
    return (
      <div className="home-container">
        <Link
          type="button"
          className="btn btn-secondary"
          onClick={this.createRoom}
          to={{ pathname: "/room" }}
        >
          Create Room
        </Link>
        <InputGroup className="input-grp">
          <Input
            placeholder="Enter a room token"
            value={this.state.roomToken}
            onChange={this.onChange}
          />
          <InputGroupAddon addonType="append">
            <Link
              onClick={this.setRoomToken}
              type="button"
              className="btn btn-primary"
              to={{
                pathname: "/room"
              }}
            >
              Go to room
            </Link>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}

export default Home;
