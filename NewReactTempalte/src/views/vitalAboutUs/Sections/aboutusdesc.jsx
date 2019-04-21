/* eslint-disable react/prop-types */
import React from "react";
import classNames from "classnames";

function AboutUsDesc(props) {
  return (
    <div
      classes={props.classes.brownborder}
      style={{
        background: "rgba(166, 123, 63, 0.1)",
        border: "4px solid rgb(221, 200, 129)",
        padding: "10px 30px 30px"
      }}
    >
      <div
        className={classNames(
          props.classes.description,
          props.classes.textCenter
        )}
        style={{
          margin: "0"
        }}
      >
        <h3
          className={props.classes.nobortitle + " " + props.classes.textCenter}
          style={{
            color: "rgb(94, 71, 44)",
            margin: "10px 0 0",
            textAlign: "center"
          }}
        >
          About Vital Clinic
        </h3>
        <p
          className={props.classes.fontcontent}
          style={{
            color: "rgb(94, 71, 44)",
            fontSize: "17px",
            margin: "0 10px",
            fontFamily: "Lato, sans-serif",
            textAlign: "justify"
          }}
        >
          VITAL CLINIC is a specialty clinic devoted to state-of-the-art
          cosmetic and corrective surgery, totally under local anesthesia. We
          have pioneered the advent of office-surgery with safety, precision and
          best outcomes. Every surgery at VITAL CLINIC is performed totally
          under local anesthesia, with patient being awake and completely
          pain-free. Every surgery is practically bloodless. After surgery,
          patients go home very comfortably. There is quick recovery and minimal
          after-surgery discomfort.{" "}
        </p>
      </div>
    </div>
  );
}

export default AboutUsDesc;
