import React, { useEffect, useState } from "react";
import "./Homepage.css";
import { ChevronDoubleDownIcon } from "@heroicons/react/20/solid";
import profile from "../../assets/profile.png";
import post from "../../assets/homepage_pic.png";
import FB from "../../assets/FB.png";
import IG from "../../assets/IG.png";
import THM from "../../assets/THM.png";
import Linkedin from "../../assets/Linkedin.png";
import Git from "../../assets/Git.png";
import { Link } from "react-router-dom";
import { ArrowLongRightIcon }  from '@heroicons/react/20/solid'

const Homepage = () => {

  const [activePage, setActivePage] = useState(false);

  const showPage = (name) =>{
    setActivePage(name);

  }

  const getStyleActivePage = (name) => ({
    background: activePage === name ? '#272727' : 'transparent',


  });

  const reloadPage = () =>{
    window.location.reload();
  }

  return (
    <div className="intropage">
      <div className="homepage-main">
        <div className="display-text">
          <h2 id="welcome-typing" className="welcome">
            Welcome to my portfolio.
          </h2>
          <h2 className="underline"> _</h2>
        </div>

        <div className="scroll-down">
          Scroll down to view profile
          <ChevronDoubleDownIcon className="scroll-down-icon" />
        </div>
      </div>

      <div className="introduct2me">
        <div className="information">
          <div className="intropage-description">
            Hello! My name is Ratchapon Paratago,a passionate and dedicated
            Computer Engineering student with a flair for coding and a
            relentless curiosity about the world of technology.Currently
            pursuing my degree in Computer Engineering, I am on a journey to
            transform my love for coding into impactful and innovative
            solutions.{" "}
          </div>
          <img src={post} className="intropage-profile" />
        </div>
        <div className="contact-bar">
          <a
            className="icon-item"
            href="https://www.facebook.com/nong.jame.98"
            target="_blank"
          >
            <img src={FB} className="contact-icon" />
            Facebook
          </a>
          <a
            className="icon-item"
            href="https://github.com/ratchapon-p"
            target="_blank"
          >
            <img src={Git} className="contact-icon" />
            GitHub
          </a>
          <a
            className="icon-item"
            href="https://tryhackme.com/p/ratchaponp"
            target="_blank"
          >
            <img src={THM} className="contact-icon" />
            Hack the box
          </a>
          <a
            className="icon-item"
            href="https://www.linkedin.com/in/ratchapon-paratago-60129025a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
          >
            <img src={Linkedin} className="contact-icon" />
            Linkedin
          </a>
        </div>
      </div>

      {/* <div className="next2page">
        <div className="profile-header">
          <h1 className="profile-name">Ratchapon Paratago</h1>
          <div className="more-profile">
            <div className="header-click">
              <div className="hover-tab">
                <h2 className="h2-header" onClick={() => showPage('Home')} style={getStyleActivePage('Home')}>Home</h2>
              </div>
            </div>
            <div className="header-click">
              <div className="hover-tab">
              <h2 className="h2-header" onClick={() => showPage('Port')} style={getStyleActivePage('Port')}>Portfolio</h2>
              </div>
            </div>
            <div className="header-click">
              <div className="hover-tab">
              <h2 className="h2-header" onClick={() => showPage('Event')} style={getStyleActivePage('Event')}>Work/Events</h2>
              </div>
            </div>
            <div className="header-click">
              <div className="hover-tab">
              <h2 className="h2-header" onClick={() => showPage('Certificate')} style={getStyleActivePage('Certificate')}>Certificated</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-data">
          {activePage === 'Home' && <Home /> }
          {activePage === 'Port' && <Portfolio /> }
          {activePage === 'Event' && <Workandevents /> }
          {activePage === 'Certificate' && <Certificate /> }
        </div>
      </div> */}

      <div className="link-to-another">
        <div className="question">What you want to see?</div>
        <div className="link-item">
          <Link className="fixed-text" onClick={reloadPage}><div className="link-text">Home</div></Link>
          <Link className="fixed-text" to='/portfolio'><div className="link-text">Resume</div></Link>
          <Link className="fixed-text" to='/workandevents'><div className="link-text">Work/Events</div></Link>
          <Link className="fixed-text" to='/certificate'><div className="link-text">Certificate</div></Link>
        </div>

      </div>



    </div>
  );
};

export default Homepage;
