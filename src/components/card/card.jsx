import React, { Component } from "react";
import "./card.scss";

export class Card extends Component {
  render() {
    return (
      <div className="card">
        <h3 className="card-title">{this.props.title}</h3>
        <img
          className="card-img"
          src={this.props.imgUrl}
          alt={this.props.imageUrl}
        />
        <div className="card-body">
          {this.props.children}

          {this.props.btnUrl && (
            <div className="card-btn-container">
              <a className="card-btn" href={this.props.btnUrl[0]}>
                Source Code
              </a>
              <a className="card-btn-inverted" href={this.props.btnUrl[1]}>
                Demo
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Card;
