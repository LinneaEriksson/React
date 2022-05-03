import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Button from "./../Button";
import { createContext } from "react";

const Name = createContext();

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

  return zodiacs.map((zodiac, index) => (
    <div className="zodiacContainer" key={`zodiac-${index}`}>
      <img src={`/images/${zodiac}.jpg`} alt={`zodiac ${zodiac}`} />

      <Link className="link" to={`/zodiac/${zodiac}`}>
        <Button text="Read more" />
      </Link>
    </div>
  ));
};

export default Zodiacs;
