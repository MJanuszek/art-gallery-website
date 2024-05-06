// import { useState } from "react";
import "./styles/Home.scss";
import Introduction from "./Introduction";
import Events from "./Events";
import Education from "./Education";

function Home() {
  return (
    <div className="main-page">
      <div className="header">
        <h1 className="header-title">Welcome to our gallery</h1>
      </div>
      <Introduction />
      <Events />
      <Education />
      <div className="footer">
        <div className="footer-info">Copyright Monika Januszek</div>
        <div className="footer-info">Visit my Github:</div>
        <a className="footer-info" href="https://github.com/MJanuszek">
          https://github.com/MJanuszek
        </a>
      </div>
    </div>
  );
}

export default Home;
