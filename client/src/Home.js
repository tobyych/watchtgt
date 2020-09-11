import React, { Component } from 'react'

import { Button, InputGroup, Input, InputGroupAddon } from 'reactstrap';

import './Home.css';

export class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Button className="button">Create a room</Button>
        <InputGroup className="input-grp">
          <Input />
          <InputGroupAddon addonType="append">
            <Button color="secondary">Go to room</Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    )
  }
}

export default Home;
