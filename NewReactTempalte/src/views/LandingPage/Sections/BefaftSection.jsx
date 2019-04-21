/* eslint-disable react/prop-types */
import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
// core components
import Card from "components/Card/Card.jsx";

import BeforeAfterSlider from "react-before-after-slider";

import Button from "components/CustomButtons/Button.jsx";
import styles from "./styles.module.css";

import pic2 from "assets/img/common/Images/ParallaxDarkBG.jpg";
import images from "./images";
import imagesbef from "./imagesbef";
import imagesaft from "./imagesaft";
import Twohalfs from "assets/jss/material-kit-pro-react/views/landingPageSections/TwohalfSection.jsx";
import { Parallax } from "react-parallax";

class BefaftSection extends React.Component {
  state = {
    index: 0
  };

  render() {
    const { index } = this.state;

    const current = images[index];
    const befcurrent = imagesbef[index];
    const aftcurrent = imagesaft[index];

    const imageProps = {
      showPreview: true,
      loader: (
        <CircularProgress
          className={styles.loading}
          color="#fff"
          size={24}
          thickness={2.5}
        />
      )
    };

    const { classes } = this.props;
    return (
      <div>
        <div className={classes.curvepoint} />
        <Parallax
          bgImage={pic2}
          bgImageAlt="the cat"
          strength={1000}
          style={{ zIndex: "200" }}
        >
          <div style={{ marginTop: "-30px" }}>
            <Card
              className={classes.cardcont}
              style={{
                background: "transparent",
                width: "100%",
                boxShadow: "0 0 0 0"
              }}
            >
              <div className={classes.cardwrapper}>
                {/* <img  src={pic2} alt="Card-img" /> */}
                <div className={classes.imgCard} style={{ height: "650px" }} />
                <div className={classes.imgCardOverlay}>
                  <h4
                    className={classes.cardTitle}
                    style={{
                      letterSpacing: "0px",
                      fontWeight: "100",
                      fontSize: "28px",
                      fontFamily: "Oswald, sans-serif",
                      color: "#ddc881"
                    }}
                  >
                    BEFORE AFTER GALLERY
                  </h4>
                  <p
                    style={{
                      fontWeight: "200",
                      fontSize: "20px",
                      lineHeight: "1.5",
                      fontFamily: "Lato, sans-serif",
                      color: "#ddc881"
                    }}
                  >
                    Slide left and right to view <br />
                    before and after pictures.
                  </p>
                  <p
                    style={{
                      fontWeight: "700",
                      fontSize: "25px",
                      lineHeight: "25px",
                      fontFamily: "Lato, sans-serif",
                      color: "#ddc881"
                    }}
                  >
                    {current.caption}
                  </p>
                </div>
              </div>
            </Card>
            <div className={classes.befaft}>
              <div className={classes.thumb}>
                <BeforeAfterSlider
                  before={befcurrent.before.src}
                  after={befcurrent.after.src}
                  beforeProps={imageProps}
                  afterProps={imageProps}
                  width={192}
                  height={242}
                />
              </div>
              <div className={classes.mainslidercontainer}>
                <div className={classes.babut}>
                  <Button
                    className={classes.halfbut}
                    color="primary"
                    round
                    onClick={this._onSelectPrev}
                    style={{ margin: "50px 0" }}
                  >
                    Prev
                  </Button>
                </div>
                <div>
                  <div
                    style={{
                      width: "480px",
                      height: "550px",
                      border: "4px solid rgb(221, 200, 129)",
                      margin: "25px 0"
                    }}
                  >
                    <BeforeAfterSlider
                      before={current.before.src}
                      after={current.after.src}
                      beforeProps={imageProps}
                      afterProps={imageProps}
                      width={472}
                      height={542}
                    />
                  </div>
                </div>
                <div className={classes.babut}>
                  <Button
                    className={classes.halfbut}
                    color="primary"
                    round
                    onClick={this._onSelectNext}
                    style={{ margin: "50px 0" }}
                  >
                    Next
                  </Button>
                </div>
              </div>
              <div className={classes.thumb}>
                <BeforeAfterSlider
                  before={aftcurrent.before.src}
                  after={aftcurrent.after.src}
                  beforeProps={imageProps}
                  afterProps={imageProps}
                  width={192}
                  height={242}
                />
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
  _onSelectPrev = () => {
    let index = this.state.index - 1;
    if (index < 0) index = images.length - 1;

    this.setState({ index });
  };

  _onSelectNext = () => {
    let index = this.state.index + 1;
    if (index >= images.length) index = 0;

    this.setState({ index });
  };
}

export default withStyles(Twohalfs)(BefaftSection);
