/* eslint-disable react/prop-types */
import React from "react";
// material-ui components
import { Parallax } from "react-parallax";
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import { Link } from "react-router-dom";

import BG from "assets/img/common/Images/ParallaxBG2.jpg";
import icon1 from "assets/img/HomePageImages/TilesIcons/icons/Icons__Awake Cosmetic Surgery.png";
import icon2 from "assets/img/HomePageImages/TilesIcons/icons/Icons__Awake_liposuction.png";
import icon3 from "assets/img/HomePageImages/TilesIcons/icons/Icons__Body_Contouring_surgeries.png";
import icon4 from "assets/img/HomePageImages/TilesIcons/icons/Icons__Breast_Surgeries.png";
import icon5 from "assets/img/HomePageImages/TilesIcons/icons/Icons__COsmetic_gynecology.png";
import icon6 from "assets/img/HomePageImages/TilesIcons/icons/Icons__Liposuction.png";
import icon7 from "assets/img/HomePageImages/TilesIcons/icons/Icons__ROOT_Activ.png";
import icon8 from "assets/img/HomePageImages/TilesIcons/icons/Icons__Skin_Tite.png";
import icon9 from "assets/img/HomePageImages/TilesIcons/icons/Icons_-02.png";

const style = {
  cardTitle: {
    fontFamily: "Oswald, sans-serif",
    fontSize: "24px",
    color: "rgb(94, 71, 44)"
  },
  cardContent: {
    fontFamily: "Lato, sans-serif",
    fontSize: "16px",
    color: "rgb(94, 71, 44)"
  },
  textCenter: {
    textAlign: "center",
    width: "auto",
    boxShadow: "0 0 0 0",
    padding: "20px 0",
    margin: "20px 0",
    background: "rgba(166,123,63,0.1)"
  },
  textRight: {
    textAlign: "right"
  },
  tilemar: {
    margin: "10vw 0"
  },
  imgcont: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center"
  },
  section: {
    padding: "0",
    textAlign: "center"
  },
  imgcard: {
    height: "50%",
    width: "50%"
  },
  container: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
    "@media (min-width: 576px)": {
      maxWidth: "540px"
    },
    "@media (min-width: 768px)": {
      maxWidth: "720px"
    },
    "@media (min-width: 992px)": {
      maxWidth: "960px"
    },
    "@media (min-width: 1200px)": {
      maxWidth: "1200px"
    }
  }
};

class TilesSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Parallax bgImage={BG} bgImageAlt="the cat" strength={1000}>
          <div className={classes.container}>
            <div style={{ margin: "60px 0" }}>
              <GridContainer style={{ marginRight: "0" }}>
                <GridItem
                  data-aos="fade-right"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  xs={12}
                  sm={12}
                  md={4}
                >
                  <Card className={classes.textCenter}>
                    <CardBody
                      style={{
                        padding: "0 10px",
                        display: "flex",
                        flexDirection: "column",
                        height: "350px",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Link to="/malebreast/Gynecomastia&gyno">
                        <div>
                          <div className={classes.imgcont}>
                            <img
                              className={classes.imgcard}
                              src={icon9}
                              alt="Card-img-cap"
                              style={{
                                width: "102px",
                                height: "84px",
                                margin: "auto"
                              }}
                            />
                          </div>
                          <h4 className={classes.cardTitle}>
                            Gynecomastia / Male Breasts / Gyno
                          </h4>
                          <p className={classes.cardContent}>
                            Incidence of Gyno / Gynecomastia is very high.
                            Almost 25-30% of boys suffer from this condition. It
                            can be a very psychologically disturbing condition
                            as boys are supposed to have flat, muscular chest.
                            Breasts are not at all appropriate on boys’ chest.
                          </p>
                        </div>
                      </Link>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  xs={12}
                  sm={12}
                  md={4}
                >
                  <Card className={classes.textCenter}>
                    <CardBody
                      style={{
                        padding: "0 10px",
                        display: "flex",
                        flexDirection: "column",
                        height: "350px",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Link to="/liposuction/AreasForLiposuction">
                        <div>
                          <div className={classes.imgcont}>
                            <img
                              className={classes.imgcard}
                              src={icon6}
                              alt="Card-img-cap"
                              style={{
                                width: "102px",
                                height: "84px",
                                margin: "auto"
                              }}
                            />
                          </div>
                          <h4 className={classes.cardTitle}>Liposuction</h4>
                          <p className={classes.cardContent}>
                            Awake Liposuction is an excellent cosmetic surgery
                            procedure for PERMANENT BODY SHAPING. Fat is removed
                            from fat deposits between skin and muscles in a
                            planned, systematic and symmetrical way to give a
                            shapely body. It is an artistic work. It is like
                            sculpting the body!
                          </p>
                        </div>
                      </Link>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem
                  data-aos="fade-left"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  xs={12}
                  sm={12}
                  md={4}
                >
                  <Card className={classes.textCenter}>
                    <CardBody
                      style={{
                        padding: "0 10px",
                        display: "flex",
                        flexDirection: "column",
                        height: "350px",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Link to="/breastSurgeries/BreastAugmentation">
                        <div>
                          <div className={classes.imgcont}>
                            <img
                              className={classes.imgcard}
                              src={icon4}
                              alt="Card-img-cap"
                              style={{
                                width: "102px",
                                height: "84px",
                                margin: "auto"
                              }}
                            />
                          </div>
                          <h4 className={classes.cardTitle}>
                            Breast surgeries
                          </h4>
                          <p className={classes.cardContent}>
                            Shapely and attractive breasts are big confidence
                            booster for women. For various reasons, in some
                            women they may be small, sagging or excessively
                            large. Breast surgeries can give the right and
                            appropriate size for the body, lift and firmness to
                            them. Boost your self-image at VITAL CLINIC.
                          </p>
                        </div>
                      </Link>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
              <GridContainer data-aos="fade-up" style={{ marginRight: "0" }}>
                <GridItem
                  data-aos="fade-right"
                  data-aos-delay="250"
                  data-aos-duration="2000"
                  xs={12}
                  sm={12}
                  md={4}
                >
                  <Card className={classes.textCenter}>
                    <CardBody
                      style={{
                        padding: "0 10px",
                        display: "flex",
                        flexDirection: "column",
                        height: "350px",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Link to="/bodyContouringSurgeries/ContouringSurgeryAfterWeightLoss">
                        <div>
                          <div className={classes.imgcont}>
                            <img
                              className={classes.imgcard}
                              src={icon3}
                              alt="Card-img-cap"
                              style={{
                                width: "102px",
                                height: "84px",
                                margin: "auto"
                              }}
                            />
                          </div>
                          <h4 className={classes.cardTitle}>
                            Body Contouring Surgeries
                          </h4>
                          <p className={classes.cardContent}>
                            Massive weight loss due to a strict fitness regime
                            or bariatric surgery for major obesity, can cause
                            skin folds to hang in different parts of body.
                            Pregnancies can often cause skin folds to hang from
                            abdomen like an apron. Body contouring surgeries
                            like ABDOMINOPLASTY, ARMS LIFT, THIGH LIFT, HIPS
                            LIFT etc can restore firm and shapely body through
                            customized Body Contouring Surgeries at VITAL
                            CLINIC.
                          </p>
                        </div>
                      </Link>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem
                  data-aos="fade-up"
                  data-aos-delay="250"
                  data-aos-duration="2000"
                  xs={12}
                  sm={12}
                  md={4}
                >
                  <Card className={classes.textCenter}>
                    <CardBody
                      style={{
                        padding: "0 10px",
                        display: "flex",
                        flexDirection: "column",
                        height: "350px",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Link to="/awakeCosmetic">
                        <div>
                          <div className={classes.imgcont}>
                            <img
                              className={classes.imgcard}
                              src={icon1}
                              alt="Card-img-cap"
                              style={{
                                width: "102px",
                                height: "84px",
                                margin: "auto"
                              }}
                            />
                          </div>
                          <h4 className={classes.cardTitle}>
                            Awake Cosmetic Surgery
                          </h4>
                          <p className={classes.cardContent}>
                            Tumescent technique was invented by Jeffrey Klein, a
                            Dermatology surgeon in California. It has
                            revolutionized cosmetic surgery in terms of safety
                            and results. We have incorporated those principles
                            into all our cosmetic surgeries to give great
                            results consistently in every case. Surgeries are
                            done under local anesthesia. They are painless and
                            practically bloodless.
                          </p>
                        </div>
                      </Link>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem
                  data-aos="fade-left"
                  data-aos-delay="250"
                  data-aos-duration="2000"
                  xs={12}
                  sm={12}
                  md={4}
                >
                  <Card className={classes.textCenter}>
                    <CardBody
                      style={{
                        padding: "0 10px",
                        display: "flex",
                        flexDirection: "column",
                        height: "350px",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Link to="/cosmeticGynecology">
                        <div>
                          <div className={classes.imgcont}>
                            <img
                              className={classes.imgcard}
                              src={icon5}
                              alt="Card-img-cap"
                              style={{
                                width: "102px",
                                height: "84px",
                                margin: "auto"
                              }}
                            />
                          </div>
                          <h4 className={classes.cardTitle}>
                            Cosmetic Gynecology
                          </h4>
                          <p className={classes.cardContent}>
                            This is a specialty field of cosmetic surgery. It
                            involves reshaping external genitalia to give
                            symmetrical and attractive looks, restoring the
                            natural tone of vagina through tightening procedures
                            and taking care of urinary problems as well.
                            Labiaplasty, vaginoplasty, clitoral hood opening,
                            augmentation of labia by fat transfer, hymen
                            reconstruction, G-spot augmentation and cystocele
                            treatment are some of the procedures that we
                            routinely carry out.
                          </p>
                        </div>
                      </Link>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
              <GridContainer data-aos="fade-up" style={{ marginRight: "0" }}>
                <GridItem
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="3000"
                  xs={12}
                  sm={12}
                  md={4}
                >
                  <Card className={classes.textCenter}>
                    <CardBody
                      style={{
                        padding: "0 10px",
                        display: "flex",
                        flexDirection: "column",
                        height: "350px",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Link to="/skinTite/MechanismOfActionOfIRF">
                        <div>
                          <div className={classes.imgcont}>
                            <img
                              className={classes.imgcard}
                              src={icon8}
                              alt="Card-img-cap"
                              style={{
                                width: "102px",
                                height: "84px",
                                margin: "auto"
                              }}
                            />
                          </div>
                          <h4 className={classes.cardTitle}>
                            Vital Skin-Tite™.
                          </h4>
                          <p className={classes.cardContent}>
                            As age advances, collagen also ages and starts to
                            lose its elasticity and suppleness. Sagging of face
                            tissues becomes more and more pronounced giving it
                            an aged look. ReformCRF combines the best
                            technologies in the world to give non-surgical skin
                            tightening without any side effects and downtime.
                          </p>
                        </div>
                      </Link>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="3000"
                  xs={12}
                  sm={12}
                  md={4}
                >
                  <Card className={classes.textCenter}>
                    <CardBody
                      style={{
                        padding: "0 10px",
                        display: "flex",
                        flexDirection: "column",
                        height: "350px",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Link to="/rootActiv">
                        <div>
                          <div className={classes.imgcont}>
                            <img
                              className={classes.imgcard}
                              src={icon7}
                              alt="Card-img-cap"
                              style={{
                                width: "102px",
                                height: "84px",
                                margin: "auto"
                              }}
                            />
                          </div>
                          <h4 className={classes.cardTitle}>ROOTActiv™</h4>
                          <p className={classes.cardContent}>
                            ROOTActiv is a PRP treatment for Hair growth, scalp
                            rejuvenation and stimulation of hair root follicles.
                            PRP treatment is a rapidly growing and popular
                            treatment all over the world.
                          </p>
                        </div>
                      </Link>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-duration="3000"
                  xs={12}
                  sm={12}
                  md={4}
                >
                  <Card className={classes.textCenter}>
                    <CardBody
                      style={{
                        padding: "0 10px",
                        display: "flex",
                        flexDirection: "column",
                        height: "350px",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Link to="/awakeLiposuction/GetInShape">
                        <div>
                          <div className={classes.imgcont}>
                            <img
                              className={classes.imgcard}
                              src={icon2}
                              alt="Card-img-cap"
                              style={{
                                width: "102px",
                                height: "84px",
                                margin: "auto"
                              }}
                            />
                          </div>
                          <h4 className={classes.cardTitle}>
                            Body Augmentation with Fat Transfer
                          </h4>
                          <p className={classes.cardContent}>
                            Body fat is an amazing tissue. Among its many
                            properties, it can be used to transfer to areas of
                            body which have lost their volume, giving that area
                            a saggy look. Being one’s own body fat, it is
                            readily accepted by body areas. Face, breasts,
                            hands, hips, external genitalia and other body areas
                            can be augmented by transferring body fat from
                            another area to give them young fresh look.
                          </p>
                        </div>
                      </Link>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
}

export default withStyles(style)(TilesSection);
