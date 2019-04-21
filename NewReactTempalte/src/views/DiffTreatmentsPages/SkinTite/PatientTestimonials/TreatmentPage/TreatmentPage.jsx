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
import image1 from "assets/img/TreatmentSections/SkinTite/PatientTestimonials/GalleryImages/Image1.jpg";
import image2 from "assets/img/TreatmentSections/SkinTite/PatientTestimonials/GalleryImages/Image2.jpg";
import image3 from "assets/img/TreatmentSections/SkinTite/PatientTestimonials/GalleryImages/Image3.jpg";
import image4 from "assets/img/TreatmentSections/SkinTite/PatientTestimonials/GalleryImages/Image4.jpg";

import profilePic from "assets/img/TreatmentSections/SkinTite/PatientTestimonials/RightProfileImage.png";

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
        head: "Vital Skin-Tite™ (skin tightening)",
        head2: "(PATIENT TESTIMONIALS on ReformCRF)",
        desc: `As age advances, collagen also ages and starts to
        lose its elasticity and suppleness. Sagging of face
        tissues becomes more and more pronounced giving it
        an aged look. ReformCRF combines the best
        technologies in the world to give non-surgical skin
        tightening without any side effects and downtime.`
      },
      left: {
        firsthead: "WHAT SOME OF OUR VALUED CLIENTS SAY about ReformCRF-",
        firstdesc: `Dr Sarita, a practicing Gynecologist in New Delhi, after undergoing VITAL Skin-tite™ treatment with ReformCRF & skin treatment has following to say`,
        // secondhead: "What some of our valued client friends say-",
        // seconddesc: `Nisha Gulati shares her experience after undergoing VITAL Skin-tite™ treatment with IRF & skin treatment has following to say

        // "After the 1st session, the results don't get visible just after taking session, it takes some days to see the visible changes. The jaw lines seems more tighter and prominent than before"`,
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
            src: image4,
            imagecaption: "Yellowstone National Park, United States"
          }
        ]
        // thirdhead: "IRF energies are computerized",
        // thirddesc:
        //   "VITAL CLINIC may decide to give more treatments at a month’s interval, entirely at their own discretion and clinical judgment",
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
        // sixthhead: "Fat or Adipose Tissue Removal",
        // sixthdesc:
        //   "Fat is removed by liposuction. We usually give two minute cuts on the side of chest and perform a thorough liposuction. These cuts are very small and no stitches are needed to close them. Following videos will demonstrate to you how we perform liposuction on male breasts. When liposuction is complete only mammary glands remain.",
        // seventhhead: "Mammary Glands Removal",
        // seventhdesc:
        //   "Following videos will show our approach towards removal of mammary glands. The incision is always confined to within the boundary of the areola, whatever be the size of the breasts. This approach gives the best cosmetic results."
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
        firsthead: "Vital Skin-Tite™ (skin tightening)",
        firstdesc: `As age advances, collagen also ages and starts to
        lose its elasticity and suppleness. Sagging of face
        tissues becomes more and more pronounced giving it
        an aged look. ReformCRF combines the best
        technologies in the world to give non-surgical skin
        tightening without any side effects and downtime.`,
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
          image={require("assets/img/TreatmentSections/SkinTite/PatientTestimonials/BG.jpg")}
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
