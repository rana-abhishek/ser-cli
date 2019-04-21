/* eslint-disable react/prop-types */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "react-scroll-up";
import Icon from "@material-ui/core/Icon";
import Infopar from "./Sections/infoParallax";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import ConatinerFile from "./Sections/conatinerabout";

import aboutPageStyle from "assets/jss/material-kit-pro-react/views/aboutPageStyle.jsx";

AOS.init();

const dashboardRoutes = [];

class AboutUsPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
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
        <Parallax
          image={require("assets/img/AboutUsImages/BannerBG.jpg")}
          small
          filter="dark"
        >
          <Infopar classes={classes} />
        </Parallax>

        <div
          className={classNames(classes.main, classes.mainRaised)}
          style={{ margin: "0", fontFamily: "Lato, sans-serif" }}
        >
          <ConatinerFile classes={classes} />
          {/* <Fourtiles/> */}
          {/* <Aboutfoot classes={classes}/> */}
          <ScrollToTop
            showUnder={160}
            style={{
              zIndex: "1000",
              "&:hover": {
                backgroundColor: "#000"
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

export default withStyles(aboutPageStyle)(AboutUsPage);
