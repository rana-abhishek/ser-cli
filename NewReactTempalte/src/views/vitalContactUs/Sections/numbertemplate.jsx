/* eslint-disable react/prop-types */
import React from "react";

const Numbertemplate = props => {
  return (
    <div className={props.classes.connumb}>
      <img
        src={props.icon}
        className={props.classes.browncolor}
        style={{
          paddingRight: "20px",
          marginTop: "20px",
          height: props.mail ? "40px" : "50px",
          width: "70px"
        }}
      />
      <h3>
        <span
          className={props.classes.bluetitle + " " + props.classes.browncolor}
        >
          {props.descp}
        </span>
        <br />
        <span
          className={props.classes.browncolor + " " + props.classes.latofont}
          style={{ fontSize: "25px", fontWeight: "400" }}
        >
          {props.numb}
          <br />
          {props.numb2 ? props.numb2 : null}
        </span>
      </h3>
    </div>
  );
};

export default Numbertemplate;
