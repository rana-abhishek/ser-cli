/* eslint-disable react/prop-types */
import React from "react";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import ScrollToTop from "react-scroll-up";
import Icon from "@material-ui/core/Icon";
import { Parallax } from "react-parallax";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Contactform from "./Sections/contformdoc";
import Contactaddress from "./Sections/contAddSection";
import ContactTiles from "./Sections/conttilesSection";
import Contactdet from "./Sections/contdetSection";
import BG1 from "assets/img/ContactUsImages/BG1.svg";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import contactUsStyle from "assets/jss/material-kit-pro-react/views/vitalpages/contactUsStyle.jsx";

const CustomSkinMap = withScriptjs(
  // eslint-disable-next-line no-unused-vars
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 28.566933, lng: 77.224017 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true
      }}
    >
      <Marker position={{ lat: 28.566933, lng: 77.224017 }} />
    </GoogleMap>
  ))
);

const dashboardRoutes = [];

class VitalContactUsPage extends React.Component {
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
            height: 300,
            color: "white"
          }}
        />
        <div className={classes.bigMap}>
          <CustomSkinMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhh4_Cy8vNG8-QFQLP5fWLWM7xsi1gG3Q"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div
                style={{
                  height: `100%`,
                  borderRadius: "6px",
                  overflow: "hidden"
                }}
              />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <Parallax bgImage={BG1} bgImageAlt="the cat" strength={1000}>
          <div className={classes.contactContent} style={{ padding: "0" }}>
            <Contactdet classes={classes} />
            <ContactTiles classes={classes} />
            <Contactaddress classes={classes} />
            <Contactform classes={classes} />
          </div>
        </Parallax>
        {/* <Fourtiles/> */}
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
    );
  }
}

export default withStyles(contactUsStyle)(VitalContactUsPage);
