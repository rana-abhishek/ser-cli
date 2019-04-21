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
import image1 from "assets/img/TreatmentSections/Liposuction/ArmsLiposuction/GalleryImages/Image1.jpg";
import image2 from "assets/img/TreatmentSections/Liposuction/ArmsLiposuction/GalleryImages/Image2.jpg";
import image3 from "assets/img/TreatmentSections/Liposuction/ArmsLiposuction/GalleryImages/Image3.jpg";

import profilePic from "assets/img/TreatmentSections/Liposuction/ArmsLiposuction/RightProfileImage.png";

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
        head2: "(Arms Liposuction)",
        desc:
          "Arms-Beautiful & Shapely Awake Liposuction of Arms is a cosmetic surgery procedure almost exclusively for women. The cosmetic goal is to give more shapely arms so that women feel good and confident wearing sleeveless or short sleeve dresses. In typical situations where arms are exposed and draw attention like walking, sitting on a table reading, eating or drinking, talking on a phone, attractive arms make a woman look beautiful."
      },
      left: {
        // firsthead: "Arms liposuction",
        // firstdesc:
        //   "Arms-Beautiful & Shapely Awake Liposuction of Arms is a cosmetic surgery procedure almost exclusively for women. The cosmetic goal is to give more shapely arms so that women feel good and confident wearing sleeveless or short sleeve dresses. In typical situations where arms are exposed and draw attention like walking, sitting on a table reading, eating or drinking, talking on a phone, attractive arms make a woman look beautiful.",
        secondhead: "Who needs Awake Liposuction of Arms?",
        seconddesc:
          "Not every woman is an ideal candidate. Women who have excessively heavy masculine looking arms with heavy fat bulges are for Awake Liposuction. In some women folds of fat may hang down on arms and give the appearance of a ‘bat-wing’. Such women will benefit immensely from Awake Liposuction.",
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
          "What are the objectives of tumescent Awake Liposuction for re-shaping arms?",
        thirddesc:
          "The objectives of Awake Liposuction of arms are three fold:",
        thirdlist: [
          {
            content:
              "Firstly, the arms should look slim while kept on the side of the hips."
          },
          {
            content:
              "Secondly, there should be no hanging unattractive skin folds when the arms are lifted horizontally sideways."
          },
          {
            content:
              "Thirdly, whole arm should look aesthetically pleasing. The arm (above elbow) and forearm should look well contoured and proportionate. The aim is not to make the arms excessively ‘thin’ rather, to make them look shapely, beautiful and proportionate."
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
        sixthhead: "How much area of the arms is covered by Awake Liposuction?",
        sixthdesc:
          "Approximately seventy percent of the circumference of arms is covered by Awake Liposuction. Only the inner soft part of the upper arm is not reduced by Awake Liposuction because usually the skin is very thin and not much excess fat is present in this area and secondly important nerves and blood vessels of arm run in the groove between biceps and triceps muscles. Occasionally very superficial Awake Liposuction may be done on inner side as well when arms are very heavy. Longitudinally the arm area covered is between the elbow bone and the bony prominence above the deltoid muscle. Awake Liposuction on the forearms is usually not done.",
        seventhhead:
          "Can the person be fully awake and conversing during arms Awake Liposuction?",
        seventhdesc:
          "Tumescent technique of Awake Liposuction allows the surgery to be performed while the person is fully awake, conversing and totally pain free during the entire procedure. Tumescent Awake Liposuction is the most sought after technique in the world because it gives exceptional patient safety. Ever since it was invented tumescent technique has eliminated virtually all the side effects and complications which are potentially associated with Awake Liposuction under general anaesthesia. A woman can come in the morning after breakfast at home (Not fasting!), get the Awake Liposuction done and go home immediately after completion of the procedure! Hardly any follow up is required."
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
          image={require("assets/img/TreatmentSections/Liposuction/ArmsLiposuction/BG.jpg")}
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
