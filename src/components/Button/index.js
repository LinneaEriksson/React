import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Button = ({ onClick, text, bg, color, fontSize, width }) => {
  return (
    <button
      className="btn"
      onClick={onClick}
      style={{ backgroundColor: bg, color: color, fontSize: fontSize, width }}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  bg: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  width: PropTypes.string,
};

export default Button;
