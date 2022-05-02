import React, { Component } from "react";
import Button from "../Button";
import "./style.css";
import ZodiacInfo from "../../pages/ZodiacInfo";
import { Link } from "react-router-dom";

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

      <form>
        {/* <Button type="submit"> */}
        <Link className="link" to="zodiac">
          Read more
        </Link>
        {/* </Button> */}
      </form>
    </div>
  ));
};

export default Zodiacs;
