import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import formbg from "assets/img/bg2.jpg";
import formbg1 from "assets/img/formbg.jpg";
import formbg2 from "assets/img/workwithus.jpg";
import formbg3 from "assets/img/workwithus1.jpg";

import workStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/workStyle.jsx";

class WorkSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div style={{position:"relative",height:"50vh"}}>
      <div className={classes.section} style={{backgroundImage: `url(${formbg3})`,height:"50vh",backgroundSize:"cover",filter:"brightness(1.3)"}}>
      </div>
        <GridContainer justify="center" style={{marginRight:"0",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"80vw"}}>
          <GridItem cs={12} sm={12} md={8} className={classes.overlay}>
            <h2 className={classes.title} style={{
              color: "#ffffff",
              fontFamily: "Oswald, sans-serif",
              fontWeight: "800",
              letterSpacing: "0",
              marginBottom: "0"
            }}>Stay In Touch</h2>
            <h4 className={classes.description} style={{
              fontWeight: "400",
              fontSize: "24px",
              fontFamily: "Oswald, sans-serif"
            }}>
              Join our email list and be the first to know about <br/>specials, events and more
            </h4>
            <form>
              <GridContainer style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <GridItem xs={6} sm={6} md={6} style={{
                  padding:"0",
                  flexBasis: "auto"
                }}>
                  <CustomInput
                    labelText="Enter Your Mail"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    style={{
                      width:"75%"
                    }}
                    white = "true"
                  />
                </GridItem>
                <GridItem
                    xs={4}
                    sm={4}
                    md={4}
                    className={classes.textCenter}
                    style={{
                      padding:"0",
                      width:"auto",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexBasis: "auto"
                    }}
                  >
                    <Button color="primary" style={{
                      backgroundColor: "rgb(41, 44, 48)"
                    }}>Sign Up</Button>
                  </GridItem>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      
      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);
