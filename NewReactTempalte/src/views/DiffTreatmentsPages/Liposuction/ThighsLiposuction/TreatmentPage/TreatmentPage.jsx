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
import image1 from "assets/img/TreatmentSections/Liposuction/ThighsLiposuction/GalleryImages/Image1.jpg";
import image2 from "assets/img/TreatmentSections/Liposuction/ThighsLiposuction/GalleryImages/Image2.jpg";
import image3 from "assets/img/TreatmentSections/Liposuction/ThighsLiposuction/GalleryImages/Image3.jpg";
import image4 from "assets/img/TreatmentSections/Liposuction/ThighsLiposuction/GalleryImages/Image4.jpg";

import profilePic from "assets/img/TreatmentSections/Liposuction/ThighsLiposuction/RightProfileImage.png";

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
        head: "Liposuction",
        head2: "(Thighs Liposuction Thighs-Beautiful & Shapely)",
        desc:
          "Awake Liposuction of Thighs is a cosmetic surgery procedure almost exclusively for women. The cosmetic goal is to give more shapely thighs so that women feel good and confident wearing dresses. In typical situations where thighs are exposed and draw attention while walking or sitting, attractive thighs make a woman look beautiful.Liposuction of thighs is done for shaping – Front thighs, inner thighs, outer thighs and knees."
      },
      left: {
        // firsthead: "Thighs Liposuction Thighs-Beautiful & Shapely",
        // firstdesc:
        //   "Awake Liposuction of Thighs is a cosmetic surgery procedure almost exclusively for women. The cosmetic goal is to give more shapely thighs so that women feel good and confident wearing dresses. In typical situations where thighs are exposed and draw attention while walking or sitting, attractive thighs make a woman look beautiful.Liposuction of thighs is done for shaping – Front thighs, inner thighs, outer thighs and knees.",
        secondhead: "Who needs Awake Liposuction of Thighs?",
        seconddesc:
          "Not every woman is an ideal candidate. Women who have excessively heavy looking Thighs with heavy fat bulges are for Awake Liposuction. Such women will benefit immensely from Awake Liposuction.",
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
        ],
        thirdhead:
          "What are the objectives of tumescent Awake Liposuction for re-shaping Thighs?",
        thirddesc:
          "The objectives of Awake Liposuction of Thighs are three fold",
        thirdlist: [
          {
            content:
              "Firstly, the Thighs should look slim going down from the hips."
          },
          {
            content:
              "Secondly, there should be no hanging unattractive skin folds when the Thighs are lifted horizontally sideways."
          },
          {
            content:
              "Thirdly, whole thigh should look aesthetically pleasing. Thighs and legs should look well contoured and proportionate. The aim is not to make the Thighs excessively ‘thin’ rather, to make them look shapely, beautiful and proportionate."
          }
          // {
          //   content:
          //     "Belly with scars like after operations – caesarean section and other abdominal surgeries"
          // },
          // {
          //   content:
          //     "Loose and hanging belly after excessive weight loss- the skin does not shrink adequately due to loss of tone and stretch marks."
          // }
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
        sixthhead:
          "Can the person be fully awake and conversing during Thighs Awake Liposuction?",
        sixthdesc:
          "Tumescent technique of Awake Liposuction allows the surgery to be performed while the person is fully awake, conversing and totally pain free during the entire procedure. Tumescent Awake Liposuction is the most sought after technique in the world because it gives exceptional patient safety. Ever since it was invented tumescent technique has eliminated virtually all the side effects and complications which are potentially associated with Awake Liposuction under general anaesthesia. A woman can come in the morning after breakfast at home (Not fasting!), get the Awake Liposuction done and go home immediately after completion of the procedure!",
        seventhhead:
          "Which is the best technique of Awake Liposuction for Thighs?",
        seventhdesc:
          "Tumescent Awake Liposuction, totally under local anaesthesia is the best and safest way of doing Awake Liposuction for Thighs or for that matter, any area of the body."
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
        firsthead: "About Liposuction",
        firstdesc: `Awake Liposuction is an excellent cosmetic surgery procedure for PERMANENT BODY SHAPING. Fat is removed from fat deposits between skin and muscles in a planned, systematic and symmetrical way to give a shapely body. It is an artistic work. It is like sculpting the body!`,
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
          image={require("assets/img/TreatmentSections/Liposuction/ThighsLiposuction/BG.jpg")}
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
