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
import image1 from "assets/img/TreatmentSections/MaleBreast/SurferyForIncompleteGynecomastia/GalleryImages/1.jpg";
import image2 from "assets/img/TreatmentSections/MaleBreast/SurferyForIncompleteGynecomastia/GalleryImages/2.jpg";
import image3 from "assets/img/TreatmentSections/MaleBreast/SurferyForIncompleteGynecomastia/GalleryImages/3.jpg";
import image4 from "assets/img/TreatmentSections/MaleBreast/SurferyForIncompleteGynecomastia/GalleryImages/4.jpg";
import image5 from "assets/img/TreatmentSections/MaleBreast/SurferyForIncompleteGynecomastia/GalleryImages/5.jpg";
import image6 from "assets/img/TreatmentSections/MaleBreast/SurferyForIncompleteGynecomastia/GalleryImages/6.jpg";
import image7 from "assets/img/TreatmentSections/MaleBreast/SurferyForIncompleteGynecomastia/GalleryImages/7.jpg";
import image8 from "assets/img/TreatmentSections/MaleBreast/SurferyForIncompleteGynecomastia/GalleryImages/8.jpg";
import image9 from "assets/img/TreatmentSections/MaleBreast/SurferyForIncompleteGynecomastia/GalleryImages/9.jpg";
import image10 from "assets/img/TreatmentSections/MaleBreast/SurferyForIncompleteGynecomastia/GalleryImages/10.jpg";
import image11 from "assets/img/TreatmentSections/MaleBreast/SurferyForIncompleteGynecomastia/GalleryImages/11.jpg";
import image12 from "assets/img/TreatmentSections/MaleBreast/SurferyForIncompleteGynecomastia/GalleryImages/12.jpg";
import image13 from "assets/img/TreatmentSections/MaleBreast/SurferyForIncompleteGynecomastia/GalleryImages/13.jpg";
import image14 from "assets/img/TreatmentSections/MaleBreast/SurferyForIncompleteGynecomastia/GalleryImages/14.jpg";
import image15 from "assets/img/TreatmentSections/MaleBreast/SurferyForIncompleteGynecomastia/GalleryImages/15.jpg";
import image16 from "assets/img/TreatmentSections/MaleBreast/SurferyForIncompleteGynecomastia/GalleryImages/16.jpg";
import image17 from "assets/img/TreatmentSections/MaleBreast/SurferyForIncompleteGynecomastia/GalleryImages/17.jpg";
import image18 from "assets/img/TreatmentSections/MaleBreast/SurferyForIncompleteGynecomastia/GalleryImages/18.jpg";
import image19 from "assets/img/TreatmentSections/MaleBreast/SurferyForIncompleteGynecomastia/GalleryImages/19.jpg";
import image20 from "assets/img/TreatmentSections/MaleBreast/SurferyForIncompleteGynecomastia/GalleryImages/20.jpg";
import image21 from "assets/img/TreatmentSections/MaleBreast/SurferyForIncompleteGynecomastia/GalleryImages/21.jpg";
import image22 from "assets/img/TreatmentSections/MaleBreast/SurferyForIncompleteGynecomastia/GalleryImages/22.jpg";

import profilePic from "assets/img/TreatmentSections/MaleBreast/SurferyForIncompleteGynecomastia/RightProfileImage.png";

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
        firsthead:
          "Revision Surgery for Previous Incomplete Gynecomastia Surgery",
        firstdesc: `We are visited by many patients who have undergone Gynecomastia surgery in other places who are not happy with the results of their previous surgery. There is usually residual tissue, either fat or mammary glands or both. As a result, the chest looks asymmetrical and bulging. It may be on one side or both. Corrective surgery in such patients is usually difficult.

          During liposuction or dissection for glands, the normal anatomy of the breasts gets disturbed. The normal planes of dissection which are usually available during the first surgery get completely distorted. Islands of residual patches of fat and glands tissue result due to incomplete removal. These areas are separated by dense fibrous tissue. Revision surgeries are always a challenge to the surgeon.
          
          Almost always, complete surgery has to be re-done to give a desired result. Residual mammary glands tissues along with whatever fat has been left behind has to be removed by liposuction. Tumescent Awake technique gives excellent results in all such cases because of the bloodless nature of the surgery. Below are some examples of the corrective surgeries which we do quite often.`,
        // secondhead: "Cases",
        // seconddesc:
        //   "This patient came for checkup for the residual breast tissue after a surgery that was performed six months earlier. There were two badly placed scars, a horizontal one on right side and a long elliptical on the left side. There were residual fat and gland on both sides. Surgery was done. All residual gland and fat were removed from both sides. Revision surgery for the wide scar on right was also done.",
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
          }
        ]
        // thirdhead:
        //   "Tumescent Liposuction: Female Belly Totally Under Local Anaesthesia",
        // thirddesc:
        //   "Introduction: Abnormal fat deposits on the BELLY are very difficult to reduce with diet control and routine exercises. Female belly with excessive fat deposits presents in various forms and special situations",
        // thirdlist: [
        //   {
        //     content: "Small lower belly bulge in a young woman"
        //   },
        //   {
        //     content: "Big belly bulge, upper and lower without a 'hang'"
        //   },
        //   {
        //     content:
        //       "Hanging lower belly- often the upper belly is so big as to hang over the navel"
        //   },
        //   {
        //     content:
        //       "Belly with scars like after operations – caesarean section and other abdominal surgeries"
        //   },
        //   {
        //     content:
        //       "Loose and hanging belly after excessive weight loss- the skin does not shrink adequately due to loss of tone and stretch marks."
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
        //   "Can the person be fully awake and conversing during Back Awake Liposuction?",
        // sixthdesc:
        //   "Tumescent technique of Awake Liposuction allows the surgery to be performed while the person is fully awake, conversing and totally pain free during the entire procedure. Tumescent Awake Liposuction is the most sought after technique in the world because it gives exceptional patient safety. Ever since it was invented tumescent technique has eliminated virtually all the side effects and complications which are potentially associated with Awake Liposuction under general anaesthesia. A woman can come in the morning after breakfast at home (Not fasting!), get the Awake Liposuction done and go home immediately after completion of the procedure!",
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
          image={require("assets/img/TreatmentSections/MaleBreast/SurferyForIncompleteGynecomastia/BG.jpg")}
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
