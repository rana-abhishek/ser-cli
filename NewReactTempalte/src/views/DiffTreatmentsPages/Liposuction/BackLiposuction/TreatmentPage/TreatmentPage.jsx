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
import image1 from "assets/img/TreatmentSections/Liposuction/BackLiposuction/GalleryImages/Image1.png";
import image2 from "assets/img/TreatmentSections/Liposuction/BackLiposuction/GalleryImages/Image2.png";

import profilePic from "assets/img/TreatmentSections/Liposuction/BackLiposuction/RightProfileImage.png";

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
        head2: "(Back Liposuction)",
        desc:
          "Awake Liposuction of Back is a cosmetic surgery procedure almost exclusively for women. The cosmetic goal is to give more shapely back so that women feel good and confident wearing dresses. In typical situations, the pressure from blouse bands causes back rolls to become very visible and ugly looking. A beautiful smooth well shaped back is a statement of beauty.Liposuction of back is done for shaping these back bulges. These are large areas and technically difficult for liposuction."
      },
      left: {
        // firsthead: "Back liposuction",
        // firstdesc:
        //   "Awake Liposuction of Back is a cosmetic surgery procedure almost exclusively for women. The cosmetic goal is to give more shapely back so that women feel good and confident wearing dresses. In typical situations, the pressure from blouse bands causes back rolls to become very visible and ugly looking. A beautiful smooth well shaped back is a statement of beauty.Liposuction of back is done for shaping these back bulges. These are large areas and technically difficult for liposuction.",
        secondhead: "Who needs Awake Liposuction of Back?",
        seconddesc:
          "Not every woman is an ideal candidate. Women who have excessively heavy looking back with heavy fat bulges are for Awake Liposuction. Such women will benefit immensely from Awake Liposuction.",
        galleryimages: [
          {
            src: image1,
            imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image2,
            imagecaption: "Yellowstone National Park, United States"
          }
        ],
        thirdhead:
          "What are the objectives of tumescent Awake Liposuction for re-shaping back?",
        thirddesc: "The objectives of Awake Liposuction of Back are twofold",
        thirdlist: [
          {
            content:
              "Firstly the Back should look slim and curvaceous going down from the neck."
          },
          {
            content:
              "Secondly there should be no hanging unattractive skin folds when the Back is exposed"
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
        sixthhead:
          "Can the person be fully awake and conversing during Back Awake Liposuction?",
        sixthdesc:
          "Tumescent technique of Awake Liposuction allows the surgery to be performed while the person is fully awake, conversing and totally pain free during the entire procedure. Tumescent Awake Liposuction is the most sought after technique in the world because it gives exceptional patient safety. Ever since it was invented tumescent technique has eliminated virtually all the side effects and complications which are potentially associated with Awake Liposuction under general anaesthesia. A woman can come in the morning after breakfast at home (Not fasting!), get the Awake Liposuction done and go home immediately after completion of the procedure!",
        seventhhead:
          "Which is the best technique of Awake Liposuction for Back?",
        seventhdesc:
          "Tumescent Awake Liposuction, totally under local anaesthesia is the best and safest way of doing Awake Liposuction for Back or for that matter, any area of the body."
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
          image={require("assets/img/TreatmentSections/Liposuction/BackLiposuction/BG.jpg")}
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
