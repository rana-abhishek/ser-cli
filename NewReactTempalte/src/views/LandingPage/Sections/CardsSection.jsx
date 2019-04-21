import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Button from "components/CustomButtons/Button.jsx";

import { cardTitle } from "assets/jss/material-kit-pro-react.jsx";

const style = {
  cardTitle,
};

class CardsSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
    <div className={classes.section}>
        <h2 className={classes.title}>Tabs</h2>
        <GridContainer >
        <GridItem xs={12} sm={12} md={4}>
            <Card style={{width: "20rem",textAlign: "center"}}>
                <CardBody>
                <h4 className={classes.cardTitle}>Special title treatment</h4>
                <p>
                    With supporting text below as a
                    natural lead-in to additional content.
                    With supporting text below as a
                    natural lead-in to additional content.
                    With supporting text below as a
                    natural lead-in to additional content.
                </p>
                <Button color="primary">Do something</Button>
                </CardBody>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
            <Card style={{width: "20rem",textAlign: "center"}}>
                <CardBody>
                <h4 className={classes.cardTitle}>Special title treatment</h4>
                <p>
                    With supporting text below as a
                    natural lead-in to additional content.
                    With supporting text below as a
                    natural lead-in to additional content.
                    With supporting text below as a
                    natural lead-in to additional content.
                </p>
                <Button color="primary">Do something</Button>
                </CardBody>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
            <Card style={{width: "20rem",textAlign: "center"}}>
                <CardBody>
                <h4 className={classes.cardTitle}>Special title treatment</h4>
                <p>
                    With supporting text below as a
                    natural lead-in to additional content.
                    With supporting text below as a
                    natural lead-in to additional content.
                    With supporting text below as a
                    natural lead-in to additional content.
                </p>
                <Button color="primary">Do something</Button>
                </CardBody>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
            <Card style={{width: "20rem",textAlign: "center"}}>
                <CardBody>
                <h4 className={classes.cardTitle}>Special title treatment</h4>
                <p>
                    With supporting text below as a
                    natural lead-in to additional content.
                    With supporting text below as a
                    natural lead-in to additional content.
                    With supporting text below as a
                    natural lead-in to additional content.
                </p>
                <Button color="primary">Do something</Button>
                </CardBody>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
            <Card style={{width: "20rem",textAlign: "center"}}>
                <CardBody>
                <h4 className={classes.cardTitle}>Special title treatment</h4>
                <p>
                    With supporting text below as a
                    natural lead-in to additional content.
                    With supporting text below as a
                    natural lead-in to additional content.
                    With supporting text below as a
                    natural lead-in to additional content.
                </p>
                <Button color="primary">Do something</Button>
                </CardBody>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
            <Card style={{width: "20rem",textAlign: "center"}}>
                <CardBody>
                <h4 className={classes.cardTitle}>Special title treatment</h4>
                <p>
                    With supporting text below as a
                    natural lead-in to additional content.
                    With supporting text below as a
                    natural lead-in to additional content.
                    With supporting text below as a
                    natural lead-in to additional content.
                </p>
                <Button color="primary">Do something</Button>
                </CardBody>
            </Card>
        </GridItem>
        </GridContainer>
    </div>
    );
  }
}

export default withStyles(style)(CardsSection);