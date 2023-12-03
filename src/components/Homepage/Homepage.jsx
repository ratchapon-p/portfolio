import React, { useEffect, useState } from "react";
import "./Homepage.css";
import { ChevronDoubleDownIcon } from "@heroicons/react/20/solid";
import profile from "../../assets/profile.png";
import post from "../../assets/homepage_pic.png";

const Homepage = () => {
  const [useScroll, setUseScroll] = useState(false);

  const scrollPage = () => {};

  // useEffect(()=>{
  //   window.onscroll
  // })

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
        <img src={profile} className="intropage-profile" />
        <div className="intropage-description">Me?</div>
      </div>

      <div className="next2page">
        <img src={profile} />
        <div>Me?</div>
      </div>
    </div>

  );
};

export default Homepage;
