/* eslint-disable react/prop-types */
import React from "react";
import { Parallax } from "react-parallax";
import GalleryConatiner from "./gallery";

import ParallaxBG from "assets/img/common/Images/ParallaxBG.jpg";

const ConatinerFile = props => {
  return (
    <Parallax bgImage={ParallaxBG} bgImageAlt="the cat" strength={500}>
      <div className={props.classes.container}>
        <GalleryConatiner classes={props.classes} />
      </div>
    </Parallax>
  );
};

export default ConatinerFile;
