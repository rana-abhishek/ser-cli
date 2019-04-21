/* eslint-disable no-unreachable */
/* eslint-disable react/prop-types */
import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.jsx";
// import { Link } from "react-router-dom";
import { cardTitle } from "assets/jss/material-kit-pro-react.jsx";
import Accordion from "components/Accordion/RightLinks.jsx";

const style = {
  ...imagesStyles,
  cardTitle
};

class Cards extends React.Component {
  render() {
    const { classes } = this.props;

    const givecard = props => {
      switch (props.type) {
        case "image":
          {
            return (
              <Card>
                <img
                  className={classes.imgCardTop}
                  style={{
                    borderRadius: "5px",
                    borderBottomLeftRadius: "0",
                    borderBottomRightRadius: "0"
                  }}
                  src={this.props.imgsrc}
                  alt="Card-img-cap"
                />
                <CardBody
                  style={{
                    backgroundColor: "rgb(94, 71, 44)",
                    borderRadius: "5px",
                    borderTopLeftRadius: "0",
                    borderTopRightRadius: "0"
                  }}
                >
                  <h6
                    className={classes.cardTitle}
                    style={{
                      color: "rgb(221, 200, 129)"
                    }}
                  >
                    MEDICAL DOCTOR
                  </h6>
                  <h4
                    className={classes.cardTitle}
                    style={{
                      color: "rgb(221, 200, 129)"
                    }}
                  >
                    Dr. Greg House
                  </h4>
                  <p
                    style={{
                      color: "rgb(221, 200, 129)"
                    }}
                  >
                    + 800 123 45 67
                    <br />
                    info@beclinic.com
                  </p>
                  {/* <p><small className={classes.textMuted}>Last updated 3 mins ago</small></p> */}
                </CardBody>
              </Card>
            );
          }
          break;
        case "list":
          {
            return (
              <Card>
                <CardBody
                  style={{
                    backgroundColor: "rgb(94, 71, 44)",
                    borderRadius: "5px"
                  }}
                >
                  <h4
                    className={classes.cardTitle}
                    style={{
                      color: "rgb(221, 200, 129)"
                    }}
                  >
                    Treatments
                  </h4>
                  <Accordion
                    collapses={[
                      {
                        nodrop: false,
                        title: "Gynecomastia / Male Breast",
                        content: [
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "Gynecomastia General Information",
                            url: "/malebreast/Gynecomastia&gyno"
                          },
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "Male Breast Information",
                            url: "/malebreast/MaleBreastInformation"
                          },
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "FAQs Male Breasts",
                            url: "/malebreast/FAQsMaleBreasts"
                          },
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "Removal of Mammary Glands",
                            url: "/malebreast/RemovalOfMammaryGlands"
                          },
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "Surgery-for-incomplete-gynecomastia",
                            url: "/malebreast/SurferyForIncompleteGynecomastia"
                          },
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "Exercise Does Not Help",
                            url: "/malebreast/ExerciseDoesNotHelp"
                          },
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "Pictures gallery Male Breasts",
                            url: "/malebreast/PicturesGalleryMaleBreasts"
                          },
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "Technique of Gynecomastia Surgery",
                            url: "/malebreast/TechniqueOfGynecomastiaSurgery"
                          },
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "The Important Issue of Scars",
                            url: "/malebreast/ImportantIssueOfScars"
                          },
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "The Important Issue of Skin",
                            url: "/malebreast/ImportantIssueOfSkin"
                          },
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "Unilateral or Asymmetrical Gynecomastia",
                            url: "/malebreast/AsymmetricalGynecomastia"
                          },
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "Gynecomastia Surgery Cost",
                            url: "/malebreast/GynecomastiaSurgeryCost"
                          }
                        ]
                      },
                      {
                        nodrop: false,
                        title: "Liposuction",
                        content: [
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "Areas for liposcution",
                            url: "/liposuction/AreasForLiposuction"
                          },
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "Abdomen liposuction",
                            url: "/liposuction/AbdomenLiposuction"
                          },
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "Arms liposuction",
                            url: "/liposuction/ArmsLiposuction"
                          },
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "Love handles,hips,side bags liposuction",
                            url: "/liposuction/LoveHandlesLiposuction"
                          },
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "Thighs liposuction",
                            url: "/liposuction/ThighsLiposuction"
                          },
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "Back liposuction",
                            url: "/liposuction/BackLiposuction"
                          },
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "High Definition liposuction",
                            url: "/liposuction/HighDefinitionLiposuction"
                          }
                        ]
                      },
                      {
                        title: "Breast Surgeries",
                        content: [
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "Breast Augmentation",
                            url: "/breastSurgeries/BreastAugmentation"
                          },
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "Breast Lift",
                            url: "/breastSurgeries/BreastLift"
                          },
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "Breast Reduction",
                            url: "/breastSurgeries/BreastReduction"
                          }
                        ]
                      },
                      {
                        nodrop: false,
                        title: "Body Contouring Surgeries",
                        content: [
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "Body Contouring Surgery after Weight Loss",
                            url:
                              "/bodyContouringSurgeries/ContouringSurgeryAfterWeightLoss"
                          },
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "Abdominoplasty How Patients Present",
                            url:
                              "/bodyContouringSurgeries/AbdominoplastyHowPatientsPresent"
                          },
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "Abdominoplasty Types",
                            url: "/bodyContouringSurgeries/AbdominplastyTypes"
                          },
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "Total Abdominoplasty Technique",
                            url:
                              "/bodyContouringSurgeries/TotalAbdominoplastyTechnique"
                          },
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "Brachioplasty",
                            url: "/bodyContouringSurgeries/Brachioplasty"
                          },
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "Thighplasty & lateral body lift",
                            url:
                              "/bodyContouringSurgeries/Thighplasty&LateralBodyLift"
                          }
                        ]
                      },
                      {
                        nodrop: true,
                        title: "Awake Cosmetic Surgery",
                        content: {
                          // <Link to="/malebreast/Gynecomastia&gyno">
                          //   <li
                          //     style={{
                          //       color: "rgb(221, 200, 129)",
                          //       paddingBottom: "5px"
                          //     }}
                          //   >
                          //     Gynocomastia (Male Breast)
                          //   </li>
                          // </Link>
                          name: "Breast Augmentation",
                          url: "/awakeCosmetic"
                        }
                      },
                      {
                        nodrop: true,
                        title: "Cosmetic Gynecology",
                        content: {
                          // <Link to="/malebreast/Gynecomastia&gyno">
                          //   <li
                          //     style={{
                          //       color: "rgb(221, 200, 129)",
                          //       paddingBottom: "5px"
                          //     }}
                          //   >
                          //     Gynocomastia (Male Breast)
                          //   </li>
                          // </Link>
                          name: "Cosmetic Gynecology",
                          url: "/cosmeticGynecology"
                        }
                      },
                      {
                        nodrop: false,
                        title: "Vital Skin-tite™",
                        content: [
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "Mechanism of action of ReformCRF",
                            url: "/skinTite/MechanismOfActionOfIRF"
                          },
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "Going through a session of ReformCRF",
                            url: "/skinTite/GoingThroughASessionOfIRF"
                          },
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "Patient Testimonials on ReformCRF",
                            url: "/skinTite/PatientTestimonials"
                          }
                        ]
                      },
                      {
                        nodrop: true,
                        title: "ROOTACTIV™",
                        content: {
                          // <Link to="/malebreast/Gynecomastia&gyno">
                          //   <li
                          //     style={{
                          //       color: "rgb(221, 200, 129)",
                          //       paddingBottom: "5px"
                          //     }}
                          //   >
                          //     Gynocomastia (Male Breast)
                          //   </li>
                          // </Link>
                          name: "ROOTACTIV™",
                          url: "/rootActiv"
                        }
                      },
                      {
                        nodrop: false,
                        title: "Awake Liposuction",
                        content: [
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "Get in Shape by Liposuction",
                            url: "/awakeLiposuction/GetInShape"
                          },
                          {
                            // <Link to="/malebreast/Gynecomastia&gyno">
                            //   <li
                            //     style={{
                            //       color: "rgb(221, 200, 129)",
                            //       paddingBottom: "5px"
                            //     }}
                            //   >
                            //     Gynocomastia (Male Breast)
                            //   </li>
                            // </Link>
                            name: "Pear Shaped Bottom Liposuction",
                            url: "/awakeLiposuction/PearShapedBottom"
                          }
                        ]
                      }
                    ]}
                  />
                  {/* <ul
                    style={{
                      color: "rgb(221, 200, 129)",
                      paddingLeft: "20px"
                    }}
                  >
                    <Link to="/malebreast/Gynecomastia&gyno">
                      <li
                        style={{
                          color: "rgb(221, 200, 129)",
                          paddingBottom: "5px"
                        }}
                      >
                        Gynocomastia (Male Breast)
                      </li>
                    </Link>
                    <Link to="/liposuction/AreasForLiposuction">
                      <li
                        style={{
                          color: "rgb(221, 200, 129)",
                          paddingBottom: "5px"
                        }}
                      >
                        Liposuction
                      </li>
                    </Link>

                    <Link to="/breastSurgeries/BreastAugmentation">
                      <li
                        style={{
                          color: "rgb(221, 200, 129)",
                          paddingBottom: "5px"
                        }}
                      >
                        Breast Surgeries
                      </li>
                    </Link>

                    <Link to="/bodyContouringSurgeries/ContouringSurgeryAfterWeightLoss">
                      <li
                        style={{
                          color: "rgb(221, 200, 129)",
                          paddingBottom: "5px"
                        }}
                      >
                        Body Contouring Surgeries
                      </li>
                    </Link>

                    <Link to="/awakeCosmetic">
                      <li
                        style={{
                          color: "rgb(221, 200, 129)",
                          paddingBottom: "5px"
                        }}
                      >
                        Awake Cosmetic Surgery
                      </li>
                    </Link>

                    <Link to="/cosmeticGynecology">
                      <li
                        style={{
                          color: "rgb(221, 200, 129)",
                          paddingBottom: "5px"
                        }}
                      >
                        Cosmetic Gynecology
                      </li>
                    </Link>

                    <Link to="/skinTite/MechanismOfActionOfIRF">
                      <li
                        style={{
                          color: "rgb(221, 200, 129)",
                          paddingBottom: "5px"
                        }}
                      >
                        Vital Skin-Tite
                      </li>
                    </Link>

                    <Link to="/rootActiv">
                      <li
                        style={{
                          color: "rgb(221, 200, 129)",
                          paddingBottom: "5px"
                        }}
                      >
                        RootActiv
                      </li>
                    </Link>

                    <Link to="/awakeLiposuction/GetInShape">
                      <li
                        style={{
                          color: "rgb(221, 200, 129)",
                          paddingBottom: "5px"
                        }}
                      >
                        Awake Liposuction
                      </li>
                    </Link>
                  </ul> */}
                  {/* <p><small className={classes.textMuted}>Last updated 3 mins ago</small></p> */}
                </CardBody>
              </Card>
            );
          }
          break;
        case "fourtiles":
          {
            return (
              <div style={{ padding: "0 20px" }}>
                <Card
                  style={{ borderRadius: "0", margin: "0", boxShadow: "0 0 0" }}
                >
                  <img
                    style={{
                      borderRadius: "0",
                      height: "200px",
                      width: "auto"
                    }}
                    className={classes.imgCard}
                    src={this.props.src}
                    alt="Card-img"
                  />
                  {this.props.desc ? (
                    <div
                      className={classes.imgCardOverlay}
                      style={{
                        position: "absolute",
                        top: "65%",
                        textAlign: "center",
                        marginBottom: "10px"
                      }}
                    >
                      <p
                        style={{
                          color: "white",
                          fontSize: "24px",
                          fontFamily: "Abril Fatface, display"
                        }}
                      >
                        {this.props.desc}
                      </p>
                      <h4
                        className={classes.cardTitle}
                        style={{
                          color: "white",
                          fontSize: "44px",
                          fontFamily: "Abril Fatface, display",
                          fontWeight: "900",
                          lineHeight: "28px"
                        }}
                      >
                        {this.props.title ? this.props.title : null}
                      </h4>
                    </div>
                  ) : null}
                </Card>
              </div>
            );
          }
          break;
        case "people": {
          return (
            <Card style={{ borderRadius: "10px" }}>
              <CardBody
                style={{
                  backgroundColor: "rgb(94, 71, 44)",
                  padding: "30px 40px",
                  paddingBottom: "50px",
                  borderRadius: "5px"
                }}
              >
                <h3
                  className={classes.cardTitle}
                  style={{
                    color: "rgb(221, 200, 129)"
                  }}
                >
                  People Say
                </h3>
                <p
                  style={{
                    color: "rgb(221, 200, 129)"
                  }}
                >
                  Sometimes male patients feel they have puffy nipples. Surgery
                  removes the puffy nipples with minimal possible scar. The
                  surgery is outpatient and avoids the large open incisions and
                  scars including free nipple grafting scars that are typical of
                  the traditional techniques. Most patients notice significant
                  flattening of the chest as well as a shrinkage of the often
                  dilated size of the areola. Special compression vests are
                  utilized post-op for good healing. Patients need only a day
                  off of work and can resume full working out and exercise in
                  six weeks. Results are immediate but, improvement continues
                  for about three months.
                </p>
                <div
                  style={{
                    display: "flex"
                  }}
                >
                  <img
                    className={classes.imgCardTop}
                    src={this.props.imgsrc}
                    alt="Card-img-cap"
                    style={{
                      width: "30%",
                      height: "30%",
                      borderRadius: "50%"
                    }}
                  />
                  <p
                    style={{
                      color: "rgb(221, 200, 129)",
                      paddingLeft: "20px",
                      paddingTop: "10px"
                    }}
                  >
                    <b>CHUPACABRAS</b>
                    <br />
                    Patient
                  </p>
                </div>
                {/* <p><small className={classes.textMuted}>Last updated 3 mins ago</small></p> */}
              </CardBody>
            </Card>
          );
        }
        default:
          return;
      }
    };

    return (
      // <Card style={{borderRadius:"0",margin:"0"}}>
      //   <img  style={{borderRadius:"0",height:"300px",width:"auto"}} className={classes.imgCard} src={this.props.src} alt="Card-img" />
      //   <div className={classes.imgCardOverlay} style={{position:"absolute",top: "60%",backgroundColor:"#000",opacity:"0.3"}}>
      //     <h4 className={classes.cardTitle} style={{color:"white"}}>{this.props.title ? this.props.title : null}</h4>
      //     <p style={{color:"white"}}>{this.props.desc ? this.props.desc : null}</p>
      //   </div>
      // </Card>
      <div>{givecard(this.props)}</div>
    );
  }
}

