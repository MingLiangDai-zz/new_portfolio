import React, { Component } from "react";
import "./header.scss";

export class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          {this.props.links.map((link) => (
            <div
              className="btn"
              key={link}
              onClick={(e) => this.props.handleClick(e.target.textContent)}
            >
              {link}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Header;
