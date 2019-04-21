/* eslint-disable react/prop-types */
import React from "react";
import MainContent from "./mainContPage";
import LeftSection from "./leftSection";
import RightSection from "./rightSection";
import GridContainer from "components/Grid/GridContainer.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import { Parallax } from "react-parallax";

import ParallaxBG from "assets/img/common/Images/ParallaxBG.jpg";

const ConatinerFile = props => {
  return (
    <Parallax bgImage={ParallaxBG} bgImageAlt="the cat" strength={2000}>
      <div style={{ margin: "0" }}>
        <div className={props.classes.container}>
          <MainContent classes={props.classes} />
          <div
            className={props.classes.profileTabs}
            style={{ marginTop: "10px" }}
          >
            <GridContainer style={{ marginTop: "25px" }}>
              <LeftSection classes={props.classes} />
              <RightSection classes={props.classes} />
            </GridContainer>
          </div>
          <Clearfix />
        </div>
        {/* <Fourtiles/> */}
      </div>
    </Parallax>
  );
};

export default ConatinerFile;
