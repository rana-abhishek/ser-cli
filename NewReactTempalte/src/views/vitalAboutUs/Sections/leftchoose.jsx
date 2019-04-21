/* eslint-disable react/prop-types */
import React from "react";
import aboutPageStyle from "assets/jss/material-kit-pro-react/views/aboutPageStyle.jsx";
// import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

const Leftchoose = props => {
  return (
    <div>
      <h3 className={props.title}>Why Choose Vital Clinic?</h3>
      <p
        style={{
          fontWeight: "bold",
          fontSize: "17px",
          color: "rgb(94, 71, 44)"
        }}
      >
        VITAL CLINIC is a specialty clinic devoted to state-of-the-art cosmetic
        surgery, totally under local anaesthesia.{" "}
      </p>
      <p
        style={{ color: "rgb(94, 71, 44)" }}
        className={props.classes.fontcontent}
      >
        Advancement of science in the fields of human biology and technology
        have led to development of some very advanced non-surgical alternatives
        to some surgical treatments. Among such procedures are VITAL Skin-
        <i>tite</i>™ for face and neck lift, CRF-Reform and ROOTActiv for hair
        regeneration. VITAL CLINIC has always been a pioneer in adopting the
        latest, safest and best cosmetic surgeries and non-surgical cosmetic
        procedures.
      </p>
    </div>
  );
};

export default withStyles(aboutPageStyle)(Leftchoose);
