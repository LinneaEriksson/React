import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const AztroHeadline = ({ text, color }) => {
  return (
    <span className="astroHeadline" style={{ color: color }}>
      {text}
    </span>
  );
};

AztroHeadline.propTypes = {
  color: PropTypes.string,
};

export default AztroHeadline;
