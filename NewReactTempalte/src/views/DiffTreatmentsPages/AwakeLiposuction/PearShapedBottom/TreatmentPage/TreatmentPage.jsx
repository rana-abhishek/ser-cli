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
import image1 from "assets/img/TreatmentSections/AwakeLiposuction/PearShapedBottom/GalleryImages/Image1.jpg";
import image2 from "assets/img/TreatmentSections/AwakeLiposuction/PearShapedBottom/GalleryImages/Image2.jpg";
import image3 from "assets/img/TreatmentSections/AwakeLiposuction/PearShapedBottom/GalleryImages/Image3.jpg";

import profilePic from "assets/img/TreatmentSections/AwakeLiposuction/PearShapedBottom/RightProfileImage.png";

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
        head: "Awake Liposuction",
        head2: "(Pear Shaped Bottom Liposuction)",
        desc: `Shaped like a ‘Pear’ in the middle? Protruding hips, bulging ‘love-handles’ and heavy ‘side-bags’ can destroy any beautiful body! ‘Pear-shape’ in the middle is the worst nightmare of any woman because this is one pear that is most stubborn and just won’t go away. You may do whatever, heavy regular exercises or strict diet control.`
      },
      left: {
        // firsthead:
        //   "Body Shaping By Liposuction: Heavy In The Middle, Like A Pear!",
        // firstdesc: `Shaped like a ‘Pear’ in the middle? Protruding hips, bulging ‘love-handles’ and heavy ‘side-bags’ can destroy any beautiful body! ‘Pear-shape’ in the middle is the worst nightmare of any woman because this is one pear that is most stubborn and just won’t go away. You may do whatever, heavy regular exercises or strict diet control.`,
        secondhead: "What is ‘pear shaped’ bottom?",
        seconddesc: `A ‘pear-shaped’ bottom- heavy patient is one who has a narrow upper body and shapely and slim legs but, is abnormally wide in the middle with protruding hips. The wide middle body contour is usually due to a combination of heavy outer thighs also called, ‘side-bags’, outward bulging ‘love-handles' (iliac rolls) and big protruding hips.`,
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
        ],
        thirdhead:
          "Why some women have this deformity whereas others do not have?",
        thirddesc:
          "The important thing to remember is that those women, who suffer from this condition, have abnormally high number of fat cells concentrated in these areas by birth. Weight gain causes all these fat cells to swell up and present with heavy bottom or middle heavy body. Whereas in the rest of the body, the fat cells are evenly spread out and therefore other areas of the body do not go out of shape so easily.",
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
        sixthhead:
          "Is it possible to reduce the ‘pear-shaped’ bottom with diet control and exercise?",
        sixthdesc:
          "‘Pear-shaped’ middle heavy women need to exercise very regularly, very strenuously like the athletes and control their diet very strictly if they want to reduce these areas by lifestyle management alone. In the process of weight reduction, they may reduce fat from other parts of the body first whereas the ‘pear’ reduces last and with the slightest weight gain, these areas are the first to bulge again. The frustration keeps mounting with no end in sight.",
        seventhhead:
          "Can Liposuction help reduce the ‘pear’ and bring the middle body into shape?",
        seventhdesc:
          "Liposuction is the only definitive answer to this problem. Liposuction removes the excessive number of fat cells along with the fat deposited in them. Liposuction will reduce the middle heavy body and bring it into proper shape permanently. In fact, this is the only way that this heavy ‘pear shaped’ bottom can be reduced and aesthetically pleasing body contours achieved."
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
        firsthead: "Awake Liposuction",
        firstdesc:
          "Doctors at VITAL Clinic state that Lipo is not a substitute for exercise and proper diet; hence it cannot treat obesity. Moreover, this medical procedure is not effective for cellulite treatment. That is, lipo is not the answer for treating saggy loose skin on buttocks, hips, and thighs.",
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
          image={require("assets/img/TreatmentSections/AwakeLiposuction/PearShapedBottom/BG.jpg")}
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
