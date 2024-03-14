import React from "react";
import "./Hero.css";
import handImg from "../Assets/hand_icon.png";
import arrowImg from "../Assets/arrow.png";
import heroimg from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Welcome to ... </h2>
        <div>
          <div className="hand-icon">
            <p>New</p>
            <img src={handImg} alt="" />
          </div>
          <p>collection</p>
          <p>for everyone</p>
        </div>

        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrowImg} alt="" />
        </div>
          </div>
          <div className="hero-right">
              <img src={heroimg} alt="" />
          </div>
    </div>
  );
};

export default Hero;
