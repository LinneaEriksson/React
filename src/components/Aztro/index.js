import React, { Component, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Button from "./../Button";

let day = "today";
const changeDay = (dayToChange) => {
  day = dayToChange;
};

class Aztro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: {},
    };
  }

  componentDidMount() {
    const URL = `https://aztro.sameerkumar.website/?sign=cancer&day=${day}`;
    fetch(URL, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ json });
      });
  }

  render() {
    return (
      <div className="astroBox">
        <div className="back">
          <Link className="linkToBack" to="/">
            <Button text="Go back" bg="#5b5073" fontSize="14px" />
          </Link>
        </div>
        <div className="imageFrame">
          <img src={`/images/cancer.jpg`} alt={`zodiac cancer`} />
        </div>
        <div>
          <span className="astroHeadline">Current Date:</span>{" "}
          {this.state.json.current_date} <br />
          <span className="astroHeadline"> Compatibility: </span>
          {this.state.json.compatibility} <br />
          <span className="astroHeadline">Lucky Number: </span>
          {this.state.json.lucky_number} <br />
          <span className="astroHeadline">Lucky Time: </span>
          {this.state.json.lucky_time} <br />
          <span className="astroHeadline"> Color: </span>
          {this.state.json.color} <br />
          <span className="astroHeadline">Date Range: </span>
          {this.state.json.date_range} <br />
          <span className="astroHeadline"> Mood: </span>
          {this.state.json.mood} <br />
          <span className="astroHeadline"> Description:</span>{" "}
          {this.state.json.description} <br />
          <div className="buttonContainer">
            <Button
              onClick={() => changeDay("yesterday")}
              text="yesterday"
            ></Button>
            <Button onClick={() => changeDay("today")} text="today"></Button>
            <Button
              onClick={() => changeDay("tomorrow")}
              text="tomorrow"
            ></Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Aztro;
