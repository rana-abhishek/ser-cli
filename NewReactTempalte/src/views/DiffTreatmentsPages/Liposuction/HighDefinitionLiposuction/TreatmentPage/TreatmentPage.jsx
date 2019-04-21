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
import image1 from "assets/img/TreatmentSections/Liposuction/HighDefinitionLiposuction/GalleryImages/Image1.jpg";
import image2 from "assets/img/TreatmentSections/Liposuction/HighDefinitionLiposuction/GalleryImages/Image2.jpg";

import profilePic from "assets/img/TreatmentSections/Liposuction/HighDefinitionLiposuction/RightProfileImage.png";

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
        head2: "(High Definition Liposuction)",
        desc:
          "VITAL CLINIC now brings another revolution in Liposuction surgery in India by introducing HIGH DEFINITION LIPOSUCTION© for instant SIX PACKS ABDOMEN in men and TWO PACKS ABDOMEN in women. Some of the most popular film stars in India also seem to have acquired Instant Six Pack Abs Surgery through liposuction."
      },
      left: {
        // firsthead: "High Definition Liposuction",
        // firstdesc:
        //   "VITAL CLINIC now brings another revolution in Liposuction surgery in India by introducing HIGH DEFINITION LIPOSUCTION© for instant SIX PACKS ABDOMEN in men and TWO PACKS ABDOMEN in women. Some of the most popular film stars in India also seem to have acquired Instant Six Pack Abs Surgery through liposuction.",
        secondhead:
          "Another first from VITAL CLINIC: The Premier Liposuction Clinic in India",
        seconddesc:
          "Liposuction is getting popular in India as it is all over the world. Surgeons have described different ways of doing liposuction, each with slight modifications or innovations. However, till date no technique of liposuction comes anywhere near Tumescent Technique in considerations of safety and results. Liposuction was first introduced in France by Ilouz and then he introduced in USA. The popularity of liposuction has increased all over the world ever since. Next advancement in Liposuction came when Dr Jeffrey Klein an American Dermatology surgeon described the Tumescent technique. It has since revolutionized and transformed Liposuction surgery. There is virtually no blood loss and the potential risks of general anaesthesia have been completely eliminated. VITAL CLINIC introduced the classical and true tumescent technique, as described by Dr. Jeffrey Klein, the inventor of Tumescent Technique, for the first time in India in 1999.",
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
        sixthhead: "So, who are the candidates for this surgery?",
        sixthdesc:
          "Ideally the most suitable persons are those who exercise regularly, have good skin tone and have a commitment to a healthy lifestyle.It is a common frustration for gym going young men and women who in spite of regular exercises are not able to get well defined abs ‘biscuits’. HIGH DEFINITION LIPOSUCTION© can now give those cherished SIX PACKS & EIGHT PACKS in men & TWO PACKS in women.If patients have more fat then they may first undergo Tumescent Liposuction of the abdomen and then get well defined PACKS by HIGH DEFINITION LIPOSUCTION©. Best part is that this highly advanced surgery of HIGH DEFINITION LIPOSUCTION© is being done by Tumescent technique in VITAL CLINIC for high safety and excellent results.After the procedure thin strips of cotton and gauge are taped down on the operated area for six days as compression dressing. After one week the dressing is changed and a fresh one applied for another week. A six pack abdomen gives immense satisfaction and motivation towards regular exercise and fitness. These SIX PACKS/TWO PACKS will get better and better as more muscle mass is acquired through regular exercise. This is the power of HIGH DEFINITION LIPOSUCTION©."
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
          image={require("assets/img/TreatmentSections/Liposuction/HighDefinitionLiposuction/BG.jpg")}
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
