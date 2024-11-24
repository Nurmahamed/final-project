import React from "react";
import Bookimg from "../images/image.png";
import "./Images.css";

const Images = () => {
  return (
    <div className="pdd-image">
      <img
        src={Bookimg}
        alt=""
      />
    </div>
  );
};

export default Images;