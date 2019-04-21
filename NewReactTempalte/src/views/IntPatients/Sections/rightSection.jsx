/* eslint-disable react/prop-types */
import React from "react";
import GridItem from "components/Grid/GridItem.jsx";
import image1 from "assets/img/examples/cynthia-del-rio.jpg";
import RightCardImage from "assets/img/IntPatientImages/RightProfileImage.jpg";
import Cards from "components/CustomCards/doccard.jsx";

const RightSection = props => {
  return (
    <GridItem
      xs={12}
      sm={12}
      md={4}
      className={props.classes.gridItem}
      style={{
        margin: "0"
      }}
    >
      <Cards imgsrc={image1} type="list" />
      {/* <h4 className={props.classes.title}>Stats</h4>
      <ul
        className={props.classes.listUnstyled}
        style={{ color: "rgb(94, 71, 44)" }}
      >
        <li>
          <b>60</b> Products
        </li>
        <li>
          <b>4</b> Collections
        </li>
        <li>
          <b>331</b> Influencers
        </li>
        <li>
          <b>1.2K</b> Likes
        </li>
      </ul>
      <hr /> */}
      <h4 className={props.classes.title}>About International Patients</h4>
      <p
        className={props.classes.description}
        style={{ color: "rgb(94, 71, 44)" }}
      >
        Our International friends may need a valid VISA to travel to India. You
        should contact the local Indian embassy or Consulate to know the
        requirements to be fulfilled for a VISA. Often you may need a letter
        from our clinic as an invite for surgery. An invite is given when you
        have confirmed your surgery and the dates for surgery. You must make
        sure that you have a valid VISA before you travel to India.
      </p>
      <hr />
      <Cards imgsrc={RightCardImage} type="people" />
      {/* <Cards imgsrc={image1} type="image" /> */}
      {/* <h4 className={props.classes.title}>Focus</h4>
                          <Badge color="primary">Footwear</Badge>
                          <Badge color="rose">Luxury</Badge> */}
    </GridItem>
  );
};

export default RightSection;
