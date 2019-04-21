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
import image1 from "assets/img/TreatmentSections/MaleBreast/TechniqueOfGynecomastiaSurgery/GalleryImages/1.jpg";
import image2 from "assets/img/TreatmentSections/MaleBreast/TechniqueOfGynecomastiaSurgery/GalleryImages/2.jpg";
import image3 from "assets/img/TreatmentSections/MaleBreast/TechniqueOfGynecomastiaSurgery/GalleryImages/3.jpg";
import image4 from "assets/img/TreatmentSections/MaleBreast/TechniqueOfGynecomastiaSurgery/GalleryImages/4.jpg";

import profilePic from "assets/img/TreatmentSections/MaleBreast/TechniqueOfGynecomastiaSurgery/RightProfileImage.png";

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
        head: "Male Breast Reduction Surgery(Gynecomastia)",
        desc: `Incidence of Gyno / Gynecomastia is very high. Almost 25-30% of boys suffer from this condition. It can be a very psychologically disturbing condition as boys are supposed to have flat, muscular chest. Breasts are not at all appropriate on boys’ chest.`
      },
      left: {
        firsthead: "Chest Fat Reduction Surgery",
        firstdesc: `We do Gynecomastia Surgery totally under local anesthesia, by the Tumescent Awake Technique. Throughout the surgery patients may be awake or may go to sleep. They are fully conversant. Patients come for surgery after some breakfast at home. There is no need to be fasting unlike under general anaesthesia, where the patient has to be fasting from night before.

        Immediately after the surgery is over, we give some light refreshments to patient and after that they may go home with post-op advice.`,
        secondhead: "Skin & Nipple-areola Complex:",
        seconddesc: `In our experience, the skin in small and moderate sized male breasts and often in large male breasts shrinks back almost completely. In such cases skin does not sag once the healing is complete. Besides, some degree of skin shrinkage continues even up to a year after surgery. We will be able to tell you after examination how much likely skin shrinkage you should expect post-surgery.

          We feel removing excess skin at the time of primary male breasts surgery is ill advised. In our practice we let the skin shrink to full extent naturally and deal with residual skin after six months or a year. It is our experience that only in very rare instances residual skin removal surgery is required. Whenever needed, additional surgery can be done to remove excess skin and lift the sagging breast tissue.
          
          In some boys, the areola (dark circle around the nipple) is very large and looks abnormal. Such an areola can be reduced to bring it to normal size.`,
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
          }
        ],
        thirdhead: "Three main issues",
        thirddesc:
          "There are three main tissues we need to deal with while considering a surgery for male breasts:",
        thirdlist: [
          {
            content: "Skin & Nipple-areola complex"
          },
          {
            content: "Fat or Adipose tissue"
          },
          {
            content: "Mammary Glands"
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
        firsthead: "About Male Breast Reduction Surgery(Gynecomastia)",
        firstdesc: `Incidence of Gyno / Gynecomastia is very high. Almost 25-30% of boys suffer from this condition. It can be a very psychologically disturbing condition as boys are supposed to have flat, muscular chest. Breasts are not at all appropriate on boys’ chest.`,
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
          image={require("assets/img/TreatmentSections/MaleBreast/TechniqueOfGynecomastiaSurgery/BG.jpg")}
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
