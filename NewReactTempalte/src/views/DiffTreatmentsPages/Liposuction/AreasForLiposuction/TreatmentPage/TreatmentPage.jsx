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
import image1 from "assets/img/TreatmentSections/Liposuction/AreasForLiposuction/GalleryImages/Image1.jpg";
// import image2 from "assets/img/TreatmentSections/Liposuction/AreasForLiposuction/GalleryImages/Image2.jpg";
// import image3 from "assets/img/TreatmentSections/Liposuction/AreasForLiposuction/GalleryImages/Image3.jpg";

import profilePic from "assets/img/TreatmentSections/Liposuction/AreasForLiposuction/RightProfileImage.png";

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
        head2: "(Areas of Liposuction)",
        desc: `Awake Liposuction is an excellent cosmetic surgery
        procedure for PERMANENT BODY SHAPING. Fat is removed
        from fat deposits between skin and muscles in a
        planned, systematic and symmetrical way to give a
        shapely body. It is an artistic work. It is like
        sculpting the body!`
      },
      left: {
        firsthead: "Areas for liposuction",
        firstdesc: `Liposuction is performed for any external body area where there is excessive fat deposition. It should be understood that liposuction is not a replacement for a healthy life style. It is only for shaping and reducing those stubborn or resistant areas, which do not respond to healthy diet control and exercise.

        `,
        // secondhead: "Which is the best technique of liposuction?",
        // seconddesc:
        //   "AWAKE TUMESCENT Liposuction is the best and safest way of doing liposuction. A large volume of very dilute local anaesthetic solution is infiltrated painlessly into the fat layer under the skin. This fluid contains medicines which constrict the blood vessels. This results in virtually nil blood loss during liposuction by the tumescent technique. This technique eliminates the need for general anaesthesia or heavy sedation during or after liposuction. The painless state remains for several hours after surgery and thereafter there is minimal pain or discomfort.",
        galleryimages: [
          {
            src: image1,
            imagecaption: "Yellowstone National Park, United States"
          }
        ],
        thirdhead:
          "What are the advantages of AWAKE TUMESCENT LIPOSUCTION over other techniques?",
        // thirddesc:
        //   "There are several unmatched and unique benefits when liposuction is done by AWAKE TUMESCENT technique.",
        thirdlist: [
          {
            content: "Abdomen- upper and lower"
          },
          {
            content: "Love handles or iliac rolls"
          },
          {
            content: "Hips"
          },
          {
            content: "Back (back-rolls)"
          },
          {
            content: "Arms (almost always for upper arms)"
          },
          {
            content: "Outer thighs or Side bags/ riding breeches/"
          },
          {
            content: "Thighs- front, inner and outer"
          },
          {
            content: "Knees"
          },
          {
            content: "Legs"
          },
          {
            content: "Face and neck including double-chin"
          },
          {
            content: "Breasts"
          }
        ]
        // tabshead:
        //   "Is it possible to perform AWAKE LIPOSUCTION on any area of the body by tumescent technique?",
        // tabsdesc:
        //   "Yes. AWAKE Liposuction by tumescent technique can be performed on any area of the body like, belly, hips, thighs, back, arms, face and neck.",
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
        // ],
        // sixthhead:
        //   "Can major surgeries like Abdominoplasty (tummy-tuck), breast reduction in women, Body Contouring Surgery after massive weight loss etc be done under local anaesthesia by AWAKE method?",
        // sixthdesc:
        //   "It is in fact the safest and best way to do Total Abdominoplasty, Brachioplasty (arms-lift), Thighs lift, Breast Reduction and Lift. There is no need to give general anaesthesia when even such major surgeries are done by the tumescent technique. Surgery can be painless and bloodless and in almost all cases, patient goes home immediately after operation. Advised rest can be taken in the comfort of one’s own home.",
        // seventhhead:
        //   "Can SIX PACK ABS surgery be done under AWAKE TUMESCENT technique?",
        // seventhdesc:
        //   "SIX PACK ABS in men or TWIN PACKS in women by HIGH DEFINITION LIPOSUCTION is a very advanced and precise form of liposuction surgery. It can be very safely performed totally under tumescent local anaesthesia by the AWAKE TUMESCENT technique and the patient may go home immediately after surgery.",
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
        firstdesc: `Awake Liposuction is an excellent cosmetic surgery
        procedure for PERMANENT BODY SHAPING. Fat is removed
        from fat deposits between skin and muscles in a
        planned, systematic and symmetrical way to give a
        shapely body. It is an artistic work. It is like
        sculpting the body!`,
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
          image={require("assets/img/TreatmentSections/Liposuction/AreasForLiposuction/BG.jpg")}
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
