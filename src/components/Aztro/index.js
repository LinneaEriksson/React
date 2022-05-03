import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Button from "./../Button";
import AztroHeadline from "../AztroHeadline";

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
        <AztroHeadline text="Current Date: " color={`var(--${props.name})`} />
        {json.current_date} <br />
        <AztroHeadline text="Compability: " color={`var(--${props.name})`} />
        {json.compatibility} <br />
        <AztroHeadline text="Lucky number: " color={`var(--${props.name})`} />
        {json.lucky_number} <br />
        <AztroHeadline text="Lucky time: " color={`var(--${props.name})`} />
        {json.lucky_time} <br />
        <AztroHeadline text="Color: " color={`var(--${props.name})`} />
        {json.color} <br />
        <AztroHeadline text="Date range: " color={`var(--${props.name})`} />
        {json.date_range} <br />
        <AztroHeadline text="Mood: " color={`var(--${props.name})`} />
        {json.mood} <br />
        <AztroHeadline
          text="Description: "
          color={`var(--${props.name})`}
        />{" "}
        {json.description} <br />
        <div className="buttonContainer">
          <Button
            onClick={() => setDay("yesterday")}
            text="Yesterday"
            bg={`var(--${props.name})`}
          ></Button>
          <Button
            onClick={() => setDay("today")}
            text="Today"
            bg={`var(--${props.name})`}
          ></Button>
          <Button
            onClick={() => setDay("tomorrow")}
            text="Tomorrow"
            bg={`var(--${props.name})`}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Aztro;
