import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Button from "./../Button";

const Zodiacs = () => {
  const zodiacs = [
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
    "capricorn",
    "aquarius",
    "pisces",
  ];

  return zodiacs.map((zodiac) => (
    <div className="zodiacContainer">
      <img src={`/images/${zodiac}.jpg`} alt={`zodiac ${zodiac}`} />

      <Link className="link" to="zodiac">
        <Button buttonText="Read more" />
      </Link>

    </div>
  ));
};

export default Zodiacs;
