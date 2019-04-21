/* eslint-disable react/prop-types */
import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import { Parallax } from "react-parallax";

import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.jsx";
import docstyle from "assets/jss/material-kit-pro-react/views/landingPageSections/docSection.jsx";

import Mr from "assets/img/HomePageImages/DoctorImages/Mr.jpg";
import sign from "assets/img/HomePageImages/DoctorImages/Sign_1.png";
// import Mrs from "assets/img/HomePageImages/DoctorImages/Mrs.jpg";
import BG from "assets/img/common/Images/ParallaxDarkBG.jpg";
import DocTemplate from "./docTemplate";

import { cardTitle } from "assets/jss/material-kit-pro-react.jsx";

class DocSection extends React.Component {
  styles = {
    ...imagesStyles,
    cardTitle
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          {/* style={{background : `URL('${docbg}')`}} */}
          <Parallax bgImage={BG} bgImageAlt="the cat" strength={1000}>
            <GridContainer justify="center" style={{ marginRight: "0" }}>
              <GridItem xs={12} sm={12} md={8} style={{ paddingRight: "0" }}>
                <div
                  className={classes.title}
                  style={{
                    color: "#ddc881",
                    textAlign: "center",
                    fontSize: "1.7rem",
                    fontFamily: "Oswald, sans-serif"
                  }}
                >
                  Medical Specialists
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={8} style={{ paddingRight: "0" }}>
                <div className={classes.docpics}>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12}>
                      {/* <img
                        style={{height: "250px", width: "auto"}}
                        className={classes.imgCardTop}
                        src={Mr}
                        alt="Card-img-cap"
                        /> */}
                      <DocTemplate
                        classes={classes}
                        imagesrc={Mr}
                        sign={sign}
                        right={true}
                        dochead={"Advanced and Safe Surgery is our Objective"}
                        doctype={"MBBS, MS, is a Senior Consultant"}
                        docname={"Dr. JB Ratti"}
                        docnumber={"+ 800 123 45 67"}
                        docemail={"info@vitalclinic.com"}
                        docdesc={
                          "VITAL CLINIC is a specialty clinic devoted to state-of-the-art cosmetic and corrective surgery, totally under local anesthesia. We have pioneered the advent of office-surgery with safety, precision and best outcomes. Every surgery at VITAL CLINIC is performed totally under local anesthesia, with patient being awake and completely pain-free. After surgery, patients go home very comfortably."
                        }
                      />
                    </GridItem>
                    {/* <GridItem xs={12} sm={12} md={12}>
                      <DocTemplate
                        classes={classes}
                        imagesrc={Mrs}
                        right={false}
                        doctype={"MBBS, MS (Obstetrics & Gynecology)"}
                        docname={"Dr. (Mrs.) Neeta Ratti"}
                        docnumber={"+ 800 123 45 67"}
                        docemail={"info@vitalclinic.com"}
                        docdesc={
                          "Dr. (Mrs.) Neeta Ratti MBBS, MS (Obstetrics & Gynecology) is a senior Cosmetic Gynecologist. She belongs to MBBS 1972 batch of GSVM Medical College. After finishing her graduation in 1976 from GSVM Medical College Kanpur India, she did her post-graduation in 1980 (December) from the same institution. For a year she was Clinical Demonstrator (Teaching job, Post – MS) at LLR Hospital, GSVM Medical College, Kanpur."
                        }
                      />
                    </GridItem> */}
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

export default withStyles(docstyle)(DocSection);
