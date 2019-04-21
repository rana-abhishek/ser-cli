/* eslint-disable react/prop-types */
import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import Mr_JB_Ratti from "assets/img/AboutUsImages/DoctorImage/Mr_JB_Ratti.jpg";
import Mrs_JB_Ratti from "assets/img/AboutUsImages/DoctorImage/Mrs_JB_Ratti.jpg";

const MedspecSections = props => {
  return (
    <div>
      <h3
        className={props.classes.title}
        style={{
          marginTop: "30px",
          marginBottom: "0"
        }}
      >
        Our Doctors
      </h3>

      <GridContainer
        style={{
          margin: "0",
          marginTop: "0px",
          marginBottom: "0px"
        }}
      >
        <GridItem xs={12} sm={12} md={12} style={{ padding: "0" }}>
          <Card
            profile
            className={
              props.classes.browmoverlay + " " + props.classes.brownborder
            }
            style={{ marginBottom: "0" }}
          >
            <CardHeader>
              <div>
                <img
                  src={Mr_JB_Ratti}
                  alt="..."
                  style={{
                    width: "100%",
                    height: "100%",
                    marginTop: "40px"
                  }}
                />
              </div>
              <div
                className={props.classes.coloredShadow}
                style={{
                  backgroundImage: { Mr_JB_Ratti },
                  opacity: "1"
                }}
              />
            </CardHeader>
            <CardBody style={{ textAlign: "center", paddingBottom: "0px" }}>
              <h5
                className={`${props.classes.cardCategory} ${
                  props.classes.cardDescription
                } ${props.classes.browncolor}`}
              >
                MBBS, MS, is a Senior Consultant in Cosmetic
              </h5>
              <h4
                className={
                  props.classes.cardTitle + " " + props.classes.browncolor
                }
              >
                Dr. JB Ratti
              </h4>
              <h6
                className={`${props.classes.cardCategory} ${
                  props.classes.cardDescription
                } ${props.classes.browncolor}`}
              >
                Indian Medical Association Association of Surgeons of India
                American Academy of Cosmetic Surgery
              </h6>
              <p
                className={
                  props.classes.browncolor + " " + props.classes.fontcontent
                }
              >
                Dr. JB Ratti MBBS, MS, is a Senior Consultant in Surgery. He
                belongs to the 1972 batch of King George s Medical College
                Lucknow, being one of the most respected medical institutions in
                India. After finishing his graduation in 1976 he did
                post-graduation in surgery from the same institution in 1980.
                From 1981-1982 he was Chief Resident in the department of
                surgery in King Georges Medical College. Following this he was
                Senior Resident in the department of surgery in Lady Hardinge
                Medical College, Delhi.
              </p>
              <p
                className={
                  props.classes.browncolor + " " + props.classes.fontcontent
                }
              >
                For six years he worked as Senior Consultant Surgeon in
                Salahuddin University Hospital, Tripoli, Libya. Since 1991 he
                has his private practice in Delhi. Dr. JB Ratti is a Senior
                Surgeon with special interest in Cosmetic surgery totally under
                local anesthesia where the patient remains awake throughout.
                These cosmetic surgeries are done by innovatively applying the
                principles of tumescent anesthesia as described by Dr Jeffrey
                Klein of USA.
              </p>

              <br />
            </CardBody>
            {/* <CardFooter style={{justifyContent:"center"}} profile className={props.classes.justifyContentCenter}>
                                <Button justIcon round color="twitter">
                                <i className="fab fa-twitter" />
                                </Button>
                                <Button justIcon round color="facebook">
                                <i className="fab fa-facebook" />
                                </Button>
                                <Button justIcon round color="google">
                                <i className="fab fa-google" />
                                </Button>
                            </CardFooter> */}
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} style={{ padding: "0" }}>
          <Card
            profile
            className={
              props.classes.browmoverlay + " " + props.classes.brownborder
            }
          >
            <CardHeader image>
              <div>
                <img
                  src={Mrs_JB_Ratti}
                  alt="..."
                  style={{
                    width: "100%",
                    height: "100%",
                    marginTop: "40px"
                  }}
                />
              </div>
              <div
                className={props.classes.coloredShadow}
                style={{
                  backgroundImage: { Mrs_JB_Ratti },
                  opacity: "1"
                }}
              />
            </CardHeader>
            <CardBody style={{ textAlign: "center", paddingBottom: "0px" }}>
              <h5
                className={`${props.classes.cardCategory} ${
                  props.classes.cardDescription
                } ${props.classes.browncolor}`}
              >
                Senior Cosmetic Gynecologist
              </h5>
              <h4
                className={
                  props.classes.cardTitle + " " + props.classes.browncolor
                }
              >
                Dr. (Mrs.) Neeta Ratti
              </h4>
              <h6
                className={`${props.classes.cardCategory} ${
                  props.classes.cardDescription
                } ${props.classes.browncolor}`}
              >
                MBBS, MS (Obstetrics & Gynecology) is a
              </h6>
              <p
                className={
                  props.classes.browncolor + " " + props.classes.fontcontent
                }
              >
                Dr. (Mrs.) Neeta Ratti MBBS, MS (Obstetrics & Gynecology) is a
                senior Cosmetic Gynecologist. She belongs to MBBS 1972 batch of
                GSVM Medical College. After finishing her graduation in 1976
                from GSVM Medical College Kanpur India, she did her
                post-graduation in 1980 (December) from the same institution.
                For a year she was Clinical Demonstrator (Teaching job, Post –
                MS) at LLR Hospital, GSVM Medical College, Kanpur.
              </p>
              <p
                className={
                  props.classes.browncolor + " " + props.classes.fontcontent
                }
              >
                For six years she was Senior Consultant in the department of
                Obstetrics & Gynecology in Salah Uddin University Hospital,
                Tripoli, Libya. From 1992 she has her own Consultation Practice
                in Cosmetic Gynecology. Dr. (Mrs.) Neeta Ratti is a member of
                Indian Medical Association, Federation of Obstetricians &
                Gynecologists of India and regular attendee at annual meetings
                of American Academy of Cosmetic Surgery in USA. Dr Neeta Ratti
                has pioneered the practice of cosmetic gynecology and is also
                heading the department of advanced non-surgical cosmetic surgery
                procedures like VITAL Skin-tite™ for face-lift & ROOTActiv™ for
                hair rejuvenation through PRP.
              </p>
              <br />
            </CardBody>
            {/* <CardFooter style={{justifyContent:"center"}} profile className={props.classes.justifyContentCenter}>
                                <Button justIcon round color="twitter">
                                <i className="fab fa-twitter" />
                                </Button>
                                <Button justIcon round color="facebook">
                                <i className="fab fa-facebook" />
                                </Button>
                                <Button justIcon round color="google">
                                <i className="fab fa-google" />
                                </Button>
                            </CardFooter> */}
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default MedspecSections;
