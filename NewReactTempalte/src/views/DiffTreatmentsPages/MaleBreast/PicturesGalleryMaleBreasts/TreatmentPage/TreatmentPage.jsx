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

import image1 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/1.jpg";
import image2 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/2.jpg";
import image3 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/3.jpg";
import image4 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/4.jpg";
import image5 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/5.jpg";
import image6 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/6.jpg";
import image7 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/7.jpg";
import image8 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/8.jpg";
import image9 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/9.jpg";
import image10 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/10.jpg";
import image11 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/11.jpg";
import image12 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/12.jpg";
import image13 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/13.jpg";
import image14 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/14.jpg";
import image15 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/15.jpg";
import image16 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/16.jpg";
import image17 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/17.jpg";
import image18 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/18.jpg";
import image19 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/19.jpg";
import image20 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/20.jpg";
import image21 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/21.jpg";
import image22 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/22.jpg";
import image23 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/23.jpg";
import image24 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/24.jpg";
import image25 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/25.jpg";
import image26 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/26.jpg";
import image27 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/27.jpg";
import image28 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/28.jpg";
import image29 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/29.jpg";
import image30 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/30.jpg";
import image31 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/31.jpg";
import image32 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/32.jpg";
import image33 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/33.jpg";
import image34 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/34.jpg";
import image35 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/35.jpg";
import image36 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/36.jpg";
import image37 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/37.jpg";
import image38 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/38.jpg";
import image39 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/39.jpg";
import image40 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/40.jpg";
import image41 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/41.jpg";
import image42 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/42.jpg";
import image43 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/43.jpg";
import image44 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/44.jpg";
import image45 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/45.jpg";
import image46 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/46.jpg";
import image47 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/47.jpg";
import image48 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/48.jpg";
import image49 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/49.jpg";
import image50 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/50.jpg";
import image51 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/51.jpg";
import image52 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/52.jpg";
import image53 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/53.jpg";
import image54 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/54.jpg";
import image55 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/55.jpg";
import image56 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/56.jpg";
import image57 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/57.jpg";
import image58 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/58.jpg";
import image59 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/59.jpg";
import image60 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/60.jpg";
import image61 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/61.jpg";
import image62 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/62.jpg";
import image63 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/63.jpg";
import image64 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/64.jpg";
import image65 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/65.jpg";
import image66 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/66.jpg";
import image67 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/67.jpg";
import image68 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/68.jpg";
import image69 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/69.jpg";
import image70 from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/GalleryImages/70.jpg";

import profilePic from "assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/RightProfileImage.png";

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
        // firsthead: "Male Breast Reduction Surgery(Gynecomastia)",
        // firstdesc:
        //   "Gynecomastia has a successful surgical solution. They can be improved or rectified in a safe way through man boobs reduction surgery. VITAL CLINIC is a renowned medical facility that caters all kinds of cosmetic surgery requirements and enlarged breasts reduction is one of them.",
        // secondhead: "Cases",
        // seconddesc:
        //   "17 Years old obese boy with very heavy breasts (please note that the sides of the chest were not operated upon. Only the male breasts were treated), 21 years old patient, large glands and fat were removed, 30yrs old man, with very large Gynaecomastia. Left side was much larger than the right side. Very large glands were removed from both sides. The glands removal was complete. Conforming to before surgery physical presentation, the glands from left side were much larger than from right side. In such large sizes, there is too much skin stretch as well. This takes several months to shrink. On the left side there is more skin than on the right therefore left will appear slightly larger than right side after surgery also ,19 years old man. He had very large glands and large volume of fat. Complete flattening of the chest was achieved , 25 years old man came with large male breasts and excessive fat deposition on abdomen. Male Breasts surgery was done and liposuction of abdomen was also done.",
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
          },
          {
            src: image23
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image24
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image25
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image26
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image27
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image28
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image29
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image30
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image31
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image32
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image33
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image34
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image35
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image36
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image37
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image38
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image39
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image40
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image41
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image42
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image43
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image44
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image45
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image46
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image47
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image48
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image49
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image50
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image30
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image51
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image52
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image53
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image54
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image55
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image56
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image57
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image58
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image59
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image60
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image61
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image62
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image63
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image64
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image65
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image66
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image67
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image68
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image69
            // imagecaption: "Yellowstone National Park, United States"
          },
          {
            src: image70
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
          image={require("assets/img/TreatmentSections/MaleBreast/PicturesGalleryMaleBreasts/BG.jpg")}
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
