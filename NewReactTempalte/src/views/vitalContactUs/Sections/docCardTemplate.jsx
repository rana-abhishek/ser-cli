/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.jsx";

import { cardTitle } from "assets/jss/material-kit-pro-react.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import classNames from "classnames";

const style = {
  ...imagesStyles,
  cardTitle
};

class Cards extends React.Component {
  render() {
    const { classes } = this.props;
    let template = null;

    const givecard = props => {
      switch (props.type) {
        case "carddoctor": {
          return (
            <Card profile>
              <CardHeader image>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img
                    src="https://images.unsplash.com/photo-1492447273231-0f8fecec1e3a?auto=format&fit=crop&w=334&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
                    alt="..."
                    style={{ width: "100%" }}
                  />
                </a>
                <div
                  className={props.classes.coloredShadow}
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1492447273231-0f8fecec1e3a?auto=format&fit=crop&w=334&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)`,
                    opacity: "1"
                  }}
                />
              </CardHeader>
              <CardBody style={{ textAlign: "center" }}>
                <h7
                  className={classNames(
                    props.classes.cardCategory,
                    props.classes.cardDescription
                  )}
                >
                  CONSULTING DOCTOR
                </h7>
                <h4 className={props.classes.cardTitle}>Alec Thompson</h4>
                <h6
                  className={`${props.classes.cardCategory} ${
                    props.classes.cardDescription
                  }`}
                >
                  CEO / CO-FOUNDER
                </h6>
              </CardBody>
              <CardFooter
                style={{ justifyContent: "center" }}
                profile
                className={props.classes.justifyContentCenter}
              >
                <Button justIcon round color="twitter">
                  <i className="fab fa-twitter" />
                </Button>
                <Button justIcon round color="facebook">
                  <i className="fab fa-facebook" />
                </Button>
                <Button justIcon round color="google">
                  <i className="fab fa-google" />
                </Button>
              </CardFooter>
            </Card>
          );
        }
        default:
          template = null;
      }
    };

    return <div>{givecard(this.props)}</div>;
  }
}

export default withStyles(style)(Cards);
