import React from "react";
import Images from "../../images/image.png"
import Content from "./Content";
import "./pBookCard.css";

const PBookCard = () => {
  return (
    <div className="pdd-container">
      <div className="pdd-card">
        <img src={Images} alt="asd" />
        <Content /> 
      </div>
    </div>
  );
};

export default PBookCard;
