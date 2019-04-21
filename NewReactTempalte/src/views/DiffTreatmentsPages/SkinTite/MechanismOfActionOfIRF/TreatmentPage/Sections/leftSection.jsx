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
          <h3 className={props.classes.title}>ReformCRF for Skin Tightening</h3>
          <h5 className={props.classes.title}>
            Non-Surgical Face Lift with ReformCRF– it really works!
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
          <br />
          <p className={props.classes.darkbrown}>
            Non- Surgical Face Lift is achieved by promoting new collagen
            formation in the deeper layers of skin.
            <br /> To understand the mechanism of Non-surgical Face Lift, we
            need to understand the properties of collagen. It is a very
            specialized tissue in the skin, organs and body joints. Healthy
            collagen retains lot of water. The suppleness and softness of a
            young person’s skin is due to the presence of healthy young
            collagen. Bone joints retain their flexibility also due to this
            amazing tissue. The suppleness of blood vessels like those in heart,
            kidneys, brain and eyes and other body organs, is due to the
            presence of young and healthy collagen.
          </p>
          <p className={props.classes.darkbrown}>
            As age advances, collagen also ages and starts to lose its
            elasticity and suppleness. Due to a process called “intermolecular
            cross-linking of collagen molecules”, leading to less water holding
            capacity and as a result body tissues start stiffening. This change
            is visible in stiffening of the joints, arteries of heart, kidneys
            and brain etc. Most visible change is seen on face where the tissues
            start losing their tone and tight effect. A good tone of the face
            skin gives a person a younger look. On the contrary when collagen in
            the face skin loses its suppleness, skin starts sagging giving the
            face its aged look. So, can we reverse this process by some means?
            Do we have the technology that can restore healthy collagen in the
            skin? Fortunately, yes we have.
          </p>
          <p className={props.classes.darkbrown}>
            Modern technology allows us to replace ageing collagen with young
            and healthy collagen. Regulated energy emitted by modern
            Radio-frequency machines are capable of bringing about this change.
            Addition of Infra-red energies to Radio-frequency has proven to be
            very effective in bringing about this change. Infra-red &
            Radio-frequency – IRF used at VITAL CLINIC gives very effective and
            lasting replacement of ageing collagen with young and healthy
            collagen. During the entire process there is simultaneous cooling of
            the skin surface so that there is no discomfort to the patient
            during treatment.
          </p>
          <p className={props.classes.darkbrown}>
            ReformCRF combines the best technologies in the world to give
            non-surgical skin tightening without any side effects and downtime.,
          </p>
          <p className={props.classes.darkbrown}>
            Wrinkles and loose skin can take its toll on your looks. Even
            healthy and active people eventually show signs of aging on their
            faces. Since it’s the most important visual feature of your body,
            it’s important to keep your face fresh and youthful.
          </p>
          <p className={props.classes.darkbrown}>
            Body skin can become loose due to natural ageing, weight-loss and
            liposuction. The visible appearance of loose skin is due to loss of
            natural contracting power of the collagen fibres in deep layer of
            skin, the dermis.
          </p>
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
