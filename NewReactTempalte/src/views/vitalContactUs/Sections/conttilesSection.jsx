/* eslint-disable react/prop-types */
import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import ContInfoArea from "./infoareaTemplate";
import tile1 from "assets/img/ContactUsImages/TransIcons/tile1.png";
import tile2 from "assets/img/ContactUsImages/TransIcons/tile2.png";
import tile3 from "assets/img/ContactUsImages/TransIcons/tile3.png";

const ContactTiles = props => {
  return (
    <div>
      <GridContainer style={{ width: "100%", margin: "0" }} justify="center">
        <GridItem
          xs={12}
          sm={12}
          md={4}
          style={{
            padding: "0",
            background: "rgba(94, 71, 44, 0.7)"
          }}
        >
          <ContInfoArea
            classes={props.classes}
            icon={tile1}
            descr={
              "Your health is your most important asset. You should entrust it only to the best professionals."
            }
            title={"Experienced Physicians"}
          />
        </GridItem>
        <GridItem
          xs={12}
          sm={12}
          md={4}
          style={{
            padding: "0",
            backgroundColor: "rgba(94, 71, 44, 0.8)"
          }}
        >
          <ContInfoArea
            classes={props.classes}
            icon={tile2}
            descr={
              "Treatment choices perfectly match your goals. Safest and advanced techniques give best results."
            }
            title={"Personalized Treatment"}
          />
        </GridItem>
        <GridItem
          xs={12}
          sm={12}
          md={4}
          style={{
            padding: "0",
            backgroundColor: "rgba(94, 71, 44, 0.9)"
          }}
        >
          <ContInfoArea
            classes={props.classes}
            icon={tile3}
            descr={
              "As far as possible, we will accommodate you at the earliest, to save your time."
            }
            title={"Early surgery dates"}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default ContactTiles;
