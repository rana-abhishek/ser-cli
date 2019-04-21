import React from "react";
// @material-ui/core components
import Datetime from "react-datetime";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import formbg from "assets/img/halfformbg.jpg";
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import halfformStyle from "assets/jss/material-kit-pro-react/views/treatmentSections/halfStyle.jsx";

class HalfformSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section} style={{
          backgroundColor:"#be6584",
          opacity: "0.8",
          padding: "25px",
          ":hover": {
              padding: "50px"
          }
        }}>
        <GridContainer justify="center" style={{marginRight:"0"}}>
          <GridItem cs={12} sm={12} md={8} style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "0"
          }}>
            <h2 className={classes.title} style={{color: "#ffffff",fontFamily:"Oswald, sans-serif"}}>MAKE AN APPOINTMENT</h2>
            {/* <h4 className={classes.description}>
              Divide details about your product or agency work into parts. Write
              a few lines about each one and contact us about any further
              collaboration. We will responde get back to you in a couple of
              hours.
            </h4> */}
            <form>
              <GridContainer style={{width: "100%",margin: "0"}}>
                <GridItem xs={12} sm={12} md={12}>
                    <div>
                        <FormControl fullWidth>
                            <Datetime
                                inputProps={{ placeholder: "DD-MM-YYYY" }}
                                color="#000000"
                            />
                        </FormControl>
                    </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Select Department"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Full Name"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Phone Number"
                    id="number"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                {/* <CustomInput
                  labelText="Your Message"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}
                  white = "true"
                /> */}
                {/* <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Phone Number"
                    id="number"
                    formControlProps={{
                      fullWidth: true
                    }}
                    white = "true"
                  />
                </GridItem> */}
                <GridContainer style={{marginLeft: "0"}}>
                  <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    className={classes.textCenter}
                  >
                    <Button style={{
                        marginTop: "20px",
                        backgroundColor: "transparent",
                        border: "1px solid #fff"
                    }} round color="primary">Send Request</Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(halfformStyle)(HalfformSection);
