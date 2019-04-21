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
// import image1 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfSkin/GalleryImages/1.jpg";
// import image2 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfSkin/GalleryImages/2.jpg";
// import image3 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfSkin/GalleryImages/3.jpg";
// import image4 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfSkin/GalleryImages/4.jpg";
// import image5 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfSkin/GalleryImages/5.jpg";
// import image6 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfSkin/GalleryImages/6.jpg";
// import image7 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfSkin/GalleryImages/7.jpg";
// import image8 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfSkin/GalleryImages/8.jpg";
// import image9 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfSkin/GalleryImages/9.jpg";
// import image10 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfSkin/GalleryImages/10.jpg";
// import image11 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfSkin/GalleryImages/11.jpg";
// import image12 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfSkin/GalleryImages/12.jpg";
// import image13 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfSkin/GalleryImages/13.jpg";
// import image14 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfSkin/GalleryImages/14.jpg";
// import image15 from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfSkin/GalleryImages/15.jpg";

import profilePic from "assets/img/TreatmentSections/MaleBreast/ImportantIssueOfSkin/RightProfileImage.png";

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
        firsthead: "The Important Issue of Skin",
        firstdesc: `Gynecomastia surgery involves removal of mammary glands and fat tissue from the male breasts. Surgery is confined to just this much on the part of the surgeon. However, the important question surgeon faces is- should he recommend to the patient whether excess skin should be removed at the same time or it should be dealt with at a later date.

          Skin is a dynamic tissue. It can stretch and shrink. Skin stretches due to factors like excessive fat deposition underneath as in obesity, large amount of fat and glandular tissue as in male breasts or Gynecomastia, due to excessive muscles development as in body builders and due to overall tissue stretching as in pregnancy. Skin can stretch greatly draping large volumes of underlying mammary glands and fat deposits but, it may not shrink back completely if it has lost its tone due to excessive stretching. It is only up to a limit beyond that a stretched skin will not shrink back completely on its own after male breast surgery. Surgeon may have to perform an additional surgery to remove the excessive, toneless residual skin. The important question is, when this surgery should be performed? On this issue there is a wide variance in opinion of surgeons based upon their own experiences.`,
        secondhead:
          "Our approach on treatment of skin that has not shrunk back after surgery",
        seconddesc: `In our experience, the skin in small and moderate sized male breasts and often in large male breasts shrinks back almost completely. In such cases skin does not sag once the healing is complete. Besides, some degree of skin shrinkage continues even up to a year after surgery. We will be able to tell you after examination how much likely skin shrinkage you should expect post-surgery.

          We feel removing excess skin at the time of primary male breasts surgery is ill advised. In our practice we let the skin shrink to full extent naturally and deal with residual skin after six months or a year. It is our experience that only in very rare instances residual skin removal surgery is required. Your surgeon may also give you some advice on how to promote shrinkage of residual skin through non-surgical means.
          
          The situation is different in conditions where there is complete chest tissue sagging after massive weight loss after bariatric surgery or through lifestyle management. A distinction must be made between true Gynecomastia and sagging of folds of skin all over the body including chest after bariatric surgery. Treatment is different in the two situations which you can discuss with your cosmetic surgeon during your consultation.`
        // galleryimages: [
        //   {
        //     src: image1
        //     // imagecaption: "Yellowstone National Park, United States"
        //   },
        //   {
        //     src: image2
        //     // imagecaption: "Yellowstone National Park, United States"
        //   },
        //   {
        //     src: image3
        //     // imagecaption: "Yellowstone National Park, United States"
        //   },
        //   {
        //     src: image4
        //     // imagecaption: "Yellowstone National Park, United States"
        //   },
        //   {
        //     src: image5
        //     // imagecaption: "Yellowstone National Park, United States"
        //   },
        //   {
        //     src: image6
        //     // imagecaption: "Yellowstone National Park, United States"
        //   },
        //   {
        //     src: image7
        //     // imagecaption: "Yellowstone National Park, United States"
        //   },
        //   {
        //     src: image8
        //     // imagecaption: "Yellowstone National Park, United States"
        //   },
        //   {
        //     src: image9
        //     // imagecaption: "Yellowstone National Park, United States"
        //   },
        //   {
        //     src: image10
        //     // imagecaption: "Yellowstone National Park, United States"
        //   },
        //   {
        //     src: image11
        //     // imagecaption: "Yellowstone National Park, United States"
        //   },
        //   {
        //     src: image12
        //     // imagecaption: "Yellowstone National Park, United States"
        //   },
        //   {
        //     src: image13
        //     // imagecaption: "Yellowstone National Park, United States"
        //   },
        //   {
        //     src: image14
        //     // imagecaption: "Yellowstone National Park, United States"
        //   },
        //   {
        //     src: image15
        //     // imagecaption: "Yellowstone National Park, United States"
        //   }
        // ]
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
          image={require("assets/img/TreatmentSections/MaleBreast/ImportantIssueOfSkin/BG.jpg")}
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
