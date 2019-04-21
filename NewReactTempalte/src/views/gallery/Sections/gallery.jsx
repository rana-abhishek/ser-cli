/* eslint-disable react/prop-types */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import "react-image-gallery/styles/css/image-gallery.css";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import VideoSection from "./aboutVideoSection";
import sectionInterestedStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionInterestedStyle.jsx";
import LightBox from "./lightbox";

class GalleryConatiner extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section} style={{ width: "100%" }}>
        <div
          style={{
            background: "rgba(166, 123, 63, 0.1)",
            padding: "30px 0",
            border: "4px solid rgb(221, 200, 129)"
          }}
        >
          <GridContainer justify="center" style={{ textAlign: "center" }}>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                {/* <div>
                    <img src={christian} alt="..." className={props.imageClasses} style={{borderRadius:"50%"}}/>
                  </div> */}
                <div>
                  <h3
                    className={classes.title}
                    style={{ margin: "10px 0", fontFamily: "Roboto Slab" }}
                  >
                    Picture Gallery
                  </h3>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <VideoSection />
        </div>
        <br />
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} lg={12} xl={12}>
            <LightBox classes={classes} />
          </GridItem>
          {/* {videocontent(videoinf)} */}
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(sectionInterestedStyle)(GalleryConatiner);
