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

import image1 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/1.jpg";
import image2 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/2.jpg";
import image3 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/3.jpg";
import image4 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/4.jpg";
import image5 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/5.jpg";
import image6 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/6.jpg";
import image7 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/7.jpg";
import image8 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/8.jpg";
import image9 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/9.jpg";
import image10 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/10.jpg";
import image11 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/11.jpg";
import image12 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/12.jpg";
import image13 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/13.jpg";
import image14 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/14.jpg";
import image15 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/15.jpg";
import image16 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/16.jpg";
import image17 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/17.jpg";
import image18 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/18.jpg";
import image19 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/19.jpg";
import image20 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/20.jpg";
import image21 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/21.jpg";
import image22 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/22.jpg";
import image23 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/23.jpg";
import image24 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/24.jpg";
import image25 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/25.jpg";
import image28 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/28.jpg";
import image29 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/29.jpg";
import image34 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/34.jpg";
import image35 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/35.jpg";
import image36 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/36.jpg";
import image37 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/37.jpg";
import image38 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/38.jpg";
import image39 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/39.jpg";
import image40 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/40.jpg";
import image41 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/41.jpg";
import image42 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/42.jpg";
import image43 from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/GalleryImages/43.jpg";

import profilePic from "assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/RightProfileImage.png";

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
        head: "Breast Surgeries",
        head2: "(Breast Augmentaiton)",
        desc: `Shapely and attractive breasts are big confidence
        booster for women. For various reasons, in some
        women they may be small, sagging or excessively
        large. Breast surgeries can give the right and
        appropriate size for the body, lift and firmness to
        them. Boost your self-image at VITAL CLINIC.`
      },
      left: {
        firsthead: "Modified Tumescent - Awake technique",
        firstdesc: `Completely Bloodless & Painless Breast Augmentation Sub-glandular & Retro-pectoral`,
        // secondhead: "What is ROOTActiv PRP treatment?",
        // seconddesc: `Platelet Rich Plasma involves extracting some blood out of the patient, the blood is then spun very quickly to separate the red and white blood cells from the platelets within the blood (shown in the photo right being the yellow substance).  The plasma with many fold concentration of platelets is then activated and injected into the region that is thinning/balding or the region that is about to have a transplant. This aids the preparation of the skin or the hair follicles in the region before any procedure takes place.`,
        galleryimages: [
          {
            src: image1
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image2
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image3
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image4
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image5
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image6
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image7
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image8
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image9
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image10
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image11
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image12
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image13
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image14
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image15
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image16
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image17
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image18
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image19
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image20
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image21
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image22
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image23
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image24
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image25
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image28
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image29
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image34
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image35
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image36
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image37
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image38
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image39
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image40
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image41
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image42
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image43
            // imagecaption: "Yellowstone National Park, United States"
          }
        ],
        thirdhead: "Retro-pectoral Breast Augmentation",
        thirddesc: "Retro-pectoral Breast Augmentation key points:",
        thirdlist: [
          {
            content:
              "Infiltration of standard Klein Tumescent fluid: 150ml – 250ml is usually adequate on each side"
          },
          {
            content: "First infiltrate the incision area"
          }
        ],
        thirdhead2: "Recap",
        // thirddesc2: "Retro-pectoral Breast Augmentation key points:",
        thirdlist2: [
          {
            content: "150ml – 250ml standard Klein Tumescent local anesthesia"
          },
          {
            content: "Proper and complete fluid infiltration is a must"
          },
          {
            content: "Adequate cavity formation"
          },
          {
            content: "Muscle stretch should be painless"
          },
          {
            content: "There is a learning curve"
          }
        ]
        // tabshead: "PRP treatment",
        // tabsdesc:
        //   "At Vital Clinic ROOTActiv PRP treatment is a very important tool for the following conditions",
        // tabsitems: [
        //   {
        //     title: "Male Pattern Hair Loss",
        //     content:
        //       "it is quite effective especially in the early stages of balding, or anytime when thinning of hair is noticed"
        //   },
        //   {
        //     title: "Female Pattern Hair Loss",
        //     content: "at all stages of hair loss"
        //   },
        //   {
        //     title: "Fine/reduced hairs of the eyebrows or beard",
        //     content:
        //       "in medical conditions like Alopecia Areata or Alopecia Totalis which are very resistant to conventional medical treatment"
        //   },
        //   {
        //     title: "Hair loss",
        //     content: "due to iron deficiency or drug induced hair loss"
        //   }
        // ],
        // sixthhead: "ROOTActiv PRP treatment",
        // sixthdesc: `ROOTActiv PRP causes miniaturized hair follicles to become healthier and larger, producing healthier hair growth. ROOTActiv activates follicular progenitor cells (adult stem cells) and ROOTActiv is loaded with growth factors that promote rapid angiogenesis and localized cell growth. Effective for both male and female pattern hair loss, ROOTActiv has also regrown hair in alopecia area, deficient hair in the eyebrows and other patient cases with non-hereditary hair loss.

        //   New hair growth can be seen as early as 2 months, but is typically evident between 5-8 months and will continue to improve up to a year after treatment.`
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
        firsthead: "Breast Surgeries",
        firstdesc: `Shapely and attractive breasts are big confidence
        booster for women. For various reasons, in some
        women they may be small, sagging or excessively
        large. Breast surgeries can give the right and
        appropriate size for the body, lift and firmness to
        them. Boost your self-image at VITAL CLINIC.`,
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
          image={require("assets/img/TreatmentSections/BreastSurgeries/BreastAugmentation/BG.jpg")}
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
