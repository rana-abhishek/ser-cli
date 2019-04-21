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
import image1 from "assets/img/TreatmentSections/SkinTite/GoingThroughASessionOfIRF/GalleryImages/Image1.jpg";
import image2 from "assets/img/TreatmentSections/SkinTite/GoingThroughASessionOfIRF/GalleryImages/Image2.jpg";
import image3 from "assets/img/TreatmentSections/SkinTite/GoingThroughASessionOfIRF/GalleryImages/Image3.jpg";

import profilePic from "assets/img/TreatmentSections/SkinTite/GoingThroughASessionOfIRF/RightProfileImage.png";

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
        head: "Vital Skin-Tite™ (skin tightening)",
        head2: "(Going through a session of ReformCRF)",
        desc: `ReformCRF penetrates the deeper layers of skin to achieve deep skin tightening by stimulating growth of new and young collagen. ReformCRF provides controlled deep dermal heating. This predictable heating of the deep dermis both stimulates and shortens aged collagen fibers, resulting in the immediate and long term improvement of skin wrinkles.`
      },
      left: {
        firsthead: "Targeted benefits from VITAL Skin-tite™",
        firstdesc: `IRF gives a targeted focus on wrinkles and sagging facial and neck areas. Due to development of new collagen, many imperfections of skin show improvements. Face and neck skin becomes better toned, jaw lines get more defined, sleepy look of eyes changes into alert persona and premature signs of ageing show marked reversal. Face and neck start looking younger and more alert. Best of all, there is no surgery and no downtime!

          VITAL Skin-tite™ Combined with skin treatment gives excellent results on face.`,
        secondhead: "ReformCRF for Skin Tightening",
        seconddesc: `Non- Surgical Face Lift is achieved by promoting new collagen formation in the deeper layers of skin.
        To understand the mechanism of Non-surgical Face Lift, we need to understand the properties of collagen. It is a very specialized tissue in the skin, organs and body joints. Healthy collagen retains lot of water. The suppleness and softness of a young person’s skin is due to the presence of healthy young collagen. Bone joints retain their flexibility also due to this amazing tissue. The suppleness of blood vessels like those in heart, kidneys, brain and eyes and other body organs, is due to the presence of young and healthy collagen.
        As age advances, collagen also ages and starts to lose its elasticity and suppleness. Due to a process called “intermolecular cross-linking of collagen molecules”, leading to less water holding capacity and as a result body tissues start stiffening. This change is visible in stiffening of the joints, arteries of heart, kidneys and brain etc. Most visible change is seen on face where the tissues start losing their tone and tight effect. A good tone of the face skin gives a person a younger look. On the contrary when collagen in the face skin loses its suppleness, skin starts sagging giving the face its aged look. So, can we reverse this process by some means? Do we have the technology that can restore healthy collagen in the skin? Fortunately, yes we have.
        Modern technology allows us to replace ageing collagen with young and healthy collagen. Regulated energy emitted by modern Radio-frequency machines are capable of bringing about this change. ReformCRF, used at VITAL CLINIC, gives very effective and lasting replacement of ageing collagen with young and healthy collagen. During the entire process there is simultaneous cooling of the skin surface so that there is no discomfort to the patient during treatment.
        ReformCRF combines the best technologies in the world to give non-surgical skin tightening without any side effects and downtime.,
        Wrinkles and loose skin can take its toll on your looks. Even healthy and active people eventually show signs of aging on their faces. Since it’s the most important visual feature of your body, it’s important to keep your face fresh and youthful.
        Body skin can become loose due to natural ageing, weight-loss and liposuction. The visible appearance of loose skin is due to loss of natural contracting power of the collagen fibres in deep layer of skin, the dermis.`,
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
        thirdhead: "IRF energies are computerized",
        thirddesc:
          "VITAL CLINIC may decide to give more treatments at a month’s interval, entirely at their own discretion and clinical judgment",
        thirdlist: [
          {
            content:
              "Every energy pulse gives Intelligent Feedback which provides real time information on skin condition, impedance and the energy delivery in each pulse for consistency and reproducibility. Energy delivery is fully computer controlled with built-in safety features."
          },
          {
            content:
              "There is constant and simultaneous cooling of the skin surface for total comfort"
          },
          {
            content:
              "Virtually no downtime so patients can quickly resume their normal activities"
          },
          {
            content: "It is safe and effective for all skin types"
          },
          {
            content:
              "Quick treatments: typically 60-90 minutes depending on area treated"
          },
          {
            content:
              "Short treatment protocol: Single treatment is effective. However, cosmetic surgeons at"
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
        sixthhead: "How VITAL Skin-tite™ works",
        sixthdesc: `ReformCRF penetrates the deeper layers of skin to achieve deep skin tightening by stimulating growth of new and young collagen. ReformCRF provides controlled deep dermal heating. This predictable heating of the deep dermis both stimulates and shortens aged collagen fibers, resulting in the immediate and long term improvement of skin wrinkles.
          The unique Handpiece delivers ReformCRF energy through a sapphire crystal and bipolar electrodes while cooling the skin at the same time.   This initiates a strong wound healing response in the dermis without damaging. New and young collagen starts to develop in 3-4 months’ time.`
        // seventhhead: "Mammary Glands Removal",
        // seventhdesc:
        //   "Following videos will show our approach towards removal of mammary glands. The incision is always confined to within the boundary of the areola, whatever be the size of the breasts. This approach gives the best cosmetic results."
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
        firsthead: "Vital Skin-Tite™ (skin tightening)",
        firstdesc: `As age advances, collagen also ages and starts to
        lose its elasticity and suppleness. Sagging of face
        tissues becomes more and more pronounced giving it
        an aged look. ReformCRF combines the best
        technologies in the world to give non-surgical skin
        tightening without any side effects and downtime.`,
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
          image={require("assets/img/TreatmentSections/SkinTite/GoingThroughASessionOfIRF/BG.jpg")}
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
