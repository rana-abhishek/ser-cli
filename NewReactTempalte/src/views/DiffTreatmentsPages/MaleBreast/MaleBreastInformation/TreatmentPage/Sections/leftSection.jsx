/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react";
// nodejs library that concatenates classes
// import Carousel from "react-slick";
// @material-ui/icons
import Done from "@material-ui/icons/Done";
// import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Emerygency from "components/EmergencyCases/Emergency.js";
import ModalImage from "react-modal-image";

import Procsection from "./procsection";

const LeftSection = props => {
  return (
    <GridItem
      xs={12}
      sm={12}
      md={8}
      className={props.classes.gridItem}
      style={{
        paddingLeft: "0px"
      }}
    >
      {props.data.firsthead ? (
        <div>
          <h3 className={props.classes.title}>
            {props.data.firsthead ? props.data.firsthead : null}
          </h3>
          <p className={props.classes.darkbrown}>
            {props.data.firstdesc ? props.data.firstdesc : null}
          </p>
        </div>
      ) : null}
      {props.data.secondhead ? (
        <div>
          <h3 className={props.classes.title}>
            {props.data.secondhead ? props.data.secondhead : null}
          </h3>
          <p className={props.classes.darkbrown}>
            {props.data.seconddesc ? props.data.seconddesc : null}
          </p>
        </div>
      ) : null}
      {props.data.galleryimages ? (
        <div>
          <h3 className={props.classes.title}>
            Some more pictures of Mammary glands removed from some of the
            patients
          </h3>
          <h5 className={props.classes.title}>
            22 yrs of age: Very large Male breasts: Before & After surgery
            (Developed skin burns when he tried to reduce breasts by using a so
            called, ‘slimming heat belt’)
          </h5>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly"
            }}
          >
            {props.data.galleryimages.splice(0, 3).map(item => (
              <div>
                {/* <img src={item.src} alt="First slide" className="slick-image" /> */}
                <ModalImage
                  // className={props.classes.brownborder}
                  small={item.src}
                  large={item.src}
                  hideZoom={true}
                  alt="Certificate 1"
                />
                {/* <div className="slick-caption" style={{ paddingBottom: "0px" }}>
                  <h4>
                    <LocationOn className="slick-icons" />
                    {item.imagecaption}
                  </h4>
                </div> */}
              </div>
            ))}
          </div>
          <h5 className={props.classes.title}>
            27 yrs of age: Very large sagging Male breasts: Before & After
            surgery (Some extra skin was also removed)
          </h5>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly"
            }}
          >
            {props.data.galleryimages.splice(3, 3).map(item => (
              <div>
                {/* <img src={item.src} alt="First slide" className="slick-image" /> */}
                <ModalImage
                  // className={props.classes.brownborder}
                  small={item.src}
                  large={item.src}
                  hideZoom={true}
                  alt="Certificate 1"
                />
                {/* <div className="slick-caption" style={{ paddingBottom: "0px" }}>
                  <h4>
                    <LocationOn className="slick-icons" />
                    {item.imagecaption}
                  </h4>
                </div> */}
              </div>
            ))}
          </div>
          <h5 className={props.classes.title}>
            24 yrs of age: Large Male breasts: Before & After surgery
          </h5>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly"
            }}
          >
            {props.data.galleryimages.splice(6, 3).map(item => (
              <div>
                {/* <img src={item.src} alt="First slide" className="slick-image" /> */}
                <ModalImage
                  // className={props.classes.brownborder}
                  small={item.src}
                  large={item.src}
                  hideZoom={true}
                  alt="Certificate 1"
                />
                {/* <div className="slick-caption" style={{ paddingBottom: "0px" }}>
                  <h4>
                    <LocationOn className="slick-icons" />
                    {item.imagecaption}
                  </h4>
                </div> */}
              </div>
            ))}
          </div>
          <h5 className={props.classes.title}>
            32 yrs of age; Obese man with large breasts and heavy fat deposits
            on side chest wall
          </h5>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly"
            }}
          >
            {props.data.galleryimages.splice(9, 3).map(item => (
              <div>
                {/* <img src={item.src} alt="First slide" className="slick-image" /> */}
                <ModalImage
                  // className={props.classes.brownborder}
                  small={item.src}
                  large={item.src}
                  hideZoom={true}
                  alt="Certificate 1"
                />
                {/* <div className="slick-caption" style={{ paddingBottom: "0px" }}>
                  <h4>
                    <LocationOn className="slick-icons" />
                    {item.imagecaption}
                  </h4>
                </div> */}
              </div>
            ))}
          </div>
          <h5 className={props.classes.title}>
            19 yrs old bodybuilder: Glands bigger on Left side: Exercise and
            diet control do not help in the treatment of male breast
          </h5>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly"
            }}
          >
            {props.data.galleryimages.splice(9, 4).map(item => (
              <div>
                {/* <img src={item.src} alt="First slide" className="slick-image" /> */}
                <ModalImage
                  // className={props.classes.brownborder}
                  small={item.src}
                  large={item.src}
                  hideZoom={true}
                  alt="Certificate 1"
                />
                {/* <div className="slick-caption" style={{ paddingBottom: "0px" }}>
                  <h4>
                    <LocationOn className="slick-icons" />
                    {item.imagecaption}
                  </h4>
                </div> */}
              </div>
            ))}
          </div>
          <h3 className={props.classes.title}>
            CASE HISTORIES OF SOME YOUNG BOYS OPERATED UPON FOR GYNECOMASTIA /
            MALE BREASTS
          </h3>
          <h5 className={props.classes.title}>
            15 yrs old boy with large ‘sagging’ breasts had very large mammary
            glands. One fine morning he refused to go to school unless his
            problem was tackled. It became almost an emergency situation for the
            parents. There was complete transformation in his personality after
            the operation.
            <br /> Very large mammary glands and small volume of fat were
            removed
          </h5>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly"
            }}
          >
            {props.data.galleryimages.splice(9, 3).map(item => (
              <div>
                {/* <img src={item.src} alt="First slide" className="slick-image" /> */}
                <ModalImage
                  // className={props.classes.brownborder}
                  small={item.src}
                  large={item.src}
                  hideZoom={true}
                  alt="Certificate 1"
                />
                {/* <div className="slick-caption" style={{ paddingBottom: "0px" }}>
                  <h4>
                    <LocationOn className="slick-icons" />
                    {item.imagecaption}
                  </h4>
                </div> */}
              </div>
            ))}
          </div>
          <h5 className={props.classes.title}>
            17 yrs old boy: Very large male breasts: Before & After surgery:
            <br />
            This young boy had lost interest in studies and had started
            withdrawing from sports activities in school. He preferred to be
            left alone. These symptoms were very alarming and then the parents
            brought him for a consultation. He was operated upon. Very large
            size mammary glands and large volume of fat was removed. Operation
            brought about a remarkable positive change in his personality. He
            became very friendly and started enjoying group activities. His
            self-confidence was restored.
            <br />
            Very large mammary glands and fat were removed
          </h5>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly"
            }}
          >
            {props.data.galleryimages.splice(12, 3).map(item => (
              <div>
                {/* <img src={item.src} alt="First slide" className="slick-image" /> */}
                <ModalImage
                  // className={props.classes.brownborder}
                  small={item.src}
                  large={item.src}
                  hideZoom={true}
                  alt="Certificate 1"
                />
                {/* <div className="slick-caption" style={{ paddingBottom: "0px" }}>
                  <h4>
                    <LocationOn className="slick-icons" />
                    {item.imagecaption}
                  </h4>
                </div> */}
              </div>
            ))}
          </div>
          <h5 className={props.classes.title}>
            18 yrs old Medical College student: Before & After surgery: This
            young boy was admitted in a medical college and was living in a
            hostel. He often faced embarrassing situations and comments from his
            fellow students. Gradually this led to deterioration in his studies.
            After he was operated upon, he no longer faced embarrassing
            situations like before. His performance in class tests, viva and
            other examinations improved and he regained his lost
            self-confidence.
            <br />
            Very large mammary glands and small volume of fat were removed
          </h5>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly"
            }}
          >
            {props.data.galleryimages.splice(9, 4).map(item => (
              <div>
                {/* <img src={item.src} alt="First slide" className="slick-image" /> */}
                <ModalImage
                  // className={props.classes.brownborder}
                  small={item.src}
                  large={item.src}
                  hideZoom={true}
                  alt="Certificate 1"
                />
                {/* <div className="slick-caption" style={{ paddingBottom: "0px" }}>
                  <h4>
                    <LocationOn className="slick-icons" />
                    {item.imagecaption}
                  </h4>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {props.data.thirdhead ? (
        <div>
          <h3 className={props.classes.title}>
            {props.data.thirdhead ? props.data.thirdhead : null}
          </h3>
          <p className={props.classes.darkbrown}>
            {props.data.thirddesc ? props.data.thirddesc : null}
          </p>
          <div
            className={
              props.classes.ticksection + " " + props.classes.darkbrown
            }
          >
            {props.data.thirdlist
              ? props.data.thirdlist.map(item => (
                  <p>
                    <Done className={props.classes.tickicon} />
                    {item.content}
                  </p>
                ))
              : null}
          </div>
        </div>
      ) : null}

      {/* <p className={props.classes.darkbrown}>
                          It is therefore recommended that before travelling please get yourself checked by your physician and get some routine blood test done. Show the blood tests to your physician and get his approval for undergoing surgery.
                          </p> */}
      {/* <div className={props.classes.browndiv + " " + props.classes.brownborder}>
                              <div style={{flexBasis: "50%",padding: "0 20px"}}>
                                <h4 className={props.classes.title} style={{color: "rgb(94, 71, 44)"}}>Treatments</h4>
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

                              <div style={{flexBasis: "50%",padding: "0 20px"}}>
                                <h4 className={props.classes.title} style={{color: "rgb(94, 71, 44)"}}>Symptoms</h4>
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
      {/* <h3 className={props.classes.title}>{props.data.fifthhead ? props.data.fifthhead : null}</h3>
                          <p className={props.classes.darkbrown}>
                            {props.data.fifthdesc ? props.data.fifthdesc : null}
                          </p> */}

      {props.data.tabshead ? (
        <Procsection classes={props.classes} data={props.data} />
      ) : null}

      {props.data.sixthhead ? (
        <div>
          <h3 className={props.classes.title}>
            {props.data.sixthhead ? props.data.sixthhead : null}
          </h3>
          <p className={props.classes.darkbrown}>
            {props.data.sixthdesc ? props.data.sixthdesc : null}
          </p>
        </div>
      ) : null}

      <Emerygency classes={props.classes} />

      {props.data.seventhhead ? (
        <div>
          <h3 className={props.classes.title}>
            {props.data.seventhhead ? props.data.seventhhead : null}
          </h3>
          <p className={props.classes.darkbrown}>
            {props.data.seventhdesc ? props.data.seventhdesc : null}
          </p>
        </div>
      ) : null}

      {props.data.cardshead ? (
        <div>
          <h3 className={props.classes.title} style={{ marginBottom: "0" }}>
            {props.data.cardshead ? props.data.cardshead : null}
          </h3>
          <GridContainer
            style={{
              margin: "0",
              marginTop: "20px",
              marginBottom: "40px"
            }}
          >
            {props.data.carditems
              ? props.data.carditems.map(item => (
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
      ) : null}

      {/* <div style={{ marginTop: "40px" }}>
        <HalfformSection classes={props.classes} />
      </div> */}
    </GridItem>
  );
};

export default LeftSection;
