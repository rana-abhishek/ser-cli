import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Carousel from "react-slick";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Muted from "components/Typography/Muted.jsx";
import Button from "components/CustomButtons/Button.jsx";
import { Parallax } from "react-parallax";

import BG from "assets/img/common/Images/ParallaxBG3.jpg";

import sectionImageStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionImageStyle.jsx";

function SectionImage({ ...props }) {
  const { classes } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false
  };
  return (
    <Parallax bgImage={BG} bgImageAlt="the cat" strength={1000}>
      <div
        style={{ padding: "50px 0", paddingTop: "100px" }}
        // style={{ backgroundImage: "url(" + bg10 + ")" }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "400",
                  color: "rgb(94, 71, 44)",
                  fontFamily: "Oswald, sans-serif",
                  textAlign: "center",
                  letterSpacing: "-1px",
                  paddingBottom: "30px"
                }}
              >
                REVIEWS & TESTIMONIALS
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  color: "rgb(94, 71, 44)"
                }}
              >
                <div
                  style={{
                    border: "1px solid black",
                    width: "5%",
                    textAlign: "center"
                  }}
                />
              </div>
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <Carousel {...settings}>
                <Card profile plain className={classes.textLeft}>
                  <GridContainer style={{ textAlign: "center" }}>
                    <GridItem xs={12} sm={12} md={12}>
                      <CardBody plain>
                        <div style={{ margin: "auto" }}>
                          <p
                            className={classes.description}
                            style={{ fontSize: "15px" }}
                          >
                            <div>
                              Sometimes male patients feel they have puffy
                              nipples. Surgery removes the puffy nipples with
                              minimal possible scar. The surgery is outpatient
                              and avoids the large open incisions and scars
                              including free nipple grafting scars that are
                              typical of the traditional techniques.
                              <br />
                              by CHUPACABRAS
                              <br />
                              in Male Breast Removal Surgery
                            </div>
                          </p>
                        </div>
                      </CardBody>
                      {/* <CardFooter profile plain>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-google" />
                    </Button>
                  </CardFooter> */}
                    </GridItem>
                  </GridContainer>
                </Card>
                <Card profile plain className={classes.textLeft}>
                  <GridContainer style={{ textAlign: "center" }}>
                    <GridItem xs={12} sm={12} md={12}>
                      <CardBody plain>
                        <div style={{ margin: "auto" }}>
                          <p
                            className={classes.description}
                            style={{ fontSize: "15px" }}
                          >
                            <div>
                              There may be other factors for the surgeon to
                              consider before deciding upon the charges like
                              sagging of the breasts, previous incomplete or
                              complicated surgeries and expected technical
                              difficulties during surgery. Therefore surgeon
                              must examine you first before quoting gynecomastia
                              surgery cost to you.
                              <br />
                              by KOMAL GUPTA
                              <br />
                              in Breast Augmentation
                            </div>
                          </p>
                        </div>
                      </CardBody>
                      {/* <CardFooter profile plain>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-google" />
                    </Button>
                  </CardFooter> */}
                    </GridItem>
                  </GridContainer>
                </Card>
                <Card profile plain className={classes.textLeft}>
                  <GridContainer style={{ textAlign: "center" }}>
                    <GridItem xs={12} sm={12} md={12}>
                      <CardBody plain>
                        <div style={{ margin: "auto" }}>
                          <p
                            className={classes.description}
                            style={{ fontSize: "15px" }}
                          >
                            <div>
                              There is no other way. All surgeries require
                              incisions and all incisions leave scars. There is
                              no scar-less surgery. Important thing to consider
                              is the size of the incision and the place where it
                              is given. We place our small incision inside the
                              dark circle called Areola, so that the scar
                              remains well hidden inside the dark area.
                              <br />
                              by CHUPACABRAS
                              <br />
                              in Male Breast Removal Surgery
                            </div>
                          </p>
                        </div>
                      </CardBody>
                      {/* <CardFooter profile plain>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-google" />
                    </Button>
                  </CardFooter> */}
                    </GridItem>
                  </GridContainer>
                </Card>
                <Card profile plain className={classes.textLeft}>
                  <GridContainer style={{ textAlign: "center" }}>
                    <GridItem xs={12} sm={12} md={12}>
                      <CardBody plain>
                        <div style={{ margin: "auto" }}>
                          <p
                            className={classes.description}
                            style={{ fontSize: "15px" }}
                          >
                            <div>
                              Hi I’m 40y transgender ho I’m male by birth & I’m
                              female by my body & my mind I’m completly female
                              minded I like female life i wear female dress I
                              want my breast implant plz tell me minimum cost of
                              my breast implant
                              <br />
                              by KOMAL GUPTA <br />
                              in Breast Augmentation
                            </div>
                          </p>
                        </div>
                      </CardBody>
                      {/* <CardFooter profile plain>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-google" />
                    </Button>
                  </CardFooter> */}
                    </GridItem>
                  </GridContainer>
                </Card>
              </Carousel>
            </GridItem>

            <GridItem style={{ display: "none" }} xs={12} sm={12} md={6}>
              <Card profile plain className={classes.textLeft}>
                <GridContainer style={{ textAlign: "center" }}>
                  <GridItem xs={12} sm={12} md={6}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>DR JB RATTI</h4>
                      <Muted>
                        <h6>Comment OF THE MONTH</h6>
                      </Muted>
                      <p className={classes.description}>
                        Sometimes male patients feel they have puffy nipples.
                        Surgery removes the puffy nipples with minimal possible
                        scar. The surgery is outpatient and avoids the large
                        open incisions and scars including free nipple grafting
                        scars that are typical of the traditional techniques.
                      </p>
                      <p className={classes.description}>
                        by <a>CHUPACABRAS</a> in{" "}
                        <a>Male Breast Removal Surgery</a>
                      </p>
                    </CardBody>
                    {/* <CardFooter profile plain>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-google" />
                    </Button>
                  </CardFooter> */}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    {/* <CardHeader image plain>
                    <div style={{
                      height:"200px"
                    }}>
                      <a href="#pablo">
                        <img src={cardProfile1} alt="..." style={{height:"100%",borderRadius:"50%",paddingTop:"20px"}}/>
                      </a>
                    </div>  
                  </CardHeader> */}
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>
                        Dr. (Mrs.) Neeta Ratti
                      </h4>
                      <Muted>
                        <h6>Comment OF THE WEEK</h6>
                      </Muted>
                      <p className={classes.description}>
                        There may be other factors for the surgeon to consider
                        before deciding upon the charges like sagging of the
                        breasts, previous incomplete or complicated surgeries
                        and expected technical difficulties during surgery.
                        Therefore surgeon must examine you first before quoting
                        gynecomastia surgery cost to you.{" "}
                      </p>
                      <p className={classes.description}>
                        by <a>KOMAL GUPTA</a> in <a>Breast Augmentation</a>
                      </p>
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem style={{ display: "none" }} xs={12} sm={12} md={6}>
              <Card profile plain className={classes.textLeft}>
                <GridContainer style={{ textAlign: "center" }}>
                  <GridItem xs={12} sm={12} md={6}>
                    {/* <CardHeader image plain>
                  <div style={{
                      height:"200px"
                    }}>
                    <a href="#pablo">
                      <img src={cardProfile4} alt="..."  style={{height:"100%",borderRadius:"50%",paddingTop:"20px"}}/>
                    </a>
                  </div>
                  </CardHeader> */}
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>DR JB RATTI</h4>
                      <Muted>
                        <h6>Comment OF THE MONTH</h6>
                      </Muted>
                      <p className={classes.description}>
                        There is no other way. All surgeries require incisions
                        and all incisions leave scars. There is no scar-less
                        surgery. Important thing to consider is the size of the
                        incision and the place where it is given. We place our
                        small incision inside the dark circle called Areola, so
                        that the scar remains well hidden inside the dark area.
                      </p>
                      <p className={classes.description}>
                        by <a>CHUPACABRAS</a> in{" "}
                        <a>Male Breast Removal Surgery</a>
                      </p>
                    </CardBody>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>
                        Dr. (Mrs.) Neeta Ratti
                      </h4>
                      <Muted>
                        <h6>Comment OF THE WEEK</h6>
                      </Muted>
                      <p className={classes.description}>
                        Hi I’m 40y transgender ho I’m male by birth & I’m female
                        by my body & my mind I’m completly female minded I like
                        female life i wear female dress I want my breast implant
                        plz tell me minimum cost of my breast implant
                      </p>
                      <p className={classes.description}>
                        by <a>KOMAL GUPTA</a> in <a>Breast Augmentation</a>
                      </p>
                    </CardBody>
                    {/* <CardFooter profile plain>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-linkedin-in" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-dribbble" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-google" />
                    </Button>
                  </CardFooter> */}
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem style={{ display: "none" }} xs={12} sm={12} md={12}>
              <div
                style={{
                  textAlign: "center"
                }}
              >
                <Button
                  className={classes.postbut}
                  style={{ marginTop: "0", border: "1px solid #e9ad0e" }}
                  color="primary"
                  round
                >
                  All post
                </Button>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </Parallax>
  );
}

export default withStyles(sectionImageStyle)(SectionImage);
