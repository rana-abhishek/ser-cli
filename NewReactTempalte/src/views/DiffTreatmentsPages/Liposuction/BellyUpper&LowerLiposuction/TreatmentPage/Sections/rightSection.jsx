/* eslint-disable react/prop-types */
import React from "react";
import GridItem from "components/Grid/GridItem.jsx";
import image1 from "assets/img/examples/cynthia-del-rio.jpg";
import Cards from "components/CustomCards/doccard.jsx";

const RightSection = props => {
  return (
    <GridItem
      xs={12}
      sm={12}
      md={4}
      className={props.classes.gridItem}
      style={{
        margin: "0",
        padding: "0"
      }}
    >
      <Cards imgsrc={image1} type="list" />
      {/* <h4 className={props.classes.title}>Stats</h4>
                          <ul className={props.classes.listUnstyled} style={{color:"rgb(94, 71, 44)"}}>
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
      {props.data.firsthead ? (
        <div>
          <h4 className={props.classes.title}>
            {props.data.firsthead ? props.data.firsthead : null}
          </h4>
          <p
            className={props.classes.description}
            style={{ color: "rgb(94, 71, 44)" }}
          >
            {props.data.firstdesc ? props.data.firstdesc : null}
          </p>
          <hr />
        </div>
      ) : null}

      {props.data.card ? (
        <div>
          <Cards
            content={props.data.card.content}
            desi={props.data.card.desi}
            name={props.data.card.name}
            head={props.data.card.head}
            imgsrc={props.data.card.image}
            type="people"
          />
        </div>
      ) : null}

      {/* <Cards imgsrc={image1} type="image"/> */}
      {/* <h4 className={props.classes.title}>Focus</h4>
                          <Badge color="primary">Footwear</Badge>
                          <Badge color="rose">Luxury</Badge> */}
    </GridItem>
  );
};

export default RightSection;
