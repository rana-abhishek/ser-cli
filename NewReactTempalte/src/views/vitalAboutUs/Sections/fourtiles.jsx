import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.jsx";
import Cards from "./doccard";

import pic1 from "assets/img/tile-1.jpg";
import tile from "assets/img/treatmenttile.jpg"
import pic2 from "assets/img/tile-2.jpg";
import pic3 from "assets/img/tile-3.jpg";
import pic4 from "assets/img/tile-4.jpg";

import { cardTitle } from "assets/jss/material-kit-pro-react.jsx";

const style = {
  ...imagesStyles,
  cardTitle,
};

class Fourtiles extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <div style={{
            margin:'0px',
            backgroundColor: "#f9fbfc"
        }}>
        <GridContainer style={{
            marginRight: "0",
            padding: "50px 150px"
        }} >
            <GridItem style={{padding:'0px'}} xs={12} sm={3} md={3}>
                {/* <img
                style={{height: "230px", width: "100%", display: "block",borderRadius: "0"}}
                className={classes.imgCardTop}
                src={pic1}
                alt="Card-img-cap"
                /> */}
                <Cards src={tile} type="fourtiles"/>
                </GridItem>
                <GridItem style={{padding:'0px'}} xs={12} sm={3} md={3}>
                {/* <img
                style={{height: "230px", width: "100%", display: "block",borderRadius: "0"}}
                className={classes.imgCardTop}
                src={pic1}
                alt="Card-img-cap"
                /> */}
                <Cards src={tile} type="fourtiles"/>
                </GridItem>
                <GridItem style={{padding:'0px'}} xs={12} sm={3} md={3}>
                {/* <img
                style={{height: "230px", width: "100%", display: "block",borderRadius: "0"}}
                className={classes.imgCardTop}
                src={pic1}
                alt="Card-img-cap"
                /> */}
                <Cards src={tile} type="fourtiles"/>
                </GridItem>
                <GridItem style={{padding:'0px'}} xs={12} sm={3} md={3}>
                {/* <img
                style={{height: "230px", width: "100%", display: "block",borderRadius: "0"}}
                className={classes.imgCardTop}
                src={pic1}
                alt="Card-img-cap"
                /> */}
                <Cards src={tile} type="fourtiles"/>
                </GridItem>
          </GridContainer>
        </div>
    );
  }
}

export default withStyles(style)(Fourtiles);