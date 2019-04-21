/* eslint-disable */
import React from "react";
// core components
import Header from "components/Header/Header.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx"; 
import Parallax from "components/Parallax/Parallax.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import ScrollToTop from "react-scroll-up";
import Icon from "@material-ui/core/Icon";

import IntPatPageStyle from "assets/jss/material-kit-pro-react/views/IntPatPageStyle.jsx";
import ConatinerFile from "./Sections/conatinerFile";

const dashboardRoutes = [];

class IntPatPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }             
  render() {
    const { classes } = this.props;
    
    return (
      <div>
        <Header
                color="transparent"
                routes={dashboardRoutes}
                brand="Vital Clinic"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}    
            />
        <Parallax
          image={require("assets/img/IntPatientImages/BannerBG.jpg")}
          filter="dark"
          className={classes.parallax}
          style={{height: "480px"}}
        >
          <div className={classes.container} onClick={this.handleClick}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
                <h2 className={classes.title} style={{color:"#fff"}}>
                  National & International Patients
                </h2>
                <h3 className={classes.title} style={{color:"#fff"}}>
                  A place for International Patients to <br/> get treatment in Vital Clinic
                </h3>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        
          <ConatinerFile classes={classes}/>
          <ScrollToTop
            showUnder={160}
            style={{
              zIndex: "1000",
              "&:hover": {
                backgroundColor: "#000",
              }
            }}
          >
            <Icon className={classes.link}>arrow_upward</Icon>
          </ScrollToTop>
      </div>
    );
  }
}

export default withStyles(IntPatPageStyle)(IntPatPage);