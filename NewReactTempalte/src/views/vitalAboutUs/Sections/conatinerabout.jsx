/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import { Parallax } from "react-parallax";
import AboutUsDesc from "./aboutusdesc";
import MedspecSections from "./medspecSections";
import { Link } from "react-router-dom";
// import DipcertSection from "./dipcertSection";
import Slidersection from "./slidersection";
import Leftchoose from "./leftchoose";
import SpaceDiv from "./spacediv";
import GridItem from "components/Grid/GridItem.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import card1 from "assets/img/AboutUsImages/CardImages/image3.jpg";
import card2 from "assets/img/AboutUsImages/CardImages/image4.jpg";
import card3 from "assets/img/AboutUsImages/CardImages/image2.jpg";
import card4 from "assets/img/AboutUsImages/CardImages/image1.jpg";

import ProfileImage from "assets/img/AboutUsImages/RightProfileImage.jpg";

import Cards from "components/CustomCards/doccard.jsx";

import bg4 from "assets/img/Parallax4.jpg";

const ConatinerFile = props => {
  const carditems = [
    {
      image: card1,
      head: "Gynaecomastia or Male Breasts",
      content: `Incidence of Gyno / Gynecomastia is very high.
        Almost 25-30% of boys suffer from this condition. It
        can be a very psychologically disturbing condition
        as boys are supposed to have flat, muscular chest.
        Breasts are not at all appropriate on boy's chest.`,
      url: "/malebreast/Gynecomastia&gyno"
    },
    {
      image: card2,
      head: "Liposuction",
      content: `Awake Liposuction is an excellent cosmetic surgery
        procedure for PERMANENT BODY SHAPING. Fat is removed
        from fat deposits between skin and muscles in a
        planned, systematic and symmetrical way to give a
        shapely body. It is an artistic work. It is like
        sculpting the body!`,
      url: "/liposuction/AreasForLiposuction"
    },
    {
      image: card4,
      head: `Breast Surgeries`,
      content: `Shapely and attractive breasts are big confidence
        booster for women. For various reasons, in some
        women they may be small, sagging or excessively
        large. Breast surgeries can give the right and
        appropriate size for the body, lift and firmness to
        them. Boost your self-image at VITAL CLINIC.`,
      url: "/breastSurgeries/BreastAugmentation"
    },

    {
      image: card3,
      head: "Body Contouring",
      content: `Massive weight loss due to a strict fitness regime
        or bariatric surgery for major obesity, can cause
        skin folds to hang in different parts of body.
        Pregnancies can often cause skin folds to hang from
        abdomen like an apron. Body contouring surgeries
        like ABDOMINOPLASTY, ARMS LIFT, THIGH LIFT, HIPS
        LIFT etc can restore firm and shapely body through
        customized Body Contouring Surgeries at VITAL
        CLINIC.`,
      url: "/bodyContouringSurgeries/ContouringSurgeryAfterWeightLoss"
    }
  ];
  return (
    <Parallax bgImage={bg4} bgImageAlt="the cat" strength={4000}>
      <div className={props.classes.container}>
        <GridContainer justify="center" style={{ textAlign: "center" }}>
          <GridItem xs={12} sm={12} md={12}>
            <SpaceDiv />
          </GridItem>
        </GridContainer>
        <AboutUsDesc classes={props.classes} />
        <div className={props.classes.profileTabs}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={12}
              md={8}
              className={props.classes.gridItem}
              style={{
                margin: "0"
              }}
            >
              <Leftchoose classes={props.classes} title={props.classes.title} />
              <Slidersection classes={props.classes} />
              {carditems ? (
                <div>
                  <GridContainer
                    style={{
                      margin: "0",
                      marginTop: "20px"
                    }}
                  >
                    {carditems
                      ? carditems.map(item => (
                          <GridItem
                            xs={12}
                            sm={12}
                            md={6}
                            style={{
                              margin: "15px 0px",
                              padding: `0 15px`
                            }}
                          >
                            <Link to={item.url}>
                              <Card
                                className={
                                  props.classes.textCenter +
                                  " " +
                                  props.classes.brownoverlay +
                                  " " +
                                  props.classes.brownborder
                                }
                                style={{ margin: "0", padding: "0" }}
                              >
                                <CardBody style={{ padding: "0" }}>
                                  <div className={props.classes.proctile}>
                                    <div
                                      className={props.classes.imgcont}
                                      style={{ height: "auto", margin: "auto" }}
                                    >
                                      <img
                                        className={props.classes.imgcard}
                                        src={item.image}
                                        alt="Card-img-cap"
                                      />
                                    </div>
                                    <div style={{ width: "100%" }}>
                                      <h5
                                        className={
                                          props.classes.cardTitle +
                                          " " +
                                          props.classes.darkbrown
                                        }
                                        style={{ textAlign: "center" }}
                                      >
                                        {item.head}
                                      </h5>
                                      <p className={props.classes.darkbrown}>
                                        {item.content}
                                      </p>
                                    </div>
                                  </div>
                                </CardBody>
                              </Card>
                            </Link>
                          </GridItem>
                        ))
                      : null}
                  </GridContainer>
                </div>
              ) : null}
              <MedspecSections classes={props.classes} />
              {/* <Insnavpills classes={props.classes}/>
                          <Procsection classes={props.classes}/> */}
              {/* <DipcertSection
                title={props.classes.title}
                classes={props.classes}
              /> */}

              {/* <HalfformSection/> */}
            </GridItem>
            <GridItem
              xs={12}
              sm={12}
              md={4}
              className={props.classes.gridItem}
              style={{
                margin: "0"
              }}
            >
              <Cards classes={props.classes} type="list" />
              <h4 className={props.classes.title}>About Vital Clinic</h4>
              <p
                className={props.classes.description}
                style={{ color: "rgb(94, 71, 44)", fontSize: "16px" }}
              >
                VITAL CLINIC is a specialty clinic devoted to state-of-the-art
                cosmetic and corrective surgery, totally under local anesthesia.
                We have pioneered the advent of office-surgery with safety,
                precision and best outcomes. Every surgery at VITAL CLINIC is
                performed totally under local anesthesia, with patient being
                awake and completely pain-free. Every surgery is practically
                bloodless. After surgery, patients go home very comfortably.
                There is quick recovery and minimal after-surgery discomfort.
              </p>
              <hr />
              <Cards
                classes={props.classes}
                imgsrc={ProfileImage}
                type="people"
              />

              {/* <StatsSection classes={props.classes}/>
                          <Aboutwork classes={props.classes}/> */}

              {/* <h4 className={classes.title}>Focus</h4>
                          <Badge color="primary">Footwear</Badge>
                          <Badge color="rose">Luxury</Badge> */}
            </GridItem>
          </GridContainer>
        </div>
        <Clearfix />
      </div>
    </Parallax>
  );
};

export default ConatinerFile;
