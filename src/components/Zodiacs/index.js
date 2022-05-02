import React, { Component } from "react";
import Button from "../Button";
import "./style.css";

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
      <img src={`/images/${zodiac}.jpg`} />

      <form>
        <Button
          type="submit"
          /* onClick={() => navigate("/ZodiacInfo")} */
          text="Read more"
        >
          <a href="/ZodiacInfo"></a>
        </Button>
      </form>
    </div>
  ));
};

export default Zodiacs;
