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

import image1 from "assets/img/TreatmentSections/BreastSurgeries/BreastReduction/GalleryImages/1.jpg";
import image2 from "assets/img/TreatmentSections/BreastSurgeries/BreastReduction/GalleryImages/2.jpg";
import image3 from "assets/img/TreatmentSections/BreastSurgeries/BreastReduction/GalleryImages/3.jpg";
import image4 from "assets/img/TreatmentSections/BreastSurgeries/BreastReduction/GalleryImages/4.jpg";
import image5 from "assets/img/TreatmentSections/BreastSurgeries/BreastReduction/GalleryImages/5.jpg";
import image6 from "assets/img/TreatmentSections/BreastSurgeries/BreastReduction/GalleryImages/6.jpg";
import image7 from "assets/img/TreatmentSections/BreastSurgeries/BreastReduction/GalleryImages/7.jpg";
import image8 from "assets/img/TreatmentSections/BreastSurgeries/BreastReduction/GalleryImages/8.jpg";
import image9 from "assets/img/TreatmentSections/BreastSurgeries/BreastReduction/GalleryImages/9.jpg";
import image10 from "assets/img/TreatmentSections/BreastSurgeries/BreastReduction/GalleryImages/10.jpg";

import profilePic from "assets/img/TreatmentSections/BreastSurgeries/BreastReduction/RightProfileImage.png";

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
        head: "Breast Surgeries",
        head2: "(Breast Reduction)",
        desc: `Introduction: BREAST REDUCTION is a cosmetic surgery to reduce the size of very large breasts. Breasts become large due to hormonal influence, multiple child berths, excessive weight gain and genetic causes. The breasts sometimes become so big that they may even reach the navel. Constant heaviness on shoulders, pain in breasts in pre-menstrual phase, itching and fungal infections under the breasts are some of the common problems women face who have very large breasts. BREAST REDUCTION is a major surgery designed to reduce the breast size to normal. In fact it is a ‘total reconstruction’ of a smaller breast by removing excess skin-fat and mammary glands from a large breast. The ‘nipple-areola-complex’ is shifted up so that the nipple now faces forward rather than downwards. We at VITAL CLINIC are doing this major surgery by the safest ‘TUMESCENT AWAKE TECHNIQUE’, totally under local anesthesia.`
      },
      left: {
        // firsthead: "Breast Reduction - totally under local anesthesia",
        // firstdesc: `Introduction: BREAST REDUCTION is a cosmetic surgery to reduce the size of very large breasts. Breasts become large due to hormonal influence, multiple child berths, excessive weight gain and genetic causes. The breasts sometimes become so big that they may even reach the navel. Constant heaviness on shoulders, pain in breasts in pre-menstrual phase, itching and fungal infections under the breasts are some of the common problems women face who have very large breasts. BREAST REDUCTION is a major surgery designed to reduce the breast size to normal. In fact it is a ‘total reconstruction’ of a smaller breast by removing excess skin-fat and mammary glands from a large breast. The ‘nipple-areola-complex’ is shifted up so that the nipple now faces forward rather than downwards. We at VITAL CLINIC are doing this major surgery by the safest ‘TUMESCENT AWAKE TECHNIQUE’, totally under local anesthesia.`,
        secondhead: "TUMESCENT AWAKE TECHNIQUE",
        seconddesc: `TUMESCENT AWAKE TECHNIQUE: There is exceptional patient safety when BREAST REDUCTION is performed by tumescent technique, totally under local anesthesia and without sedation. Tumescent Technique makes the procedure virtually bloodless and carries a very high safety profile. Patients are awake, well oriented, conversing throughout the procedure and are absolutely free from pain in the postoperative period. Patients are discharged from the clinic after an hour of surgery.

        Patients have negligible blood loss during surgery, little or nil postoperative pain, and early healing. They are back to their normal, non-strenuous activities in two to three days. TUMESCENT TECHNIQUE has introduced a new dimension in patient safety.`,
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
          }
        ],
        thirdhead:
          "Breast reduction is done by two different techniques. Patient can choose whichever method she prefers.",
        thirddesc: "Techniques are:",
        thirdlist: [
          {
            content:
              "By cutting out extra skin-fat and glands. This will leave scars on the breasts which are permanent. However, with passage of time, these scars become less and less appreciable. We are doing vertical breast reduction technique which is most modern and gives short scars"
          },
          {
            content:
              "Liposuction: the breast size can be reduced by 30%-40%. However, the breasts retain their original shape. It is a scar less surgery. There are no visible scars on the breasts. Two minute cuts of 2-3mm size only are required which are placed in hidden areas."
          }
        ],
        thirdhead2: "PLAN OF SURGERY",
        // thirddesc2: "Techniques are:",
        thirdlist2: [
          {
            content: "Picture 1: A large breast before surgery"
          },
          {
            content:
              "Picture 2: Excess skin-fat and mammary glands are removed and nipple-areola are shifted up"
          },
          {
            content:
              "Picture 3: After surgery – a smaller breast and likely position of scars"
          }
        ]
        // tabshead: "PRP treatment",
        // tabsdesc:
        //   "At Vital Clinic ROOTActiv PRP treatment is a very important tool for the following conditions",
        // tabsitems: [
        //   {
        //     title: "Male Pattern Hair Loss",
        //     content:
        //       "it is quite effective especially in the early stages of balding, or anytime when thinning of hair is noticed"
        //   },
        //   {
        //     title: "Female Pattern Hair Loss",
        //     content: "at all stages of hair loss"
        //   },
        //   {
        //     title: "Fine/reduced hairs of the eyebrows or beard",
        //     content:
        //       "in medical conditions like Alopecia Areata or Alopecia Totalis which are very resistant to conventional medical treatment"
        //   },
        //   {
        //     title: "Hair loss",
        //     content: "due to iron deficiency or drug induced hair loss"
        //   }
        // ],
        // sixthhead: "ROOTActiv PRP treatment",
        // sixthdesc: `ROOTActiv PRP causes miniaturized hair follicles to become healthier and larger, producing healthier hair growth. ROOTActiv activates follicular progenitor cells (adult stem cells) and ROOTActiv is loaded with growth factors that promote rapid angiogenesis and localized cell growth. Effective for both male and female pattern hair loss, ROOTActiv has also regrown hair in alopecia area, deficient hair in the eyebrows and other patient cases with non-hereditary hair loss.

        //   New hair growth can be seen as early as 2 months, but is typically evident between 5-8 months and will continue to improve up to a year after treatment.`
        // seventhhead:
        //   "Why it is so important to reduce side bags, hips (buttocks) and love-handles?",
        // seventhdesc:
        //   "This area is the central portion of the body. The beautiful aesthetics of a proportionate body flow upwards towards chest and downwards towards thighs from the hip area. When the middle portion is in shape, the upper and lower portions of the body also appear symmetrical, proportionate and shapely seductive. Appreciations from lookers are spontaneous. However, conversely if the middle portion is heavy and out of shape, the whole beauty of the body is destroyed. There are some interesting terms to describe a body with heavy middle as ‘pear-shape’, ‘violin-shape’ etc. For a beautiful body there should be no protruding buns, bums and love-handles. Liposuction by tumescent technique is a cent percent solution to bring these areas into proper shape. A beautiful proportionate body enhances self confidence and self esteem."
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
        firsthead: "Breast Surgeries",
        firstdesc:
          "As you prepare for Male breast reduction operation, the doctors at VITAL Clinic wants the procedure to be as smooth as possible. Experiencing unnecessary stress and anxiety is normal but if you want the before and after of your Man breast surgery to be pleasant, here are some important things to know, do and avoid.",
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
          image={require("assets/img/TreatmentSections/BreastSurgeries/BreastReduction/BG.jpg")}
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
