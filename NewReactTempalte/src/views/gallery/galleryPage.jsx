import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ScrollToTop from "react-scroll-up";
import Icon from "@material-ui/core/Icon";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import ConatinerFile from "./Sections/containerVideo";

import GalleryStyle from "assets/jss/material-kit-pro-react/views/vitalpages/galleryStyle.jsx";

class GalleryPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const dashboardRoutes = [];
    // eslint-disable-next-line react/prop-types
    const { classes } = this.props;
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
          image={require("assets/img/GalleryImages/BGImage.jpg")}
          filter="dark"
          small
        >
          <div className={classes.container} onClick={this.handleClick}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
                <h2 className={classes.title} style={{ color: "#fff" }}>
                  Picture Gallery
                </h2>
                <h3 className={classes.title} style={{ color: "#fff" }}>
                  A place for you to see the <br /> Transformation
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

export default withStyles(GalleryStyle)(GalleryPage);
