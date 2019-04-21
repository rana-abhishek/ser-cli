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
import image1 from "assets/img/TreatmentSections/RootActiv/RootActiv/GalleryImages/Image1.png";
import image2 from "assets/img/TreatmentSections/RootActiv/RootActiv/GalleryImages/Image2.png";

import profilePic from "assets/img/TreatmentSections/RootActiv/RootActiv/RightProfileImage.png";

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
        head: "ROOTActiv",
        desc: `Our blood contains red component of Red Blood Cells, which blood cells, platelets and yellow component called Plasma. There are several growth factors in blood which are contained in Plasma. Activated Platelets and Growth Factors from the plasma part of blood are now used to induce growth of hair on scalp. ROOTActiv is a very popular treatment at VITAL CLINIC where some very good results are being achieved for a large number of hair loss or hair deficient patients.`
      },
      left: {
        firsthead: "PRP treatment for Hair growth",
        firstdesc: `ROOTActiv is a PRP treatment for Hair growth, scalp rejuvenation and stimulation of hair root follicles. PRP treatment is a rapidly growing and popular treatment all over the world. However, it is a complex treatment and is available only in select few clinics all over the world. The separated and activated growth factors are targeted directly on the follicular roots to stimulate their health and allow them to grow. It is a medical treatment and is conducted under supervision of doctors.`,
        secondhead: "What is ROOTActiv PRP treatment?",
        seconddesc: `ROOTActiv PRP causes miniaturized hair follicles to become healthier and larger, producing healthier hair growth. ROOTActiv activates follicular progenitor cells (adult stem cells) and ROOTActiv is loaded with growth factors that promote rapid angiogenesis (development of new blood vessels) and localized cell growth. Effective for both male and female pattern hair loss, ROOTActiv has also regrown hair in alopecia (hair deficient) area, deficient hair in the eyebrows and in other patients who have non-hereditary hair loss.
        New hair growth can be seen as early as 2 months, but is typically evident between 5-8 months and will continue to improve up to a year after treatment.`,
        galleryimages: [
          {
            src: image2,
            imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image1,
            imagecaption: "Yellowstone National Park, United States"
          }
        ],
        thirdhead: "Conditions of ROOTActiv treatment",
        thirddesc: "Under which conditions ROOTActiv treatment is beneficial?",
        thirdlist: [
          {
            content: "It prevents further hair loss"
          },
          {
            content:
              "Allows regrowth of thinning and dying hair roots as a result the hair become thicker and fuller."
          },
          {
            content: "The hair density improves in cases of low hair density"
          },
          {
            content:
              "In many cases it has been seen that even very hair deficient areas of scalp, if treated several times with ROOTActiv can show resurgent hair growth"
          },
          {
            content:
              "Promotes the recovery and growth of transplanted hair roots in hair transplantation surgery"
          },
          {
            content:
              "Reduces the shock-loss of transplanted hair follicles in hair replacement surgeries"
          }
        ],
        thirdhead2: "How is ROOTActiv performed?",
        thirddesc2:
          "The entire process of doing ROOTActiv PRP treatment for Hair takes approximately one hour.",
        thirdlist2: [
          {
            content: "10-20mL of blood is extracted."
          },
          {
            content:
              "The blood is then centrifuged for few minutes. This separates the blood components in distinct layers of Red Blood Cells, white blood cells and yellowish colored platelets rich plasma"
          },
          {
            content:
              "The separated platelet rich plasma is then injected in the target area."
          }
        ],
        tabshead: "PRP treatment",
        tabsdesc:
          "At Vital Clinic ROOTActiv PRP treatment is a very important tool for the following conditions",
        tabsitems: [
          {
            title: "Male Pattern Hair Loss",
            content:
              "it is quite effective especially in the early stages of balding, or anytime when thinning of hair is noticed"
          },
          {
            title: "Female Pattern Hair Loss",
            content: "at all stages of hair loss"
          },
          {
            title: "Fine/reduced hairs of the eyebrows or beard",
            content:
              "in medical conditions like Alopecia Areata or Alopecia Totalis which are very resistant to conventional medical treatment"
          },
          {
            title: "Hair loss",
            content: "due to iron deficiency or drug induced hair loss"
          }
        ],
        sixthhead: "ROOTActiv PRP treatment",
        sixthdesc: `ROOTActiv PRP causes miniaturized hair follicles to become healthier and larger, producing healthier hair growth. ROOTActiv activates follicular progenitor cells (adult stem cells) and ROOTActiv is loaded with growth factors that promote rapid angiogenesis and localized cell growth. Effective for both male and female pattern hair loss, ROOTActiv has also regrown hair in alopecia area, deficient hair in the eyebrows and other patient cases with non-hereditary hair loss.

          New hair growth can be seen as early as 2 months, but is typically evident between 5-8 months and will continue to improve up to a year after treatment.`
        // seventhhead: "How is ROOTActiv performed?",
        // seventhdesc: `10-20 mL of blood is extracted.
        // The blood is then centrifuged for few minutes. This separates the blood components in distinct layers of Red blood cells, White blood cells and yellowish colored platelet rich plasma
        // The separated platelet rich plasma is then injected in the target area.`
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
        firsthead: "ROOTActiv",
        firstdesc:
          "Our blood contains red component of Red Blood Cells, which blood cells, platelets and yellow component called Plasma. There are several growth factors in blood which are contained in Plasma. Activated Platelets and Growth Factors from the plasma part of blood are now used to induce growth of hair on scalp. ROOTActiv is a very popular treatment at VITAL CLINIC where some very good results are being achieved for a large number of hair loss or hair deficient patients.",
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
          image={require("assets/img/TreatmentSections/RootActiv/RootActiv/BG.jpg")}
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
