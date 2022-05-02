import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Title = ({ title }) => {
  return <h1 className="title">{title}</h1>;
};

Title.propTypes = {
  titleText: PropTypes.string,
};

export default Title;
