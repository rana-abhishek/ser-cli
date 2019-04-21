/* eslint-disable react/prop-types */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import { Parallax } from "react-parallax";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Twohalfs from "assets/jss/material-kit-pro-react/views/landingPageSections/TwohalfSection.jsx";
import BG from "assets/img/common/Images/ParallaxBG2.jpg";

class MeetusSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.marchange}>
        <Parallax bgImage={BG} bgImageAlt="the cat" strength={1200}>
          <div className={classes.section + " " + classes.marTop}>
            <GridContainer
              style={{ width: "100%", marginLeft: "0" }}
              justify="center"
            >
              <GridItem cs={12} sm={12} md={6}>
                <div className={classes.sechalf}>
                  {/* <h1 className={classes.title}>Work with us</h1> */}
                  <h3
                    style={{
                      fontFamily: "Oswald, sans-serif",
                      fontSize: "24px",
                      color: "rgb(94, 71, 44)"
                    }}
                  >
                    CALL CLINIC NOW
                  </h3>
                  <h1
                    style={{
                      fontFamily: "Oswald, sans-serif",
                      color: "rgb(94, 71, 44)"
                    }}
                  >
                    <a
                      href="tel:+91-11-26252333"
                      className={classes.officelink}
                    >
                      +91-11-26252333
                      <br />
                    </a>
                  </h1>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
      </div>
    );
  }
}

export default withStyles(Twohalfs)(MeetusSection);
