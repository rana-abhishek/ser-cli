/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react";
// nodejs library that concatenates classes
// import Carousel from "react-slick";
// @material-ui/icons
import Done from "@material-ui/icons/Done";
// import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridItem from "components/Grid/GridItem.jsx";
// import Card from "components/Card/Card.jsx";

// import card1 from "assets/img/IntPatientImages/CardImages/image1.jpg";
// import card2 from "assets/img/IntPatientImages/CardImages/image2.jpg";
// import card3 from "assets/img/IntPatientImages/CardImages/image3.jpg";
// import card4 from "assets/img/IntPatientImages/CardImages/image4.jpg";

// import slider1 from "assets/img/IntPatientImages/SliderImages/image1.jpg";
// import slider2 from "assets/img/IntPatientImages/SliderImages/image2.jpg";
// import slider3 from "assets/img/IntPatientImages/SliderImages/image3.jpg";
// import slider4 from "assets/img/IntPatientImages/SliderImages/image4.jpg";
// import slider5 from "assets/img/IntPatientImages/SliderImages/image5.jpg";

import Emerygency from "components/EmergencyCases/Emergency.js";
// import HalfformSection from "./halfformPage";

const LeftSection = props => {
  // const carditems = [
  //   {
  //     image: card1,
  //     head: "Neuralgia Treatment",
  //     content:
  //       "Treatment includes drug therapy, physiotherapy and/ or surgery, aimed to relieve pain...."
  //   },
  //   {
  //     image: card2,
  //     head: "Epilepsy Treatment",
  //     content:
  //       "Treatment includes drug therapy, physiotherapy and/ or surgery, aimed to relieve pain...."
  //   },
  //   {
  //     image: card3,
  //     head: "Epilepsy Treatment",
  //     content:
  //       "Treatment includes drug therapy, physiotherapy and/ or surgery, aimed to relieve pain...."
  //   },
  //   {
  //     image: card4,
  //     head: "Epilepsy Treatment",
  //     content:
  //       "Treatment includes drug therapy, physiotherapy and/ or surgery, aimed to relieve pain...."
  //   }
  // ];

  // const sliderImages = [
  //   {
  //     src: slider1,
  //     desc: "Yellowstone National Park, United States"
  //   },
  //   {
  //     src: slider2,
  //     desc: "Somewhere Beyond, United States"
  //   },
  //   {
  //     src: slider3,
  //     desc: "Yellowstone National Park, United States "
  //   },
  //   {
  //     src: slider4,
  //     desc: "Somewhere Beyond, United States"
  //   },
  //   {
  //     src: slider5,
  //     desc: "Yellowstone National Park, United States"
  //   }
  // ];

  return (
    <GridItem
      xs={12}
      sm={12}
      md={8}
      className={props.classes.gridItem}
      style={{
        margin: "0"
      }}
    >
      <h3 className={props.classes.title}>For national patients</h3>
      <p className={props.classes.darkbrown}>
        Our protocol for going in for Gynecomastia Surgery at VITAL CLINIC is
        very patient friendly. Surgery for Gynecomastia starts with a
        consultation and examination by the surgeon at VITAL CLINIC. A physical
        examination at the clinic is greatly advantageous as you will have the
        opportunity to ask all your questions regarding male breasts, surgery
        and the financials. You may schedule a consultation by calling us on our
        telephone number or by visiting our clinic during consultation hours.
        After consultation and examination date of surgery will be booked. Some
        blood tests are done for assessing your fitness for surgery and
        measurements for post-op compression vests are taken which will be
        ordered. Surgeon will give you a pre-op advice and a detailed ‘informed
        consent’ is given which is to be read and signed.
      </p>
      <h3 className={props.classes.title}>For international patients</h3>
      <p className={props.classes.darkbrown}>
        You may mail us pictures of chest from front and side views for
        evaluation. The pictures should be clear and preferably high definition
        and taken in proper lighting. You must also inform us about any medical
        conditions you may have and the treatment being taken. The surgeon will
        give his assessment as to what needs to be done and the financials
        involved. After you agree to the quoted charges, your surgery date will
        be fixed according to your convenience and date of arrival in India.
      </p>

      {/* <h3 className={props.classes.title}>Gallery</h3>
      <div className={props.classes.carimage + " " + props.classes.brownborder}>
        <Card style={{ margin: "0" }}>
          <Carousel {...props.settings}>
            {sliderImages.map(image => (
              <div>
                <img
                  src={image.src}
                  alt="First slide"
                  className="slick-image"
                />
                <div className="slick-caption" style={{ paddingBottom: "0px" }}>
                  <h4>
                    <LocationOn className="slick-icons" />
                    {image.desc}
                  </h4>
                </div>
              </div>
            ))}
          </Carousel>
        </Card>
      </div> */}

      <h3 className={props.classes.title}>
        It is very important that you do not have an untreated medical condition
        like
      </h3>
      <div
        className={props.classes.ticksection + " " + props.classes.darkbrown}
      >
        <p>
          <Done className={props.classes.tickicon} />
          Diabetes (high blood sugar)
        </p>
        <p>
          <Done className={props.classes.tickicon} />
          Hypertension (high blood pressure)
        </p>
        <p>
          <Done className={props.classes.tickicon} />
          HIV
        </p>
        <p>
          <Done className={props.classes.tickicon} />
          HCV (hepatitis C)
        </p>
        <p>
          <Done className={props.classes.tickicon} />
          Any heart condition or another ailment which makes you unfit for
          undergoing a surgery
        </p>
      </div>
      <p className={props.classes.darkbrown}>
        It is therefore recommended that before travelling please get yourself
        checked by your physician and get some routine blood test done. Show the
        blood tests to your physician and get his approval for undergoing
        surgery.
      </p>
      {/* <div
        className={
          props.classes.browndiv +
          " " +
          props.classes.brownborder +
          " " +
          props.classes.mobilehide
        }
      >
        <div style={{ flexBasis: "50%", padding: "0 20px" }}>
          <h4
            className={props.classes.title}
            style={{ color: "rgb(94, 71, 44)" }}
          >
            Treatments
          </h4>
          <div className={props.classes.treatmentele}>
            <div>Echocardiography</div>
            <div>– $250</div>
          </div>
          <div className={props.classes.treatmentele}>
            <div>Echocardiography</div>
            <div>– $250</div>
          </div>
          <div className={props.classes.treatmentele}>
            <div>Echocardiography</div>
            <div>– $250</div>
          </div>
          <div className={props.classes.treatmentele}>
            <div>Echocardiography</div>
            <div>– $250</div>
          </div>
          <div className={props.classes.treatmentele}>
            <div>Echocardiography</div>
            <div>– $250</div>
          </div>
          <div className={props.classes.treatmentele}>
            <div>Echocardiography</div>
            <div>– $250</div>
          </div>
          <div className={props.classes.treatmentele}>
            <div>Echocardiography</div>
            <div>– $250</div>
          </div>
        </div>

        <div style={{ flexBasis: "50%", padding: "0 20px" }}>
          <h4
            className={props.classes.title}
            style={{ color: "rgb(94, 71, 44)" }}
          >
            Symptoms
          </h4>
          <div className={props.classes.treatmentele}>
            <div>Echocardiography</div>
            <div>– $250</div>
          </div>
          <div className={props.classes.treatmentele}>
            <div>Echocardiography</div>
            <div>– $250</div>
          </div>
          <div className={props.classes.treatmentele}>
            <div>Echocardiography</div>
            <div>– $250</div>
          </div>
          <div className={props.classes.treatmentele}>
            <div>Echocardiography</div>
            <div>– $250</div>
          </div>
          <div className={props.classes.treatmentele}>
            <div>Echocardiography</div>
            <div>– $250</div>
          </div>
          <div className={props.classes.treatmentele}>
            <div>Echocardiography</div>
            <div>– $250</div>
          </div>
          <div className={props.classes.treatmentele}>
            <div>Echocardiography</div>
            <div>– $250</div>
          </div>
        </div>
      </div> */}
      <h3 className={props.classes.title}>VISA requirements</h3>
      <p className={props.classes.darkbrown}>
        Our International friends may need a valid VISA to travel to India. You
        should contact the local Indian embassy or Consulate to know the
        requirements to be fulfilled for a VISA. Often you may need a letter
        from our clinic as an invite for surgery. An invite is given when you
        have confirmed your surgery and the dates for surgery. You must make
        sure that you have a valid VISA before you travel to India.
      </p>
      {/* <h3 className={props.classes.title}>Symptoms & Diagnosis</h3>
      <p className={props.classes.darkbrown}>
        When you need your company to have a new website or if you venture on
        updating your old webpage with a new look and functionality, the choices
        are versatile. Assuming that you will go the easy way and choose a theme
        for your WordPress website, the overall number of characteristics that
        you will need to keep in mind narrows down significantly.{" "}
      </p> */}
      <Emerygency classes={props.classes} />

      {/* <h3 className={props.classes.title} style={{ marginBottom: "0" }}>
        Procedures
      </h3>
      {carditems ? (
        <div>
          <GridContainer
            style={{
              margin: "0",
              marginTop: "20px",
              marginBottom: "40px"
            }}
          >
            {carditems
              ? carditems.map(item => (
                  <GridItem
                    xs={12}
                    sm={12}
                    md={6}
                    style={{ margin: "15px 0px" }}
                  >
                    <Card
                      className={
                        props.classes.textCenter +
                        " " +
                        props.classes.brownoverlay +
                        " " +
                        props.classes.brownborder
                      }
                      style={{ margin: "0", padding: "0" }}
                    >
                      <CardBody style={{ padding: "0" }}>
                        <div className={props.classes.proctile}>
                          <div
                            className={props.classes.imgcont}
                            style={{ height: "auto", margin: "auto" }}
                          >
                            <img
                              className={props.classes.imgcard}
                              src={item.image}
                              alt="Card-img-cap"
                            />
                          </div>
                          <div style={{ width: "100%" }}>
                            <h5
                              className={
                                props.classes.cardTitle +
                                " " +
                                props.classes.darkbrown
                              }
                              style={{ textAlign: "center" }}
                            >
                              {item.head}
                            </h5>
                            <p className={props.classes.darkbrown}>
                              {item.content}
                            </p>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </GridItem>
                ))
              : null}
          </GridContainer>
        </div>
      ) : null} */}

      {/* <HalfformSection classes={props.classes} /> */}
    </GridItem>
  );
};

export default LeftSection;
