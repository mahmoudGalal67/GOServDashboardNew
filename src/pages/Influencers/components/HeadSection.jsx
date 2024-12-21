import React from "react";
import headImage from "./HeadImage.png";
import { Button } from "react-bootstrap";
import "./HeadSection.css";
const HeadSection = () => {
  return (
    <>
      <div className="head-container" style={{ position: "relative" }}>
        <img src={headImage} alt="" />
      </div>
    </>
  );
};

export default HeadSection;
