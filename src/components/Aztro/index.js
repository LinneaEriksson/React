import React, { Component } from "react";
import "./style.css";

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

  zodiacArrays() {
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
        <img src="/public/images/leo.jpg" />
        {zodiac}
      </div>
    ));
  }

  render() {
    return (
      <div className="zodiacWrapper">
        {this.zodiacArrays()}
        <div className="astroBox">
          Current Date: {this.state.json.current_date} <br />
          Compatibility: {this.state.json.compatibility} <br />
          Lucky Number: {this.state.json.lucky_number} <br />
          Lucky Time: {this.state.json.lucky_time} <br />
          Color: {this.state.json.color} <br />
          Date Range: {this.state.json.date_range} <br />
          Mood: {this.state.json.mood} <br />
          Description: {this.state.json.description} <br />
        </div>
      </div>
    );
  }
}

export default Aztro;
