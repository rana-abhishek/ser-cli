/* eslint-disable react/prop-types */
import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
// import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import { Parallax } from "react-parallax";
import ModalImage from "react-modal-image";

import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.jsx";
import docstyle from "assets/jss/material-kit-pro-react/views/landingPageSections/docSection.jsx";
import BG from "assets/img/common/Images/ParallaxDarkBG.jpg";

import image1 from "assets/img/HomePageImages/Conferences/Image1.jpg";
import image2 from "assets/img/HomePageImages/Conferences/Image2.jpg";
import image3 from "assets/img/HomePageImages/Conferences/Image3.jpg";

import { cardTitle } from "assets/jss/material-kit-pro-react.jsx";
// import YouTube from "react-youtube";
// import { Link } from "react-router-dom";

// const opts = {
//   height: "242px",
//   width: "100%",
//   playerVars: {
//     // https://developers.google.com/youtube/player_parameters
//     autoplay: 0
//   }
// };

class NewsSection extends React.Component {
  styles = {
    ...imagesStyles,
    cardTitle
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.curvepointtop} />
        <div>
          {/* style={{background : `URL('${docbg}')`}} */}
          <Parallax bgImage={BG} bgImageAlt="the cat" strength={1000}>
            <GridContainer justify="center" style={{ marginRight: "0" }}>
              <GridItem
                xs={12}
                sm={12}
                md={8}
                style={{ paddingRight: "0", textAlign: "center" }}
              >
                <div
                  className={classes.title}
                  style={{
                    color: "#ddc881",
                    textAlign: "center",
                    fontSize: "1.7rem",
                    fontFamily: "Oswald, sans-serif"
                  }}
                >
                  In the Conferences
                </div>
                <p
                  style={{
                    margin: "auto",
                    color: "rgb(221, 200, 129)",
                    letterSpacing: "1.5px",
                    textAlign: "center"
                  }}
                >
                  Dr. Ratti is a prolific author and opinion leader and one of
                  the most featured authors in the cosmetic surgery literature.
                  His opinions, techniques, and teachings are commonly featured
                  in national and international publications.
                </p>
                {/* <Link to="/videospage">
                  <Button className={classes.halfbut} round>
                    View all In Video Section
                  </Button>
                </Link> */}
              </GridItem>
              <GridItem
                xs={12}
                sm={12}
                md={8}
                style={{ paddingRight: "0", marginTop: "20px" }}
              >
                <div className={classes.docpics}>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                      {/* <img
                        style={{height: "250px", width: "auto"}}
                        className={classes.imgCardTop}
                        src={pic1}
                        alt="Card-img-cap"
                        /> */}
                      <div
                        style={{
                          height: "auto",
                          width: "100%",
                          backgroundSize: "cover",
                          border: "4px solid rgb(221, 200, 129)",
                          minWidth: "250px",
                          "@media (max-width:800px)": {
                            width: "auto"
                          }
                        }}
                      >
                        {/* <img
                          src={image1}
                          alt="World Congress on Liposuction Surgery 2007, Dubai"
                          style={{ width: "100%", height: "100%" }}
                        /> */}
                        <ModalImage
                          className={this.props.classes.brownborder}
                          small={image1}
                          large={image1}
                          hideZoom={true}
                          style={{ width: "auto", height: "250px" }}
                          alt="World Congress on Liposuction Surgery 2007, Dubai"
                        />
                      </div>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      {/* <img
                        style={{height: "250px", width: "auto"}}
                        className={classes.imgCardTop}
                        src={pic1}
                        alt="Card-img-cap"
                        /> */}
                      <div
                        style={{
                          height: "auto",
                          width: "100%",
                          backgroundSize: "cover",
                          border: "4px solid rgb(221, 200, 129)",
                          minWidth: "250px",
                          "@media (max-width:800px)": {
                            width: "auto"
                          }
                        }}
                      >
                        {/* <YouTube opts={opts} onReady={this._onReady} /> */}
                        {/* <img
                          src={image2}
                          alt="Dr JB Ratti with Jeffrey Klein, inventor of Tumescent Technique of Liposuction"
                          style={{ width: "100%", height: "100%" }}
                        /> */}
                        <ModalImage
                          className={this.props.classes.brownborder}
                          small={image2}
                          large={image2}
                          hideZoom={true}
                          style={{ width: "auto", height: "250px" }}
                          alt="Dr JB Ratti with Jeffrey Klein, inventor of Tumescent Technique of Liposuction"
                        />
                      </div>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      {/* <img
                        style={{height: "250px", width: "auto"}}
                        className={classes.imgCardTop}
                        src={pic1}
                        alt="Card-img-cap"
                        /> */}
                      <div
                        style={{
                          height: "auto",
                          width: "100%",
                          backgroundSize: "cover",
                          border: "4px solid rgb(221, 200, 129)",
                          minWidth: "250px",
                          overflow: "hidden",
                          "@media (max-width:800px)": {
                            width: "auto"
                          }
                        }}
                      >
                        {/* <YouTube opts={opts} onReady={this._onReady} /> */}
                        {/* <img
                          src={image3}
                          alt="30TH ANNUAL MEET OF AMERICAN ACADEMY OF COSMETIC SURGERY 2014 AT FORT LAUDERDALE FLORIDA USA"
                          style={{ width: "100%", height: "100%" }}
                        /> */}
                        <ModalImage
                          className={this.props.classes.brownborder}
                          small={image3}
                          large={image3}
                          hideZoom={true}
                          style={{ width: "auto", height: "250px" }}
                          alt="30TH ANNUAL MEET OF AMERICAN ACADEMY OF COSMETIC SURGERY 2014 AT FORT LAUDERDALE FLORIDA USA"
                        />
                      </div>
                    </GridItem>
                  </GridContainer>
                </div>
              </GridItem>
            </GridContainer>
          </Parallax>
        </div>
        <div className={classes.curvepointbot} />
      </div>
    );
  }
}

export default withStyles(docstyle)(NewsSection);
