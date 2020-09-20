import React, { Component } from "react";

import { Button, InputGroup, Input, InputGroupAddon } from "reactstrap";

import { Link } from "react-router-dom";

import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      roomToken: "",
      randomToken: ""
    };
  }

  createRoom = () => {
    const randomNumber = Math.floor(Math.random() * 90000) + 10000;
    this.setState({ randomToken: `${randomNumber}` });
  }

  onChange = (e) => {
    this.setState({ roomToken: e.target.value });
  };

  render() {
    return (
      <div className="home-container">
        <Button onClick={this.createRoom} className="button">
          Create a room
        </Button>
        <p>{this.state.randomToken}</p>
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
                pathname: "/room",
                roomToken: this.state.roomToken,
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
