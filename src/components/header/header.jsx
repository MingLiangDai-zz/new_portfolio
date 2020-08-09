import React, { Component } from "react";
import "./header.scss";

export class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="btn" onClick={(e) => this.props.handleClick("Home")}>
            Home
          </div>
          <div
            className="btn"
            onClick={(e) => this.props.handleClick("Projects")}
          >
            Projects
          </div>
          <div
            className="btn"
            onClick={(e) => this.props.handleClick("The Fun Stuff")}
          >
            The Fun Stuff
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
