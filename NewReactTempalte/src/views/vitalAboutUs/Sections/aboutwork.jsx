/* eslint-disable react/prop-types */
import React from "react";

const Aboutwork = props => {
  return (
    <div style={{ color: "rgb(94, 71, 44)" }}>
      <h4 className={props.classes.title}>About this work</h4>
      <p className={props.classes.description} style={{ margin: "0" }}>
        French luxury footwear and fashion. The footwear has incorporated shiny,
        red-lacquered soles that have become his signature.
      </p>
      <hr />
    </div>
  );
};

export default Aboutwork;
