import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import Logo from "@images/logo.svg";
import ThreeDots from "@images/home-threedots.svg";

export const Home = () => {
  return (
    <React.Fragment>
      <div className="home">
        <div className="container">
          <div className="home__inner">
            {/* SIDEBAR */}
            <div className="home__sidebar">
              <Link to={"/"}>
                <img src={Logo} alt="logo" />
              </Link>
              {/* ICON LINKS */}
              <ul className="home__lists">
                <li className="home__items">
                  <Link className="home__links" to={"/"}>
                    Home
                  </Link>
                </li>
                <li className="home__items">
                  <Link className="home__links" to={"/"}>
                    Help
                  </Link>
                </li>
              </ul>
              <div className="line"></div>
              <div className="home__newChat">
                <p className="home__newChattext">Chat list</p>
                <button className="home__newChatButton">
                  <span>New chat</span>
                </button>
              </div>
              <div className="home__bottomSection">
                <div className="home__bottomSectionWrapper">
                  <div className="home__bottomUserInfo">
                    <div className="home__bottomSectionCircle">S</div>
                    <span className="home__bottomSectionUserName">
                      S1mple -_-
                    </span>
                  </div>
                  <img
                    className="threeDots"
                    src={ThreeDots}
                    width={20}
                    height={2}
                    alt="home three dots"
                  />
                </div>
              </div>
            </div>
            {/* MIDDLE CHAT SECTION */}
            <div className="home__middleChat">div</div>
            {/* DOCUMENTS */}
            <div className="home__documents">div</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
