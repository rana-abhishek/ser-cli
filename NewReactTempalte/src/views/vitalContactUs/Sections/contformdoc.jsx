/* eslint-disable react/prop-types */
import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Leftdoccards from "./leftDocCards";
import DocRightform from "./rightFormSection";

const Contactform = props => {
  return (
    <div>
      <GridContainer style={{ width: "100%", margin: "0" }} justify="center">
        <GridItem
          xs={12}
          sm={12}
          md={6}
          style={{ padding: "0" }}
          className={props.classes.browmoverlay}
        >
          <Leftdoccards classes={props.classes} />
        </GridItem>
        <GridItem xs={12} sm={12} md={6} style={{ padding: "0" }}>
          <DocRightform classes={props.classes} />
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default Contactform;
