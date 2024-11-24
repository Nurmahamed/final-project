import React from "react";
import Bookimg from "../../images/image.png";
import "./Images.css";

const Images = () => {
  return (
    <div className="pdd-image">
      <img
        src={Bookimg}
        alt="LawsBookimg"
      />
    </div>
  );
};

export default Images;