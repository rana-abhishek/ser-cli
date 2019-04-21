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
import image1 from "assets/img/TreatmentSections/MaleBreast/FAQsMaleBreasts/GalleryImages/1.jpg";
import image2 from "assets/img/TreatmentSections/MaleBreast/FAQsMaleBreasts/GalleryImages/2.jpg";

import profilePic from "assets/img/TreatmentSections/MaleBreast/FAQsMaleBreasts/RightProfileImage.png";

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
        firsthead: "Diagnosis of Gynecomastia",
        firstdesc:
          "Doctors at VITAL Clinic will check your drug and medical history including the health conditions running in your family. The procedure will be followed by a physical examination that includes a thorough evaluation of your genitals, abdomen, and breast tissue.",
        // secondhead: "Belly fat",
        // seconddesc:
        //   "Belly fat reduces only with regular and strenuous exercises over a prolonged period. However, long term skin shrinkage is influenced by the pre-operative condition and tone of the skin. BELLY can be reduced PERMANENTLY AND SATISFACTORILY with Liposuction. We at VITAL CLINIC are performing this surgery by the safest 'TUMESCENT TECHNIQUE'.",
        galleryimages: [
          {
            src: image1,
            imagecaption: "Diagnosis of Gynecomastia"
          },
          {
            src: image2,
            imagecaption: "Conditions similar to Gynecomastia"
          }
        ],
        // thirdhead: "Gynecomastia Tests",
        thirddesc:
          "The doctors will perform preliminary tests to determine the reason for your breast enlargement. It includes:",
        thirdlist: [
          {
            content: "Mammograms"
          },
          {
            content: "Blood tests"
          }
        ],
        // thirdhead2: "Gynecomastia Tests",
        thirddesc2:
          "If your initial tests are positive, then the doctors will perform some more tests to ensure it is Gynecomastia.",
        thirdlist2: [
          {
            content: "Tissue biopsies"
          },
          {
            content: "Testicular ultrasounds"
          },
          {
            content: "MRI Scan"
          },
          {
            content: "CT Scan"
          }
        ],
        tabshead: "Conditions similar to Gynecomastia",
        tabsdesc:
          "The doctors will want to be sure that your Man breast swelling is actually the male breast enlargement condition because there are certain conditions similar to this. Other medical conditions that have related symptoms include:",
        tabsitems: [
          {
            title: "Breast Abscess (mastitis)",
            content: " it is an infection of the male breast tissue"
          },
          {
            title: "Breast cancer",
            content:
              "breast cancer in men is uncommon but can take place. Presence of a firm nodule or swelling of one breast raises the concern for breast cancer in men"
          },
          {
            title: "Fatty breast tissue",
            content:
              "Some patients have man chest fat that resembles male breast enlargement. This condition is known as false Gynecomastia"
          }
        ],
        sixthhead: "Gynecomastia Surgery",
        sixthdesc: `If your breasts have still the bothersome swelling despite the medications and treatment, the doctor will advise surgery. Two male breast enlargement surgery options available at VITAL Clinic are 
          are 
          Mastectomy: a surgical procedure to remove breast gland tissue or
          Liposuction: a surgical procedure to remove breast fat`
        // seventhhead:
        //   "Which is the best technique of Awake Liposuction for Back?",
        // seventhdesc:
        //   "Tumescent Awake Liposuction, totally under local anaesthesia is the best and safest way of doing Awake Liposuction for Back or for that matter, any area of the body."
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
          image={require("assets/img/TreatmentSections/MaleBreast/FAQsMaleBreasts/BG.jpg")}
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
