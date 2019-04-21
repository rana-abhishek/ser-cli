import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import Button from 'components/CustomButtons/Button.jsx';

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Twohalfs from "assets/jss/material-kit-pro-react/views/landingPageSections/TwohalfSection.jsx";

import pic1 from "assets/img/lefthalf-bg.jpg";

class TwoHalfSeciton extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer style={{width:"100%",margin:"0",}} justify="center">
           <GridItem cs={12} sm={12} md={6} style={{padding:"0"}}>
            <img
                style={{height: "80vh", width: "100%", display: "block"}}
                className={classes.imgCardTop}
                src={pic1}
                alt="Card-img-cap"
            />
          </GridItem>
          <GridItem cs={12} sm={12} md={6}>
            <div className={classes.sechalf} style={{
              padding: "0 10%"
            }}>
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
                <Button round className={classes.halfbut +" "+ classes.fontblack}>Round</Button>
                </div>
                </div>
            </div>    
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(Twohalfs)(TwoHalfSeciton);
