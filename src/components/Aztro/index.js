import React, { Component } from "react";
import Zodiacs from "../Zodiacs";
import "./style.css";
/* import { zodiac } from Zodiacs; */

class Aztro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: {},
    };
  }

  componentDidMount() {
    const URL = `https://aztro.sameerkumar.website/?sign=cancer&day=yesterday`;
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
        <div className="imageFrame">
          <img src={`/images/cancer.jpg`} alt={`zodiac cancer`} />
        </div>
        <div>
          {" "}
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
        </div>
      </div>
    );
  }
}

export default Aztro;
