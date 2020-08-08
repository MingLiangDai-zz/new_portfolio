import React, { Component } from "react";
import "./homepage.scss";
import Card from "../../components/card/card";

import lol from "../../assets/images/lol.png";
import pixel from "../../assets/images/pixel.png";
import ecom from "../../assets/images/ecom.jpg";
import poly from "../../assets/images/poly.png";
import lemon from "../../assets/images/lemon.png";
import monster from "../../assets/images/monster.png";

export class Container extends Component {
  render() {
    let context = undefined;
    if (this.props.active === "Home") {
      context = <Home />;
    } else if (this.props.active === "Projects") {
      context = <Projects />;
    } else if (this.props.active === "The Fun Stuff") {
      context = <Fun />;
    }
    return (
      <div className="center">
        <div className="wrapper">
          <div className="wrapper-header">{this.props.children}</div>
          <div className="wrapper-body">{context}</div>
        </div>
      </div>
    );
  }
}

const Home = () => {
  return (
    <div>
      <div className="section">
        <h3 className="section-title">Education</h3>
        <Card title="University of Waterloo">
          <h4 style={{ margin: "0 0 0.75rem 0" }}>September 2019 - Present</h4>
          My name is Ming Liang Dai and I am studying computer engineering at
          the University of Waterloo. I am currently in 2nd year and I hope to
          pursue a career in software development.
        </Card>
      </div>
      <div className="section">
        <h3 className="section-title">Experience</h3>
        <div className="card-container">
          <Card title="Front-end Developer at MEGAComfort">
            <h4 style={{ margin: "0 0 0.75rem 0" }}>June 2020 - Present</h4>
          </Card>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <div className="section">
        <h3 className="section-title">Projects</h3>
        <div className="card-container">
          <Card
            title="Pixel Art Animator"
            imgUrl={pixel}
            btnUrl={[
              "https://github.com/MingLiangDai/Pixel-Art-Animator",
              "https://mingliangdai.github.io/Pixel-Art-Animator/",
            ]}
          >
            An image processing app that converts an image into a pixel art and
            displays each pixel through amazing animations.
          </Card>
          <Card
            title="Guess the League of Legends Champion"
            imgUrl={lol}
            btnUrl={[
              "https://github.com/MingLiangDai/GuessTheLeagueChampion",
              "https://mingliangdai.github.io/GuessTheLeagueChampion/",
            ]}
          >
            Made with the Riot API, this app provides some short entertainment
            for League of Legends players.
          </Card>
          <Card
            title="E-commerce Clone"
            imgUrl={ecom}
            btnUrl={[
              "https://github.com/MingLiangDai/Ecommerce-Clone",
              "https://mingliangdai.github.io/Ecommerce-Clone/",
            ]}
          >
            A webpage made to immitate a ecommerce website.
          </Card>
          <Card
            title="Polyverse"
            imgUrl={poly}
            btnUrl={[
              "https://github.com/MingLiangDai/Polyverse",
              "https://mingliangdai.github.io/Polyverse/",
            ]}
          >
            A webpage about an RPG game concept. Beautiful landing page and
            parallax scroll effect.
          </Card>
          <Card
            title="Lemonade Stand"
            imgUrl={lemon}
            btnUrl={[
              "https://github.com/MingLiangDai/the-lemonade-stand",
              "https://lemonade-stand-demo.herokuapp.com/",
            ]}
          >
            A transaction tracking web app for a lemonade stand, also a coding
            challenge for a React Frontend Developer position at one of the
            companies I interned at. Psst...I got the job!
          </Card>
          <Card
            title="Monster Rolodex"
            imgUrl={monster}
            btnUrl={[
              "https://github.com/MingLiangDai/monsters-rolodex",
              "https://mingliangdai.github.io/monsters-rolodex/",
            ]}
          >
            A create-react-app made by following a Udemy React course. My first
            step into the React library.
          </Card>
        </div>
      </div>
    </div>
  );
};

const Fun = () => {
  return <div> Coming Soon</div>;
};

export default Container;
