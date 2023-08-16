import React from "react";
import { Link } from "react-router-dom";
import aboutImg from "../images/aboutImg.svg";

function AboutContent() {
  return (
    <div className="about-content">
      <div className="about-image-div">
        <img className="about-image" src={aboutImg} alt="Image" />
      </div>
      <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
      <p>
        Our mission is to enliven your road trip with the perfect travel van
        rental. Our vans are recertified before each trip to ensure your travel
        plans can go off without a hitch. <br />
        <br /> (Hitch costs extra 😉) Our team is full of vanlife enthusiasts
        who know firsthand the magic of touring the world on 4 wheels.
      </p>
      <div className="about-distination">
        <h4>Your destination is waiting. Your van is ready.</h4>
        <Link to="/vans" className="btn">
          Explore our vans
        </Link>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="about">
      <AboutContent />
    </div>
  );
}
