/* eslint-disable react/prop-types */
import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Officetemp from "./officeTemplate";

const Contactaddress = props => {
  return (
    <div>
      <GridContainer style={{ width: "100%", margin: "0" }} justify="center">
        <GridItem xs={12} sm={12} md={6} style={{ padding: "0" }}>
          <Officetemp
            classes={props.classes}
            title={"Vital Clinic"}
            type={"office1"}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6} style={{ padding: "0" }}>
          <Officetemp
            classes={props.classes}
            title={"Vital Clinic"}
            type={"office2"}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default Contactaddress;
