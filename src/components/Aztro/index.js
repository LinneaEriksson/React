import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Button from "./../Button";

const Aztro = (props) => {
  const [day, setDay] = useState("today");
  const [json, setJson] = useState({});

  useEffect(() => {
    const URL = `https://aztro.sameerkumar.website/?sign=${props.name}&day=${day}`;
    fetch(URL, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        const date = json.current_date;
        setJson(json);
        console.log(date);
      });
  }, [day]);

  return (
    <div className="astroBox">
      <div className="back">
        <Link className="linkToBack" to="/">
          <Button text="Go back" bg="#5b5073" fontSize="14px" />
        </Link>
      </div>
      <div className="imageFrame">
        <img src={`/images/${props.name}.jpg`} alt={`zodiac ${props.name}`} />
      </div>
      <div>
        <span className="astroHeadline">Current Date:</span> {json.current_date}{" "}
        <br />
        <span className="astroHeadline"> Compatibility: </span>
        {json.compatibility} <br />
        <span className="astroHeadline">Lucky Number: </span>
        {json.lucky_number} <br />
        <span className="astroHeadline">Lucky Time: </span>
        {json.lucky_time} <br />
        <span className="astroHeadline"> Color: </span>
        {json.color} <br />
        <span className="astroHeadline">Date Range: </span>
        {json.date_range} <br />
        <span className="astroHeadline"> Mood: </span>
        {json.mood} <br />
        <span className="astroHeadline"> Description:</span> {json.description}{" "}
        <br />
        <div className="buttonContainer">
          <Button onClick={() => setDay("yesterday")} text="yesterday"></Button>
          <Button onClick={() => setDay("today")} text="today"></Button>
          <Button onClick={() => setDay("tomorrow")} text="tomorrow"></Button>
        </div>
      </div>
    </div>
  );
};

export default Aztro;
