import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Button = ({ onClick, text }) => {
  return (
    <button className="btn" onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  bg: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
};

export default Button;
