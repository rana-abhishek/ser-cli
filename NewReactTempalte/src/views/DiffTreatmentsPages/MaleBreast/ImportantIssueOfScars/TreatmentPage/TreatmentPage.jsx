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
import image1 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfScars/GalleryImages/1.jpg";
import image2 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfScars/GalleryImages/2.jpg";
import image3 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfScars/GalleryImages/3.jpg";
import image4 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfScars/GalleryImages/4.jpg";
import image5 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfScars/GalleryImages/5.jpg";
import image6 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfScars/GalleryImages/6.jpg";
import image7 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfScars/GalleryImages/7.jpg";
import image8 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfScars/GalleryImages/8.jpg";
import image9 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfScars/GalleryImages/9.jpg";
import image10 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfScars/GalleryImages/10.jpg";
import image11 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfScars/GalleryImages/11.jpg";
import image12 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfScars/GalleryImages/12.jpg";
import image13 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfScars/GalleryImages/13.jpg";
import image14 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfScars/GalleryImages/14.jpg";
import image15 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfScars/GalleryImages/15.jpg";

import profilePic from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfScars/RightProfileImage.png";

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
        firsthead: "The Important Issue of Scars from Gynecomastia Surgery",
        firstdesc: `Gynecomastia surgery leaves scars which are permanent.

          All surgeries leave scars. Important factor to consider is this- which is the best site of incision that will give least visible incision marks (scars) from Gynecomastia surgery?`,
        // secondhead: "Belly fat",
        // seconddesc:
        //   "Belly fat reduces only with regular and strenuous exercises over a prolonged period. However, long term skin shrinkage is influenced by the pre-operative condition and tone of the skin. BELLY can be reduced PERMANENTLY AND SATISFACTORILY with Liposuction. We at VITAL CLINIC are performing this surgery by the safest 'TUMESCENT TECHNIQUE'.",
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
          }
        ],
        thirdhead: "Factors of Cosmetic placement",
        thirddesc:
          "While considering the best cosmetic placement of incision site three factors need to be considered-",
        thirdlist: [
          {
            content:
              "Will the scar be very visible even to a casual observer from front?"
          },
          {
            content:
              "Can the incision be given in a naturally camouflaged site so that it is least visible?"
          },
          {
            content:
              "How much small the incision can be for complete removal of glands?"
          }
        ],
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
        sixthhead: "Best site for incision",
        sixthdesc: `In Gynecomastia surgery, the best site for incision to remove the mammary glands is in the peri-areolar (areola is the small dark circle around the nipple) area, within the junction of dark skin of areola and the surrounding light skin. We feel the incision should not go beyond the boundary of areola irrespective of the size of the breast.

          In our practice, we have never gone beyond the areola circle. The scar remains very well camouflaged at the junction of the dark skin with the light skin. Over a period of time, it gets lighter and lighter. Cosmetic results are always excellent. The following pictures illustrate this aspect.`,
        seventhhead: "WRONG INCISIONS & BAD SCARS",
        seventhdesc:
          "We often see a large number of patients operated elsewhere, who have received such ugly scars. These young men came to us for a revision of previous surgery, removal of residual gland or fat tissue or removal of these scars. Revision surgeries are always difficult because previous surgery leaves behind a distorted anatomy, uneven tissue and bad scarring inside."
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
          image={require("assets/img/TreatmentSections/MaleBreast/ImportantIssueOfScars/BG.jpg")}
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
