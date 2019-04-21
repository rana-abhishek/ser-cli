/* eslint-disable react/prop-types */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ScrollToTop from "react-scroll-up";
import Icon from "@material-ui/core/Icon";
// import VideoCover from "react-video-cover";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import ConatinerFile from "./Sections/containerVideo";

import VideosStyle from "assets/jss/material-kit-pro-react/views/vitalpages/videosStyle.jsx";

class VideoPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    // this.videoRef.play();
  }

  // handleClick = () => {
  //   if (this.videoRef && this.videoRef.paused) {
  //     this.videoRef.play();
  //   } else if (this.videoRef) {
  //     this.videoRef.pause();
  //   }
  // };

  render() {
    // const videoOptions = {
    //   src:
    //     // "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
    //     "https://youtu.be/T0PjNgZh9EU",
    //   ref: videoRef => {
    //     this.videoRef = videoRef;
    //   },
    //   title: "click to play/pause"
    // };
    const { classes } = this.props;
    const dashboardRoutes = [];
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Vital Clinic"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
        />
        {/* image={require("assets/img/bg10.jpg")} */}
        <Parallax
          style={{ backgroundColor: "#000" }}
          image={require("assets/img/common/VideoBanner/BG.jpg")}
          filter="dark"
          small
        >
          {/* <VideoCover
            videoOptions={videoOptions}
            style={{ position: "absolute" }}
          /> */}
          <div className={classes.container} onClick={this.handleClick}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
                <h2 className={classes.title}>Video Gallery</h2>
                <h3 className={classes.title}>
                  A place for you to Learn and Discover
                  <br /> New Surgeries Techniques
                </h3>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div
          className={classes.main}
          style={{ margin: "0", borderRadius: "0" }}
        >
          <ConatinerFile classes={classes} />
          {/* <Videofoot classes={classes}/> */}
          <ScrollToTop
            showUnder={160}
            style={{
              zIndex: "1000",
              "&:hover": {
                backgroundColor: "#000",
                position: "relative"
              }
            }}
          >
            <Icon className={classes.link}>arrow_upward</Icon>
          </ScrollToTop>
        </div>
      </div>
    );
  }
}

export default withStyles(VideosStyle)(VideoPage);
