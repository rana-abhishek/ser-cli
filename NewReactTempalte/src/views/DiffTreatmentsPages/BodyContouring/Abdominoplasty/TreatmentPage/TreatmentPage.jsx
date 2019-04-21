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
import image1 from "assets/img/TreatmentSections/BodyContouring/Abdominoplasty/GalleryImages/Image1.jpg";
import image2 from "assets/img/TreatmentSections/BodyContouring/Abdominoplasty/GalleryImages/Image2.jpg";
import image3 from "assets/img/TreatmentSections/BodyContouring/Abdominoplasty/GalleryImages/Image3.jpg";

import profilePic from "assets/img/TreatmentSections/BodyContouring/Abdominoplasty/RightProfileImage.jpg";

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
        head: "Body Contouring Surgery after Weight Loss",
        desc: `Morbid obesity developing due to unhealthy lifestyles can be a very difficult problem to treat. Although trying to lose weight by a controlled diet plan and regular exercise is most desirable and recommended yet, it can be a very daunting proposition for many. A large number of morbidly obese patients are nowadays preferring to undergo the surgeon's knife for weight loss surgery, also known as 'bariatric surgery'`
      },
      left: {
        firsthead: "Abdominoplasty",
        firstdesc: `Abdominoplasty, also called 'surgical tummy tuck' is done to remove abdominal skin folds: abdominoplasty surgery is performed to give the patient a firm, flat and tight belly`,
        // secondhead: "Why it is so difficult to get rid of buns or side bags?",
        // seconddesc: `Genetically in some women Buns or side bags have an abnormally large and dense deposition of fat cells and tough strands of fibrous tissue interspersed. This architecture gives them greater density and firmness than the surrounding fat layers. Often buns are like tennis balls or even as big as watermelons! This ‘dense’ nature of buns makes them very resistant to ordinary levels of exercise. They may reduce to some extent by strenuous exercises but are the first to enlarge again whenever some weight gain happens.`,
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
        firsthead: "Body Contouring Surgery after Weight Loss",
        firstdesc:
          "Morbid obesity developing due to unhealthy lifestyles can be a very difficult problem to treat. Although trying to lose weight by a controlled diet plan and regular exercise is most desirable and recommended yet, it can be a very daunting proposition for many. A large number of morbidly obese patients are nowadays preferring to undergo the surgeon's knife for weight loss surgery, also known as 'bariatric surgery'",
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
          image={require("assets/img/TreatmentSections/BodyContouring/Abdominoplasty/BG.jpg")}
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
