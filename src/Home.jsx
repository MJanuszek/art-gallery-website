// import { useState } from "react";
import "./styles/Home.scss";
import Introduction from "./Introduction";

function Home() {
  return (
    <div className="main-page">
      <div className="header">
        <h1 className="header-title">Welcome to our gallery</h1>
      </div>
      <Introduction />
      <div className="current-events">events</div>
      <div className="footer">
        Copyright Monika Januszek <br />
        Visit my Github: https://github.com/MJanuszek{" "}
      </div>
    </div>
  );
}

export default Home;
