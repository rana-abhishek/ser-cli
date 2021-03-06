/* eslint-disable react/prop-types */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ScrollToTop from "react-scroll-up";
import Icon from "@material-ui/core/Icon";
// core components
import Header from "components/Header/Header.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import treatmentPageStyle from "assets/jss/material-kit-pro-react/views/treatmentPageStyle.jsx";
import ConatinerFile from "./Sections/containerFile";
import image1 from "assets/img/TreatmentSections/BodyContouring/Brachioplasty/GalleryImages/1.jpg";
import image2 from "assets/img/TreatmentSections/BodyContouring/Brachioplasty/GalleryImages/2.jpg";
import image3 from "assets/img/TreatmentSections/BodyContouring/Brachioplasty/GalleryImages/3.jpg";
import image4 from "assets/img/TreatmentSections/BodyContouring/Brachioplasty/GalleryImages/4.jpg";
import image5 from "assets/img/TreatmentSections/BodyContouring/Brachioplasty/GalleryImages/5.jpg";

import profilePic from "assets/img/TreatmentSections/BodyContouring/Brachioplasty/RightProfileImage.png";

const dashboardRoutes = [];

class TreatmentPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;

    const treatdata = {
      main: {
        head: "Body Contouring Surgeries",
        head2: "(Brachioplasty)",
        desc: `Arms Lift or Brachioplasty is a Body Contouring surgery on the arms to remove excess and loose skin, tighten the skin on the arms and give a smooth contoured shape. Excessive weight loss and ageing are the common factors which cause the arms muscles and skin to become loose. A surgical Arm-Lift is a major surgery performed to correct these changes. We at VITAL CLINIC are doing this surgery by the safest 'TUMESCENT AWAKE TECHNIQUE'.`
      },
      left: {
        // firsthead: "Brachioplasty",
        // firstdesc: `Arms Lift or Brachioplasty is a Body Contouring surgery on the arms to remove excess and loose skin, tighten the skin on the arms and give a smooth contoured shape. Excessive weight loss and ageing are the common factors which cause the arms muscles and skin to become loose. A surgical Arm-Lift is a major surgery performed to correct these changes. We at VITAL CLINIC are doing this surgery by the safest 'TUMESCENT AWAKE TECHNIQUE'.`,
        secondhead: "TUMESCENT AWAKE TECHNIQUE'",
        seconddesc: `There is exceptional patient safety when BRACHIOPLASTY (SURGICAL 'ARM-LIFT') is performed by tumescent AWAKE technique, as used in liposuction, totally under local anaesthesia and without sedation. Tumescent Awake Technique makes the procedure virtually bloodless and carries a very high safety profile. Patients are awake, well oriented and conversant throughout the procedure and are absolutely free from pain in the postoperative period. Patients are discharged from the clinic after an hour of surgery.

        There is negligible blood loss during surgery, little or nil postoperative pain, and early healing. They are back to their normal activities within a week. TUMESCENT AWAKE TECHNIQUE introduces a new dimension in patient safety.`,
        galleryimages: [
          {
            src: image1,
            imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image2,
            imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image3,
            imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image4
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image5
            // imagecaption: "Yellowstone National Park, United States"
          }
        ]
        // thirdhead:
        //   "Can they be removed by Liposuction totally under local anaesthesia?",
        // thirddesc:
        //   "Yes, it is possible to remove side bags permanently by tumescent technique of liposuction under local anaesthesia. It takes about two to three hours to remove them and do aesthetic sculpturing of the thighs. A woman can come in the morning after breakfast at home (Not fasting!), get the liposuction done and go home immediately after liposuction! Hardly any follow up is required.",
        // thirdlist: [
        //   {
        //     content:
        //       "Every energy pulse gives Intelligent Feedback which provides real time information on skin condition, impedance and the energy delivery in each pulse for consistency and reproducibility. Energy delivery is fully computer controlled with built-in safety features."
        //   },
        //   {
        //     content:
        //       "There is constant and simultaneous cooling of the skin surface for total comfort"
        //   },
        //   {
        //     content:
        //       "Virtually no downtime so patients can quickly resume their normal activities"
        //   },
        //   {
        //     content: "It is safe and effective for all skin types"
        //   },
        //   {
        //     content:
        //       "Quick treatments: typically 60-90 minutes depending on area treated"
        //   },
        //   {
        //     content:
        //       "Short treatment protocol: Single treatment is effective. However, cosmetic surgeons at"
        //   }
        // ]
        // tabshead: "Abdomen: upper and lower",
        // tabsdesc:
        //   "AWAKE LIPOSUCTION FOR ABDOMEN is a cosmetic surgery procedure for permanent shaping of abdomen where fat is removed from between the skin and muscles. AWAKE LIPOSUCTION FOR ABDOMEN can be very safely performed totally under local anaesthesia by the best and safest technique called Tumescent Technique.Are there different techniques of doing Liposuction for Abdomen? Liposuction for Abdomen is performed in different ways but, according to the anaesthesia used, there are two fundamental methods of Liposuction for Abdomen.",
        // tabsitems: [
        //   {
        //     title: "Tumescent AWAKE LIPOSUCTION",
        //     content:
        //       "It is performed totally under local anaesthesia, without intravenous sedation or general anaesthesia. Person is awake and conversing while liposuction is going on."
        //   },
        //   {
        //     title: "Traditional form of liposuction",
        //     content:
        //       "It is performed under general anaesthesia or under deep intravenous anaesthesia. Patients may receive a limited amount of tumescent fluid infiltration."
        //   }
        // ]
        // sixthhead:
        //   "Is it possible to reduce the backward projection of hips and sideways protrusion of ‘love-handles’?",
        // sixthdesc:
        //   "‘Love-handles’ (areas above the hips and lying on the flare of the hip bone) give a wider look to a woman’s middle portion when seen from behind. They appear as if some bags have been kept on the waistline. Hips or bums give ‘backward’ projection to the middle portion of body. Liposuction is very useful in removing ‘bums’ and ‘love-handles’. Shaping of these areas gives a woman great cosmetic satisfaction. In fact, liposuction of these areas gives very pleasing and aesthetically appealing shape to the middle heavy women.",
        // seventhhead:
        //   "Why it is so important to reduce side bags, hips (buttocks) and love-handles?",
        // seventhdesc:
        //   "This area is the central portion of the body. The beautiful aesthetics of a proportionate body flow upwards towards chest and downwards towards thighs from the hip area. When the middle portion is in shape, the upper and lower portions of the body also appear symmetrical, proportionate and shapely seductive. Appreciations from lookers are spontaneous. However, conversely if the middle portion is heavy and out of shape, the whole beauty of the body is destroyed. There are some interesting terms to describe a body with heavy middle as ‘pear-shape’, ‘violin-shape’ etc. For a beautiful body there should be no protruding buns, bums and love-handles. Liposuction by tumescent technique is a cent percent solution to bring these areas into proper shape. A beautiful proportionate body enhances self confidence and self esteem."
        // cardshead: "Procedures",
        // carditems: [
        //   {
        //     image: image1,
        //     head: "Neuralgia Treatment",
        //     content:
        //       "Treatment includes drug therapy, physiotherapy and/ or surgery, aimed to relieve pain...."
        //   },
        //   {
        //     image: image1,
        //     head: "Epilepsy Treatment",
        //     content:
        //       "Treatment includes drug therapy, physiotherapy and/ or surgery, aimed to relieve pain...."
        //   },
        //   {
        //     image: image1,
        //     head: "Epilepsy Treatment",
        //     content:
        //       "Treatment includes drug therapy, physiotherapy and/ or surgery, aimed to relieve pain...."
        //   },
        //   {
        //     image: image1,
        //     head: "Epilepsy Treatment",
        //     content:
        //       "Treatment includes drug therapy, physiotherapy and/ or surgery, aimed to relieve pain...."
        //   }
        // ]
      },
      right: {
        firsthead: "Body Contouring Surgeries",
        firstdesc: `Massive weight loss due to a strict fitness regime
        or bariatric surgery for major obesity, can cause
        skin folds to hang in different parts of body.
        Pregnancies can often cause skin folds to hang from
        abdomen like an apron. Body contouring surgeries
        like ABDOMINOPLASTY, ARMS LIFT, THIGH LIFT, HIPS
        LIFT etc can restore firm and shapely body through
        customized Body Contouring Surgeries at VITAL
        CLINIC.`,
        card: {
          head: "Pateints Say",
          content:
            "There may be other factors for the surgeon to consider before deciding upon the charges like sagging of the breasts, previous incomplete or complicated surgeries and expected technical difficulties during surgery. Therefore surgeon must examine you first before quoting gynecomastia surgery cost to you.",
          image: profilePic,
          name: "Deep",
          desi: "Patient"
        }
      }
    };

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
          image={require("assets/img/TreatmentSections/BodyContouring/Brachioplasty/BG.jpg")}
          filter="dark"
          className={classes.parallax}
          style={{ height: "480px" }}
        >
          <div className={classes.container} onClick={this.handleClick}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
                <h2 className={classes.title} style={{ color: "#fff" }}>
                  Treatments
                </h2>
                <h3 className={classes.title} style={{ color: "#fff" }}>
                  A place for you to see the Information
                  <br /> about different Treatments
                </h3>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <ConatinerFile classes={classes} data={treatdata} />
        <ScrollToTop
          showUnder={160}
          style={{
            zIndex: "100",
            "&:hover": {
              backgroundColor: "#000"
            }
          }}
        >
          <Icon className={classes.link}>arrow_upward</Icon>
        </ScrollToTop>
      </div>
    );
  }
}

export default withStyles(treatmentPageStyle)(TreatmentPage);
