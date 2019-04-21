/* eslint-disable react/prop-types */
import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Numbertemplate from "./numbertemplate";
import bgright_2 from "assets/img/ContactUsImages/RightBG/right_first_2.png";
import cont from "assets/img/ContactUsImages/TransIcons/Phone_simple.png";
import mail from "assets/img/ContactUsImages/TransIcons/EMail_simple.png";
import add from "assets/img/ContactUsImages/TransIcons/address_simple.png";

const Contactdet = props => {
  return (
    <div>
      <GridContainer
        style={{ width: "100%", margin: "0", flexWrap: "wrap-reverse" }}
        justify="center"
      >
        <GridItem
          xs={12}
          sm={12}
          md={5}
          style={{
            padding: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div className={props.classes.firsthalf}>
            <h3 className={props.classes.title} style={{ marginTop: "0" }}>
              Contact Details
            </h3>
            <p
              className={
                props.classes.description +
                " " +
                props.classes.browncolor +
                " " +
                props.classes.latofont
              }
              style={{ fontSize: "15px" }}
            >
              {" "}
              VITAL CLINIC is the preferred destination for persons looking for
              high quality work with affordable charges from within India and
              abroad. We have been performing cosmetic surgeries for more than
              25 years for foreign diplomats and their families, international
              patients from more than 50 countries across the globe - from
              Nepal, Sri Lanka, Bangladesh, African countries, Middle-East, UK,
              USA, South-East Asian countries and many more.
            </p>
            <Numbertemplate
              classes={props.classes}
              icon={cont}
              descp={"Emergency Cases"}
              numb={"+91-9810601701"}
              numb2={"+91-9810970070"}
            />
            <Numbertemplate
              classes={props.classes}
              icon={mail}
              descp={"Email"}
              numb={"info@vitalclinic.com"}
              mail={true}
            />
            <Numbertemplate
              classes={props.classes}
              icon={add}
              descp={"Address"}
              numb={"L-3 & M-3, South Extension -II, New Delhi-110 049"}
            />
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={7} style={{ padding: "0" }}>
          <img
            style={{ height: "100%", width: "100%", display: "block" }}
            className={props.classes.imgCardTop}
            src={bgright_2}
            alt="Card-img-cap"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default Contactdet;
