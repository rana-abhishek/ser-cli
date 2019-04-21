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
import image1 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/1.jpg";
import image2 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/2.jpg";
import image3 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/3.jpg";
import image4 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/4.jpg";
import image5 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/5.jpg";
import image6 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/6.jpg";
import image7 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/7.jpg";
import image8 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/8.jpg";
import image9 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/9.jpg";
import image10 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/10.jpg";
import image11 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/11.jpg";
import image12 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/12.jpg";
import image13 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/13.jpg";
import image14 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/14.jpg";
import image15 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/15.jpg";
import image16 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/16.jpg";
import image17 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/17.jpg";
import image18 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/18.jpg";
import image19 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/19.jpg";
import image20 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/20.jpg";
import image21 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/21.jpg";
import image22 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/22.jpg";
import image23 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/23.jpg";
import image24 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/24.jpg";
import image25 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/25.jpg";
import image26 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/26.jpg";
import image27 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/27.jpg";
import image28 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/28.jpg";
import image29 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/29.jpg";
import image30 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/30.jpg";
import image31 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/31.jpg";
import image32 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/32.jpg";
import image33 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/33.jpg";
import image34 from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/GalleryImages/34.jpg";

import profilePic from "assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/RightProfileImage.png";

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
        firsthead: "Fat Removal from Chest",
        firstdesc: `Gynecomastia or ‘Male Breast’ is the presence of immature mammary glands in male chest area (in women such mature glands produce milk for breast feeding of baby after pregnancy).

          During the development of male breasts in boys, some resistant fat also gets deposited between and around the glands, giving the appearance of a female like breast. Male Breast results from an imbalance between androgen (male hormone) and estrogen (female hormone) activity. The hormonal imbalance that results in the deposition of glands in the chest areas is usually temporary and commonly occurs in boys at the time of puberty (12 – 14yrs). Once glands are laid down in the chest area, they do not regress. The cause of Male Breasts formation is hormonal in origin and not obesity (becoming fat). That is why it cannot be treated by diet control or exercise. Obesity will only increase the breast size due to increased fat deposition between and around the glands. Also, there are no medicines that can be given to treat this condition. Surgery is the only option.`,
        // secondhead: "Belly fat",
        // seconddesc:
        //   "Belly fat reduces only with regular and strenuous exercises over a prolonged period. However, long term skin shrinkage is influenced by the pre-operative condition and tone of the skin. BELLY can be reduced PERMANENTLY AND SATISFACTORILY with Liposuction. We at VITAL CLINIC are performing this surgery by the safest 'TUMESCENT TECHNIQUE'.",
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
          }
        ],
        thirdhead: `YOUNG BOYS NEED SURGERY FOR MALE BREAST AT AN EARLY AGE 
        for the following reasons`,
        thirddesc:
          "Gynecomastia or Male breasts can cause severe mental tension in boys leading to:",
        thirdlist: [
          {
            content: "Withdrawal from friends groups"
          },
          {
            content: "Reluctance to expose themselves at swimming pools"
          },
          {
            content: "Loss of interest in family group activities etc"
          },
          {
            content: "Loss of focus on studies"
          },
          {
            content:
              "Introvert personality development to the extent that some boys may go into depression as well"
          },
          {
            content: "Rarely it may lead to suicidal tendencies"
          },
          {
            content:
              "Change in posture and walk: boys start walking with drooping shoulders in an attempt to hide the chest bulge"
          },
          {
            content:
              "Quite often they start wearing tight inner wears to hide the chest bulge"
          },
          {
            content:
              "They stop participating in outdoor sports activities like walks, running, tennis"
          },
          {
            content: "Lack of confidence is very obvious in their walk"
          },
          {
            content: "They tend to sleep more on their belly"
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
        // sixthhead:
        //   "CASE HISTORIES OF SOME YOUNG BOYS OPERATED UPON FOR GYNECOMASTIA / MALE BREASTS",
        // sixthdesc: `15 yrs old boy with large ‘sagging’ breasts had very large mammary glands. One fine morning he refused to go to school unless his problem was tackled. It became almost an emergency situation for the parents. There was complete transformation in his personality after the operation.
        //   This young boy had lost interest in studies and had started withdrawing from sports activities in school. He preferred to be left alone. These symptoms were very alarming and then the parents brought him for a consultation. He was operated upon. Very large size mammary glands and large volume of fat was removed. Operation brought about a remarkable positive change in his personality. He became very friendly and started enjoying group activities. His self-confidence was restored.
        //   18 yrs old Medical College student: Before & After surgery: This young boy was admitted in a medical college and was living in a hostel. He often faced embarrassing situations and comments from his fellow students. Gradually this led to deterioration in his studies. After he was operated upon, he no longer faced embarrassing situations like before. His performance in class tests, viva and other examinations improved and he regained his lost self-confidence.`,
        seventhhead:
          "SOME ADVICE AND INFORMATION FOR PARENTS OF BOYS SUFFERING FROM MALE BREASTS",
        seventhdesc: `Boys are very secretive about their male breast problem.
          Almost always they will not share the knowledge of their problem with their parents
          Parents must know that the basic cause of male breasts is not obesity. Only the fat component of breast is increased when boys suffering from male breasts put on weight.
          Any amount of exercise for any number of years and even very strict diet control will not ‘cure’ this problem. It may reduce the size to some extent by reducing the fat from breast but, they should understand that problem is not from fat but, from the presence of mammary glands in the breasts.
          Parents’ insistence on exercise and diet control, although good for a healthy lifestyle, will not solve the problem. Rather, it may aggravate the already excessive mental stress because exercise does not help.
          A surgery/operation is the only solution for Gynecomastia /male breasts
          Liposuction alone for fat removal from breasts, will almost always fail to give a flat chest. A direct surgical removal of mammary glands is absolutely essential for best results.
          Liposuction alone works well only in some exceptional cases of ‘pseudo-Gynecomastia’ which presents in some obese males.
          If necessary, even school going young boys in the age group of 12-14 years should be operated upon if they are showing personality problems as mentioned above`
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
          image={require("assets/img/TreatmentSections/MaleBreast/MaleBreastInformation/BG.jpg")}
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
