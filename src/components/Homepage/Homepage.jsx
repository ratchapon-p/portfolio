import React, { useEffect, useState } from "react";
import "./Homepage.css";
import { ChevronDoubleDownIcon } from "@heroicons/react/20/solid";
import profile from "../../assets/profile.png";
import post from "../../assets/homepage_pic.png";
import FB from "../../assets/FB.png";
import IG from "../../assets/IG.png";
import THM from "../../assets/THM.png";
import Linkedin from "../../assets/Linkedin.png";
import { Link } from "react-router-dom";


const Homepage = () => {

  return (
    <div className="intropage">
      <div className="homepage-main">
        <div className="display-text">
          <h2 id="welcome-typing" className="welcome">
            Hello I'm James.
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
          <div className="intropage-description">Hello! My name is Ratchapon Paratago,a passionate and dedicated Computer Engineering student with a flair for coding and a relentless curiosity about the world of technology.Currently pursuing my degree in Computer Engineering, I am on a journey to transform my love for coding into impactful and innovative solutions. </div>
          <img src={post} className="intropage-profile" />
        </div>
        <div className="contact-bar">
          <a className="icon-item" href="https://www.facebook.com/nong.jame.98" target="_blank"><img src={FB} className="contact-icon"/>Facebook</a>
          <a className="icon-item" href="https://instagram.com/james_rcp?igshid=MTNiYzNiMzkwZA%3D%3D&utm_source=qr" target="_blank"><img src={IG} className="contact-icon"/>Instagram</a>
          <a className="icon-item" href="https://tryhackme.com/p/ratchaponp" target="_blank"><img src={THM} className="contact-icon"/>Hack the box</a>
          <a className="icon-item" href="https://www.linkedin.com/in/ratchapon-paratago-60129025a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank"><img src={Linkedin} className="contact-icon"/>Linkedin</a>
        </div>

      </div>

      <div className="next2page">
        <img src={profile} />
        <div>Me?</div>
      </div>
    </div>

  );
};

export default Homepage;
