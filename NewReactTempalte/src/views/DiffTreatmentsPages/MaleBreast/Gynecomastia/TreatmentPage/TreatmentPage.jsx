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
import image1 from "assets/img/TreatmentSections/MaleBreast/Gynecomastia/GalleryImages/Image1.jpg";
// import image2 from "assets/img/TreatmentSections/MaleBreast/Gynecomastia/GalleryImages/Image2.jpg";
// import image3 from "assets/img/TreatmentSections/MaleBreast/Gynecomastia/GalleryImages/Image3.jpg";

import profilePic from "assets/img/TreatmentSections/MaleBreast/Gynecomastia/RightProfileImage.png";

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
        head: "Male Breast Reduction Surgery (Gynecomastia)",
        head2: "(Gynecomastia General Information)",
        desc: `Incidence of Gyno / Gynecomastia is very high. Almost 25-30% of boys suffer from this condition. It can be a very psychologically disturbing condition as boys are supposed to have flat, muscular chest. Breasts are not at all appropriate on boys’ chest.`
      },
      left: {
        firsthead: "Factors that lead to male breast enlargement",
        firstdesc: `Gynecomastia may go-away on its own. But if it persists, man boobs surgery or medication may help.`,
        // secondhead: "Belly fat",
        // seconddesc:
        //   "Belly fat reduces only with regular and strenuous exercises over a prolonged period. However, long term skin shrinkage is influenced by the pre-operative condition and tone of the skin. BELLY can be reduced PERMANENTLY AND SATISFACTORILY with Liposuction. We at VITAL CLINIC are performing this surgery by the safest 'TUMESCENT TECHNIQUE'.",
        galleryimages: [
          {
            src: image1,
            imagecaption: "Yellowstone National Park, United States"
          }
          // },
          // {
          //   src: image2,
          //   imagecaption: "Yellowstone National Park, United States"
          // },
          // {
          //   src: image3,
          //   imagecaption: "Yellowstone National Park, United States"
          // }
        ],
        thirdhead: "What are the symptoms of male breast enlargement?",
        thirddesc: "Symptoms:",
        thirdlist: [
          {
            content: "Breast tenderness"
          },
          {
            content: "Swollen breast glands"
          }
        ],
        thirdhead2: "When to see a doctor?",
        // thirddesc2: "Symptoms:",
        thirdlist2: [
          {
            content: "Nipple discharge"
          },
          {
            content: "Tenderness"
          },
          {
            content: "Pain"
          },
          {
            content: "Swelling"
          }
        ],

        thirdhead3: "Medications that leads to male breast enlargement",
        thirddesc3:
          "Doctors at VITAL Clinic suggest that a number of medications can trigger man breasts enlargement. Some of them include:",
        thirdlist3: [
          {
            content: "Androgens and anabolic steroids"
          },
          {
            content:
              "Anti-androgens used to treat prostate cancer, prostate enlargement, and other prostate-related conditions"
          },
          {
            content:
              "AIDS medications can also cause breast enlargement in men. HIV-positive men undergoing Highly Active Antiretroviral Therapy (HAART) treatment are prone to developing larger breasts"
          },
          {
            content: "Anti-anxiety medications"
          },
          {
            content: "Antibiotics"
          },
          {
            content: "Tricyclic antidepressants"
          },
          {
            content: "Ulcer medications"
          },
          {
            content: "Gastric motility medications"
          },
          {
            content: "Heart medications"
          }
        ],
        thirdhead4: "Substances that leads to male breast enlargement",
        thirddesc4:
          "Drugs and alcohol are two vital components that trigger breast enlargement in men.",
        thirdlist4: [
          {
            content: "Methadone"
          },
          {
            content: "Heroin"
          },
          {
            content: "Marijuana"
          },
          {
            content: "Amphetamines"
          },
          {
            content: "Alcohol"
          }
        ],
        tabshead: "Health conditions that can cause male breast enlargement",
        tabsdesc:
          "There are numerous health conditions that can affect the normal balance of the hormones and can cause male breast enlargement.",
        tabsitems: [
          {
            title: "Malnutrition and Starvation",
            content:
              "when your body is unable to get adequate nutrition, your estrogen levels remain constant but testosterone levels drop. It causes a hormonal imbalance."
          },
          {
            title: "Liver failure",
            content: "Liver failure"
          },
          {
            title: "Kidney failure",
            content: "Kidney failure"
          },
          {
            title: "Hyperthyroidism",
            content: "the thyroid glands release excess thyroxine"
          },
          {
            title: "Tumors",
            content:
              "tumors involving adrenal glands, testes, or pituitary glands can release hormones that can change the male-female hormone imbalance"
          },
          {
            title: "Hypogonadism",
            content:
              "it is a condition that hinders the normal testosterone production"
          }
        ]
        // sixthhead: "Substances that leads to male breast enlargement",
        // sixthdesc:
        //   "Drugs and alcohol are two vital components that trigger breast enlargement in men are Methadone, Heroin, Marijuana, Amphetamines or Alcohol"
        // seventhhead: "Health conditions that can cause male breast enlargement",
        // seventhdesc: `There are numerous health conditions that can affect the normal balance of the hormones and can cause male breast enlargement.

        //   Malnutrition and Starvation: when your body is unable to get adequate nutrition, your estrogen levels remain constant but testosterone levels drop. It causes a hormonal imbalance.
        //   ,
        //   	Liver failure

        //   ,	Kidney failure

        //   ,	Hyperthyroidism: the thyroid glands release excess thyroxine

        //   ,	Tumors: tumors involving adrenal glands, testes, or pituitary glands can release hormones that can change the male-female hormone imbalance

        //   ,	Aging

        //   and 	Hypogonadism: it is a condition that hinders the normal testosterone production`
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
          image={require("assets/img/TreatmentSections/MaleBreast/Gynecomastia/BG.jpg")}
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
