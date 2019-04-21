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

import image1 from "assets/img/TreatmentSections/Liposuction/AbdomenLiposuction/GalleryImages/1.jpg";
import image2 from "assets/img/TreatmentSections/Liposuction/AbdomenLiposuction/GalleryImages/2.jpg";
import image3 from "assets/img/TreatmentSections/Liposuction/AbdomenLiposuction/GalleryImages/3.jpg";
import image4 from "assets/img/TreatmentSections/Liposuction/AbdomenLiposuction/GalleryImages/4.jpg";
import image5 from "assets/img/TreatmentSections/Liposuction/AbdomenLiposuction/GalleryImages/5.jpg";
import image6 from "assets/img/TreatmentSections/Liposuction/AbdomenLiposuction/GalleryImages/6.jpg";
import image7 from "assets/img/TreatmentSections/Liposuction/AbdomenLiposuction/GalleryImages/7.jpg";

import profilePic from "assets/img/TreatmentSections/Liposuction/AbdomenLiposuction/RightProfileImage.png";

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
        head2: "(Abdomen Liposuction)",
        desc: `AWAKE LIPOSUCTION FOR ABDOMEN is a cosmetic surgery procedure for permanent shaping of abdomen where fat is removed from between the skin and muscles. AWAKE LIPOSUCTION FOR ABDOMEN can be very safely performed totally under local anaesthesia by the best and safest technique called Tumescent Technique.`
      },
      left: {
        // firsthead: "Abdomen: upper and lower",
        // firstdesc:
        //   "AWAKE LIPOSUCTION FOR ABDOMEN is a cosmetic surgery procedure for permanent shaping of abdomen where fat is removed from between the skin and muscles. AWAKE LIPOSUCTION FOR ABDOMEN can be very safely performed totally under local anaesthesia by the best and safest technique called Tumescent Technique.",
        secondhead: "Which is the best technique of Liposuction for Abdomen?",
        seconddesc:
          "TUMESCENT Awake Liposuction is the best and safest way of doing Liposuction for Abdomen. A large volume of very dilute local anaesthetic solution is infiltrated painlessly into the fat layer under the skin. This fluid contains medicines which constrict the blood vessels. This results in virtually nil blood loss. This technique eliminates the need for general anaesthesia or heavy sedation during or after Liposuction. The painless state remains for several hours after surgery and thereafter there is minimal pain or discomfort.",
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
          }
        ],
        thirdhead:
          "What are the advantages of TUMESCENT AWAKE LIPOSUCTION FOR ABDOMEN over other techniques?",
        thirddesc:
          "There are several unmatched and unique benefits when Liposuction for Abdomen is done by AWAKE TUMESCENT technique.",
        thirdlist: [
          {
            content:
              "It is done totally under local anaesthesia, thus eliminating the need for general/systemic anaesthesia. This removes the potential risks of general anaesthesia."
          },
          {
            content:
              "Person is awake and conversing thereby adding to the safety during surgery."
          },
          {
            content:
              "The procedure is virtually bloodless. The blood loss during surgery is negligible. High volume liposuctions can be routinely performed by tumescent technique."
          },
          {
            content:
              "There is no heat production in the fat layer or under the skin. Therefore there is no possibility of skin burns at all"
          },
          {
            content:
              "Fat embolism’, a serious life threatening situation, often reported from traditional liposuction, never happens in AWAKE TUMESCENT LIPOSUCTION"
          },
          {
            content:
              "After surgery pain is much less than any other form of liposuction."
          },
          {
            content:
              "Liposuction is performed like an OPD procedure. There is almost always no need for hospitalization."
          },
          {
            content:
              "AWAKE Tumescent liposuction has a very high safety profile which has been proven by national surveys conducted in USA by professional medical associations."
          }
        ],
        tabshead: "Abdomen: upper and lower",
        tabsdesc:
          "AWAKE LIPOSUCTION FOR ABDOMEN is a cosmetic surgery procedure for permanent shaping of abdomen where fat is removed from between the skin and muscles. AWAKE LIPOSUCTION FOR ABDOMEN can be very safely performed totally under local anaesthesia by the best and safest technique called Tumescent Technique.Are there different techniques of doing Liposuction for Abdomen? Liposuction for Abdomen is performed in different ways but, according to the anaesthesia used, there are two fundamental methods of Liposuction for Abdomen.",
        tabsitems: [
          {
            title: "Tumescent AWAKE LIPOSUCTION",
            content:
              "It is performed totally under local anaesthesia, without intravenous sedation or general anaesthesia. Person is awake and conversing while liposuction is going on."
          },
          {
            title: "Traditional form of liposuction",
            content:
              "It is performed under general anaesthesia or under deep intravenous anaesthesia. Patients may receive a limited amount of tumescent fluid infiltration."
          }
        ],
        sixthhead: "Are there other techniques of Liposuction for Abdomen?",
        sixthdesc:
          "Yes there are other forms of Liposuction for Abdomen techniques being practiced by surgeons. These are basically modifications on the equipment used or on the amount of tumescent fluid infiltrated like 'Wet' and 'Super-wet' Liposuction for Abdomen. Ultrasonic Liposuction for Abdomen employs ultrasonic energy to emulsify fat which is then removed by Liposuction for Abdomen cannula. Because of the ultrasonic energy and the production of heat in this procedure, there is always a possibility of skin burns and fluid accumulation under the skin (seroma). These are commonly performed under general anaesthesia. Laser Liposuction for Abdomen is an untested and untried method. It also produces heat under the skin and has the potential for causing skin burns. So far there are no significant studies or reviews on the advantages, if any, by this method. Liposuction for Abdomen after 'freezing' the fat called 'Cryo- Liposuction for Abdomen' is a very new development and is still an untested and untried method with no significant studies."
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
          image={require("assets/img/TreatmentSections/Liposuction/AbdomenLiposuction/BG.jpg")}
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
