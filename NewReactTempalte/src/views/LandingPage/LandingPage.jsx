/* eslint-disable react/prop-types */
import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ScrollToTop from "react-scroll-up";
import Icon from "@material-ui/core/Icon";

// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPage.jsx";

// Sections for this page
import PicSection from "./Sections/PicSection";
import TilesSection from "./Sections/TilesSection";
import BefaftSection from "./Sections/BefaftSection";
import MeetusSection from "./Sections/meetusSection";
import DocSection from "./Sections/doctorsSection";
import SectionImage from "./Sections/SectionImage";
import NewsSection from "./Sections/newsSection";
import VidIntSection from "./Sections/videointSection";
import BannerSection from "./Sections/bannerSection";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  smoothScroll(target) {
    var targetScroll = document.getElementById(target);
    this.scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
  }
  scrollGo(element, to, duration) {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = this.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    }.bind(this);
    animateScroll();
  }
  render() {
    const { classes } = this.props;

    AOS.init();
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom" // defines which position of the element regarding to window should trigger the animation
    });
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
        <BannerSection classes={classes} />
        {/* <Parallax filter className={classes.overlay}  image={require("assets/img/bg15.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={5} className={classes.gridoverlay}>
                <h1 
                  data-aos="fade-right" 
                  className={classes.title}
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  style={{
                    fontSize:"112px",
                    fontFamily:"Abril Fatface",
                    fontWeight:"400",
                    background: "linear-gradient(to right, #A67B3F, #F1EBE3, #A67B3F)",
                    color: "transparent",
                    WebkitTextFillColor:"transparent",
                    WebkitBackgroundClip: "text",
                    WebkitTextStroke: "1px #5E472C",
                    lineHeight:"100px"
                  }}
                >Vital Clinic</h1>
                <div   data-aos="fade-right" 
                  data-aos-delay="500"
                  data-aos-duration="1000"
                >
                <h4 style={{
                  textAlign:"justify",
                  fontSize:"23px",
                  fontWeight:"400",
                  fontFamily:"Oswald",
                  color:"#5E472C"
                }}>
                VITAL CLINIC is a specialty clinic devoted to state-of-the-art cosmetic surgery
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  style={{
                    backgroundColor:"#A67B3F",
                    color:"#fff",
                    fontFamily:"Oswald"
                  }}
                >
                  <i className="fas fa-briefcase-medical" />Schedule an Appointment
                </Button>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax> */}
        <PicSection classes={classes} />
        {/* <TwoHalfSeciton /> Work With us Component */}

        <TilesSection />
        <div
          className={classNames(classes.main, classes.mainRaised)}
          style={{ width: "100%", margin: "0px" }}
        >
          <BefaftSection />
          <MeetusSection classes={classes} />
          {/* <FormcarSection /> */}
          {/* <CarouselSection /> */}
          <DocSection />
          <div className={classes.container}>
            {/* <TabsSection />
            <CardsSection />
            
            <ProductSection /> */}
            {/* <TeamSection /> */}
          </div>
          {/* <CarouselSection /> */}
          <SectionImage />
          <NewsSection />
          <VidIntSection />
          {/* <WorkSection /> */}
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

export default withStyles(landingPageStyle)(LandingPage);
