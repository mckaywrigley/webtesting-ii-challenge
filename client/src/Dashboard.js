import React, { Component } from "react";
import Display from "./Display";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      balls: 0,
      strikes: 0
    };
  }

  handleClick = type => {
    switch (type) {
      case "ball":
        this.setState({
          balls: this.state.balls + 1
        });
        break;
      case "strike":
        this.setState({
          strikes: this.state.strikes + 1
        });
        break;
      case "foul":
        break;
      case "hit":
        break;
      default:
        return null;
    }
  };

  render() {
    return (
      <div>
        <Display balls={this.state.balls} strikes={this.state.strikes} />
        <button onClick={e => this.handleClick("ball")}>Ball</button>
        <button onClick={e => this.handleClick("strike")}>Strike</button>
        <button onClick={e => this.handleClick("foul")}>Foul</button>
        <button onClick={e => this.handleClick("hit")}>hit</button>
      </div>
    );
  }
}

export default Dashboard;
