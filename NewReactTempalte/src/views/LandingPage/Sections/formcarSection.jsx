import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import Button from 'components/CustomButtons/Button.jsx';

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CarouselSection from "./CarouselSection";
import HalfformSection from './halfformSection';

import Twohalfs from "assets/jss/material-kit-pro-react/views/landingPageSections/TwohalfSection.jsx";

import pic1 from "assets/img/faces/avatar.jpg";

class FormcarSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer style={{width:"100%",margin:"0",}} justify="center">
           <GridItem cs={12} sm={12} md={6} style={{padding:"0"}}>
                <HalfformSection />
          </GridItem>
          <GridItem cs={12} sm={12} md={6} style={{
              padding: "0"
          }}>
            {/* <div className={classes.sechalf}>
                <h2 className={classes.title}>Work with us</h2>
                <div>
                <h4 className={classes.description}>
                Divide details about your product or agency work into parts. Write
                a few lines about each one and contact us about any further
                collaboration. We will responde get back to you in a couple of
                hours.
                </h4>
                <h4 className={classes.description}>
                We provide the highest quality medical care, individualized treatment by the country’s leading experts, and in the shortest amount of time. Each patient is assigned a case manager to handle all medical issues.
                hours.
                </h4>
                <div>
                <Button className={classes.halfbut} color="primary" round>Round</Button>
                </div>
                </div>
            </div>     */}
                <CarouselSection/>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(Twohalfs)(FormcarSection);
