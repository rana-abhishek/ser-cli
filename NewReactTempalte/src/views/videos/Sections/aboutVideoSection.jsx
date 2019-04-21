/* eslint-disable react/prop-types */
import React from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import VideosStyle from "assets/jss/material-kit-pro-react/views/vitalpages/videosStyle.jsx";

function VideoSection(props) {
  return (
    <div
      className={classNames(props.classes.description)}
      style={{ margin: "0 auto" }}
    >
      <p
        style={{ margin: "0 30px", color: "rgb(94, 71, 44)" }}
        className={props.classes.fontcontent}
      >
        With Dr Ratti’s keen interest in the human body and precise hands he
        surely can do a miracle or two. But our brain seeks logic. Miracle to a
        human brain is like finding a sunken treasure in a manhole. It’s not
        assiduous enough when it comes to encompassing a miracle. The brain
        always demands a proof, so that it can be sure to invest its time
        diligently. Same is the case with Dr Ratti, he doesn’t believe in
        miracles too, he just transforms. See the pictures to believe yourself.
        Here, your brain will surely not trip.{" "}
      </p>
    </div>
  );
}

export default withStyles(VideosStyle)(VideoSection);
