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
import image1 from "assets/img/TreatmentSections/Liposuction/LoveHandlesLiposuction/GalleryImages/love-1.jpg";
import image2 from "assets/img/TreatmentSections/Liposuction/LoveHandlesLiposuction/GalleryImages/love-2.jpg";
import image3 from "assets/img/TreatmentSections/Liposuction/LoveHandlesLiposuction/GalleryImages/love-3.jpg";
import image4 from "assets/img/TreatmentSections/Liposuction/LoveHandlesLiposuction/GalleryImages/love-4.jpg";
import image5 from "assets/img/TreatmentSections/Liposuction/LoveHandlesLiposuction/GalleryImages/love-5.jpg";
import image6 from "assets/img/TreatmentSections/Liposuction/LoveHandlesLiposuction/GalleryImages/love-6.jpg";
import image7 from "assets/img/TreatmentSections/Liposuction/LoveHandlesLiposuction/GalleryImages/love-7.jpg";
import image8 from "assets/img/TreatmentSections/Liposuction/LoveHandlesLiposuction/GalleryImages/love-8.jpg";
import image9 from "assets/img/TreatmentSections/Liposuction/LoveHandlesLiposuction/GalleryImages/love-9.jpg";
import image12 from "assets/img/TreatmentSections/Liposuction/LoveHandlesLiposuction/GalleryImages/love-12.jpg";
import image13 from "assets/img/TreatmentSections/Liposuction/LoveHandlesLiposuction/GalleryImages/love-13.jpg";

import profilePic from "assets/img/TreatmentSections/Liposuction/LoveHandlesLiposuction/RightProfileImage.png";

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
        head2: "(Love handles, hips, side bags liposuction)",
        desc:
          "AWAKE LIPOSUCTION by the tumescent technique, totally under local anaesthesia where the patient is awake and conversing throughout the procedure, is unquestionably the safest method of doing body sculpting. More and more men and women are resorting to AWAKE LIPOSUCTION as the last resort to get rid of those obstinate, resistant fat deposits. Buns (outer thighs or side-bags), Bums (buttocks or hips) and Love-handles (Iliac rolls) are the prime areas which need correction."
      },
      left: {
        // firsthead: "Love handles, hips, side bags liposuction",
        // firstdesc:
        //   "AWAKE LIPOSUCTION by the tumescent technique, totally under local anaesthesia where the patient is awake and conversing throughout the procedure, is unquestionably the safest method of doing body sculpting. More and more men and women are resorting to AWAKE LIPOSUCTION as the last resort to get rid of those obstinate, resistant fat deposits. Buns (outer thighs or side-bags), Bums (buttocks or hips) and Love-handles (Iliac rolls) are the prime areas which need correction.",
        secondhead: "Why it is so difficult to get rid of BUNS or SIDE BAGS?",
        seconddesc:
          "Genetically in some women Buns or side bags have an abnormally large and dense deposition of fat cells and tough strands of fibrous tissue interspersed. This architecture gives them greater density and firmness than the surrounding fat layers. Often buns are like tennis balls or even as big as watermelons! This ‘dense’ nature of buns makes them very resistant to ordinary levels of exercise. They may reduce to some extent by strenuous exercises but are the first to enlarge again whenever some weight gain happens.",
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
            src: image12
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image13
            // imagecaption: "Yellowstone National Park, United States"
          }
        ],
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
        sixthhead:
          "Can they be removed by AWAKE LIPOSUCTION totally under local anaesthesia?",
        sixthdesc:
          "Side-bags (outer thighs) can be permanently removed by tumescent technique of AWAKE LIPOSUCTION under local anaesthesia. It takes about two to three hours to remove them and do aesthetic sculpturing of the thighs. A woman can come in the morning after breakfast at home (Not fasting!), get the AWAKE LIPOSUCTION done and go home immediately after AWAKE LIPOSUCTION! Hardly any follow up is required.",
        seventhhead:
          "Is it possible to reduce the backward projection of hips and sideways protrusion of ‘love-handles’?",
        seventhdesc:
          "‘Love-handles’ (areas above the hips and lying on the flare of the hip bone) give a wider look to a woman’s middle portion when seen from behind. They appear as if some bags have been kept on the waistline. Hips or bums give ‘backward’ projection to the middle portion of body. AWAKE LIPOSUCTION is very useful in removing ‘bums’ and ‘love-handles’. Shaping of these areas gives a woman great cosmetic satisfaction. In fact, AWAKE LIPOSUCTION of these areas gives very pleasing and aesthetically appealing shape to the middle heavy women."
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
          image={require("assets/img/TreatmentSections/Liposuction/LoveHandlesLiposuction/BG.jpg")}
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
