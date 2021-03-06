/* eslint-disable react/prop-types */
import React from "react";
import MainContent from "./mainContPage";
import LeftSection from "./leftSection";
import RightSection from "./rightSection";
import GridContainer from "components/Grid/GridContainer.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import { Parallax } from "react-parallax";

import bg4 from "assets/img/Parallax4.jpg";

const ConatinerFile = props => {
  return (
    <Parallax bgImage={bg4} bgImageAlt="the cat" strength={2000}>
      <div style={{ margin: "0" }}>
        <div className={props.classes.container}>
          <MainContent classes={props.classes} data={props.data.main} />
          <div
            className={props.classes.profileTabs}
            style={{ margin: "20px 0px" }}
          >
            <GridContainer style={{ margin: "auto 0px" }}>
              <LeftSection classes={props.classes} data={props.data.left} />
              <RightSection classes={props.classes} data={props.data.right} />
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