export default withStyles(style)(Cards);
// import React from "react";
// // material-ui components
// import withStyles from "@material-ui/core/styles/withStyles";
// // core components
// import Card from "components/Card/Card.jsx";
// import CardBody from "components/Card/CardBody.jsx";

// import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.jsx";

// import { cardTitle } from "assets/jss/material-kit-pro-react.jsx";

// const style = {
//   ...imagesStyles,
//   cardTitle,
//   textMuted: {
//     color: "#6c757d"
//   },
// };

// class Cards extends React.Component {

//   render() {
//     const { classes } = this.props;

//     templatecard = (type) => {
//         switch(type){
//             case("image"): return (
//                 <div>
// <Card>
//   <img className={classes.imgCardTop} src={this.props.imgsrc} alt="Card-img-cap" />
//   <CardBody style={{
//       backgroundColor: "#636970"
//   }}>
//     <h6 className={classes.cardTitle} style={{
//         color: "pink"
//     }}>MEDICAL DOCTOR</h6>
//     <h4 className={classes.cardTitle} style={{
//         color: "white"
//     }}>Dr. Greg House</h4>
//     <p style={{
//         color: "white"
//     }}>+ 800 123 45 67<br/>info@beclinic.com</p>
//     {/* <p><small className={classes.textMuted}>Last updated 3 mins ago</small></p> */}
//   </CardBody>
// </Card>
//               </div>
//             )
//         }

//     }

//     return(
//         <div>
//             {templatecard(this.props.type)}
//         </div>
//     )
// };

// export default withStyles(style)(Cards);
