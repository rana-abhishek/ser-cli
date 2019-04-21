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

// import image1 from "assets/img/TreatmentSections/BodyContouring/AbdominplastyTypes/GalleryImages/1.png";
// import image2 from "assets/img/TreatmentSections/BodyContouring/AbdominplastyTypes/GalleryImages/2.png";
// import image3 from "assets/img/TreatmentSections/BodyContouring/AbdominplastyTypes/GalleryImages/3.png";
// import image4 from "assets/img/TreatmentSections/BodyContouring/AbdominplastyTypes/GalleryImages/4.png";
// import image5 from "assets/img/TreatmentSections/BodyContouring/AbdominplastyTypes/GalleryImages/5.png";
// import image6 from "assets/img/TreatmentSections/BodyContouring/AbdominplastyTypes/GalleryImages/6.png";
// import image7 from "assets/img/TreatmentSections/BodyContouring/AbdominplastyTypes/GalleryImages/7.png";
// import image8 from "assets/img/TreatmentSections/BodyContouring/AbdominplastyTypes/GalleryImages/8.png";
// import image9 from "assets/img/TreatmentSections/BodyContouring/AbdominplastyTypes/GalleryImages/9.png";

import profilePic from "assets/img/TreatmentSections/BodyContouring/AbdominplastyTypes/RightProfileImage.png";

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
        head2: "(Abdominoplasty Types)",
        head3:
          "(COMPLETE SURGICAL ‘TUMMY-TUCK’) -totally under local anaesthesia",
        desc: `It is not all the time that a patient needs total Abdominoplasty. In many situations a modified surgery is performed to remove and repair only a limited part of the abdomen skin and fat. Sometimes the navel is not touched and only the lower abdominal skin is removed. At other times, a thorough and aggressive liposuction of the whole abdomen is done which is not the case in the traditional Abdominoplasty. So, the surgery of Abdominoplasty is accordingly named.`
      },
      left: {
        // firsthead: "Total Abdominoplasty with Umbilical Translocation",
        // firstdesc: `It is not all the time that a patient needs total Abdominoplasty. In many situations a modified surgery is performed to remove and repair only a limited part of the abdomen skin and fat. Sometimes the navel is not touched and only the lower abdominal skin is removed. At other times, a thorough and aggressive liposuction of the whole abdomen is done which is not the case in the traditional Abdominoplasty. So, the surgery of Abdominoplasty is accordingly named.`,
        // secondhead: "Why it is so difficult to get rid of buns or side bags?",
        // seconddesc: `Genetically in some women Buns or side bags have an abnormally large and dense deposition of fat cells and tough strands of fibrous tissue interspersed. This architecture gives them greater density and firmness than the surrounding fat layers. Often buns are like tennis balls or even as big as watermelons! This ‘dense’ nature of buns makes them very resistant to ordinary levels of exercise. They may reduce to some extent by strenuous exercises but are the first to enlarge again whenever some weight gain happens.`,
        // galleryimages: [
        //   {
        //     src: image1
        //     // imagecaption: "Yellowstone National Park, United States"
        //   },
        //   {
        //     src: image2
        //     // imagecaption: "Yellowstone National Park, United States"
        //   },
        //   {
        //     src: image3
        //     // imagecaption: "Yellowstone National Park, United States"
        //   },
        //   {
        //     src: image4
        //     // imagecaption: "Yellowstone National Park, United States"
        //   },
        //   {
        //     src: image5
        //     // imagecaption: "Yellowstone National Park, United States"
        //   },
        //   {
        //     src: image6
        //     // imagecaption: "Yellowstone National Park, United States"
        //   },
        //   {
        //     src: image7
        //     // imagecaption: "Yellowstone National Park, United States"
        //   },
        //   {
        //     src: image8
        //     // imagecaption: "Yellowstone National Park, United States"
        //   },
        //   {
        //     src: image9
        //     // imagecaption: "Yellowstone National Park, United States"
        //   }
        // ],
        thirdhead: "Types of Abdominoplasty",
        thirddesc: "Following are the types of Abdominoplasty:",
        thirdlist: [
          {
            content:
              "Total Abdominoplasty with Umbilical Translocation, so called, ‘Surgical-tummy tuck’"
          },
          {
            content: "Extended Abdominoplasty or so called ‘Belt-Lipectomy’"
          },
          {
            content: "Limited (lower) Abdominoplasty"
          },
          {
            content: "It is safe and effective for all skin types"
          },
          {
            content: "Avelar Abdominoplasty"
          },
          {
            content: "Other variations"
          }
        ]
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
          image={require("assets/img/TreatmentSections/BodyContouring/AbdominplastyTypes/BG.jpg")}
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
