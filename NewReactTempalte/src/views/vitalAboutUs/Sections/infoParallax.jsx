import React from "react";

import classNames from "classnames";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import formbg from "assets/img/halfformbg.jpg";
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import aboutPageStyle from "assets/jss/material-kit-pro-react/views/aboutPageStyle.jsx";

class Infopar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
            <div className={classes.container} style={{
                display: "relative",
                zIndex: "10",
                textAlign: "center"
            }}>
            <GridContainer justify="center">
              <GridItem
                md={8}
                sm={8}
                className={classNames(
                  classes.mlAuto,
                  classes.mrAuto,
                  classes.textCenter
                )}
              >
                <h2 className={classes.title} style={{color: "#fff"}}>About Us</h2>
                <h3 className={classes.title}
                style={{
                    color:"#fff"
                }}
                >
                  Specialty clinic devoted to state-of-the-art<br/> cosmetic surgery
                </h3>
              </GridItem>
            </GridContainer>
             </div>
    )
}
}

export default withStyles(aboutPageStyle)(Infopar);