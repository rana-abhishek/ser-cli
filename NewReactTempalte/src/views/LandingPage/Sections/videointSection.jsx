/* eslint-disable react/prop-types */
import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import { Parallax } from "react-parallax";
import BG from "assets/img/common/Images/ParallaxBG2.jpg";

import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.jsx";
import docstyle from "assets/jss/material-kit-pro-react/views/landingPageSections/docSection.jsx";

import { cardTitle } from "assets/jss/material-kit-pro-react.jsx";
import YouTube from "react-youtube";

const opts = {
  height: "242px",
  width: "100%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0
  }
};

class VidIntSection extends React.Component {
  styles = {
    ...imagesStyles,
    cardTitle
  };
  render() {
    const { classes } = this.props;
    return (
      <Parallax bgImage={BG} bgImageAlt="the cat" strength={1000}>
        <div style={{ paddingTop: "40px", paddingBottom: "30px" }}>
          {/* style={{background : `URL('${docbg}')`}} */}
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
                  color: "rgb(94, 71, 44)",
                  textAlign: "center",
                  fontSize: "1.7rem",
                  fontFamily: "Oswald, sans-serif",
                  paddingBottom: "20px",
                  fontWeight: "400"
                }}
              >
                Let Me Explain
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  color: "rgb(94, 71, 44)"
                }}
              >
                <div
                  style={{
                    border: "1px solid rgb(166, 123, 63)",
                    width: "5%",
                    textAlign: "center"
                  }}
                />
              </div>
            </GridItem>
            <GridItem
              xs={12}
              sm={12}
              md={8}
              style={{ paddingRight: "0", marginTop: "20px" }}
            >
              <div className={classes.docpics}>
                <hr className={classes.ovalbot} />
                <GridContainer justify="center" style={{ margin: "10px 0" }}>
                  <GridItem xs={12} sm={12} md={4}>
                    {/* <img
                        style={{height: "250px", width: "auto"}}
                        className={classes.imgCardTop}
                        src={pic1}
                        alt="Card-img-cap"
                        /> */}
                    <div
                      style={{
                        height: "250px",
                        width: "auto",
                        backgroundSize: "cover",
                        border: "4px solid rgb(221, 200, 129)",
                        minWidth: "250px",
                        "@media (max-width:800px)": {
                          width: "auto"
                        }
                      }}
                    >
                      <YouTube
                        videoId="T0PjNgZh9EU"
                        opts={opts}
                        onReady={this._onReady}
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
                        height: "250px",
                        width: "auto",
                        backgroundSize: "cover",
                        border: "4px solid rgb(221, 200, 129)",
                        minWidth: "250px",
                        "@media (max-width:800px)": {
                          width: "auto"
                        }
                      }}
                    >
                      <YouTube
                        videoId="34DLUHw05k4"
                        opts={opts}
                        onReady={this._onReady}
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
                        height: "250px",
                        width: "auto",
                        backgroundSize: "cover",
                        border: "4px solid rgb(221, 200, 129)",
                        minWidth: "250px",
                        "@media (max-width:800px)": {
                          width: "auto"
                        }
                      }}
                    >
                      <YouTube
                        videoId={`nmlCw09O5uo`}
                        opts={opts}
                        onReady={this._onReady}
                      />
                    </div>
                  </GridItem>
                </GridContainer>
                <hr className={classes.ovaltop} />
              </div>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.curvepoint} />
      </Parallax>
    );
  }
}

export default withStyles(docstyle)(VidIntSection);
