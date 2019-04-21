/* eslint-disable react/prop-types */
import React from "react";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import docbg2 from "assets/img/befafter.jpg";

import halfformStyle from "assets/jss/material-kit-pro-react/views/treatmentSections/halfStyle.jsx";

class HalfformSection extends React.Component {
  state = {
    name: "",
    email: "",
    mobile: "",
    address: "",
    message: "",
    mobileIsNum: true,
    success: false
  };

  handleInputName = event => {
    this.setState({ name: event.target.value });
  };

  handleInputEmail = event => {
    this.setState({ email: event.target.value });
  };

  handleInputMobile = event => {
    this.setState({ mobile: event.target.value });
  };

  // handleNumber = () => {
  //   if(this.state.mobileIsNum){
  //     this.setState({ mobile: '', mobileIsNum: true })
  //   }
  // }

  handleInputAddress = event => {
    this.setState({ address: event.target.value });
  };

  handleInputMessage = event => {
    this.setState({ message: event.target.value });
  };

  submitForm = e => {
    e.preventDefault();
  };

  render() {
    const { classes } = this.props;
    return (
      <div
        className={classes.section}
        style={{
          background: `URL('${docbg2}')`,
          opacity: "0.8",
          padding: "25px",
          height: "100%",
          display: "flex",
          ":hover": {
            padding: "50px"
          }
        }}
      >
        <GridContainer
          justify="center"
          style={{
            maringRight: "0",
            marginLeft: "0",
            width: "calc(100vw - 50px)"
          }}
        >
          <GridItem
            cs={12}
            sm={12}
            md={8}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "0"
            }}
          >
            <h2
              style={{
                color: "rgb(221, 200, 129)",
                fontFamily: "Oswald, sans-serif",
                fontSize: "30px"
              }}
            >
              Enquiry
            </h2>
            {/* <h4 className={classes.description}>
              Divide details about your product or agency work into parts. Write
              a few lines about each one and contact us about any further
              collaboration. We will responde get back to you in a couple of
              hours.
            </h4> */}
            <form
              // onSubmit={this.submitForm}
              action="/api/sendmail"
              method="POST"
              encType="multipart/form-data"
              target="_blank"
            >
              <GridContainer style={{ width: "100%", margin: "0" }}>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    type="text"
                    labelText="Name"
                    id="name"
                    name="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    value={this.state.name}
                    onChange={this.handleInputName}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    type="email"
                    labelText="Email"
                    id="email"
                    name="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    value={this.state.email}
                    onChange={this.handleInputEmail}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    type="number"
                    labelText="Mobile"
                    id="number"
                    name="mobile"
                    formControlProps={{
                      fullWidth: true
                    }}
                    value={this.state.mobile}
                    onChange={this.handleInputMobile}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  {/* <div>
                        <FormControl fullWidth>
                            <Datetime
                                inputProps={{ placeholder: "DD-MM-YYYY" }}
                                className={classes.dateholder}
                            />
                        </FormControl>
                    </div> */}
                  <CustomInput
                    type="text"
                    labelText="Address"
                    id="name"
                    name="address"
                    formControlProps={{
                      fullWidth: true
                    }}
                    value={this.state.address}
                    onChange={this.handleInputAddress}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    type="text"
                    labelText="Your Message"
                    id="name"
                    name="message"
                    formControlProps={{
                      fullWidth: true
                    }}
                    value={this.state.message}
                    onChange={this.handleInputMessage}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <input
                    type="file"
                    name="uploadedImages"
                    multiple
                    style={{ color: "rgb(221, 200, 129)", padding: "25px 0" }}
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
                <GridContainer style={{ marginLeft: "0" }}>
                  <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    className={classes.textCenter}
                  >
                    <Button round className={classes.darkbutton} type="submit">
                      Send Request
                    </Button>
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
