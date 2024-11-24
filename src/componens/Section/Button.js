import React from "react";
import "./Button.css"

const Button = ({ onClick }) => {
  return (
    <button className="buy-button" onClick={onClick}>
      Купить
    </button>
  );
};

export default Button;