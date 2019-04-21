/* eslint-disable react/prop-types */
import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import ModalImage from "react-modal-image";

import cert1 from "assets/img/AboutUsImages/CertImages/cert1.jpg";
import cert2 from "assets/img/AboutUsImages/CertImages/cert2.jpg";
import cert3 from "assets/img/AboutUsImages/CertImages/cert3.jpg";
import cert4 from "assets/img/AboutUsImages/CertImages/cert4.jpg";

const DipcertSection = props => {
  return (
    <div>
      <h3
        className={props.title}
        style={{
          marginTop: "10px",
          marginBottom: "20px"
        }}
      >
        Diplomas and Certificates
      </h3>
      <p className={props.classes.browncolor + " " + props.classes.fontcontent}>
        Medical Center has been a medical service provider in all fields of
        medicine for the Diplomats and their families for the past twenty years
        and keeps on maintaining a successful cooperation between the two
        bodies.
      </p>

      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <ModalImage
            className={props.classes.brownborder}
            small={cert1}
            large={cert1}
            hideZoom={true}
            alt="Certificate 1"
          />
          {/* <img
            className={props.classes.brownborder}
            style={{ width: "100%" }}
            src={cert1}
          /> */}
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <ModalImage
            className={props.classes.brownborder}
            small={cert2}
            large={cert2}
            hideZoom={true}
            alt="Certificate 1"
          />
          {/* <img
            className={props.classes.brownborder}
            style={{ width: "100%" }}
            src={cert2}
          /> */}
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <ModalImage
            className={props.classes.brownborder}
            small={cert3}
            large={cert3}
            hideZoom={true}
            alt="Certificate 1"
          />
          {/* <img
            className={props.classes.brownborder}
            style={{ width: "100%" }}
            src={cert3}
          /> */}
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <ModalImage
            className={props.classes.brownborder}
            small={cert4}
            large={cert4}
            hideZoom={true}
            alt="Certificate 1"
          />
          {/* <img
            className={props.classes.brownborder}
            style={{ width: "100%" }}
            src={cert4}
          /> */}
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default DipcertSection;
