import React, { useState } from "react";
import "./App.scss";
import Container from "./pages/hompage/homepage";
import Header from "./components/header/header";
import bg from "./assets/images/bg.gif";
import linkedin from "./assets/images/linkedin.png";
import github from "./assets/images/github.png";
import resume from "./assets/pdf/Resume.pdf";

function App() {
  const [state, setState] = useState({ page: "Home" });

  return (
    <div className="App">
      <div class="sky-container">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
      </div>

      <div className="center">
        <div className="hero">
          <div className="blur">
            <img id="bg" src={bg} alt="hero background" />
          </div>
          <div className="hero-content">
            <h2>Ming Liang Dai</h2>
            <p>University of Waterloo - Computer Engineering</p>
            <p>Aspiring software developer</p>
            <div>
              <a className="social-btn" href="https://github.com/MingLiangDai/">
                <img src={github} alt="github" />
              </a>
              <a
                className="social-btn"
                href="https://www.linkedin.com/in/ming-liang-dai/"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
            </div>
            <div>
              <a className="contact-btn" href={resume} target="_blank">
                Resume
              </a>
              <a className="contact-btn" href="mailto: mldai@uwaterloo.ca">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
      <Container active={state.page}>
        <Header
          links={["Home", "Projects", "The Fun Stuff"]}
          handleClick={(active) => setState({ ...state, page: active })}
        ></Header>
      </Container>
    </div>
  );
}

export default App;
