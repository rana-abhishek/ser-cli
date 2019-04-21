/* eslint-disable react/prop-types */
import React from "react";
import { Parallax } from "react-parallax";
import SectionInterested from "./SectionInterested.jsx";

import ParallaxBG from "assets/img/common/Images/ParallaxBG.jpg";

const ConatinerFile = props => {
  return (
    <Parallax bgImage={ParallaxBG} bgImageAlt="the cat" strength={1000}>
      <div className={props.classes.container}>
        <SectionInterested classes={props.classes} />
      </div>
    </Parallax>
  );
};

export default ConatinerFile;
