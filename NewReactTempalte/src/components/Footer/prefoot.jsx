/* eslint-disable react/prop-types */
import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import image15 from "assets/img/common/FooterImages/IMA-Logo.png";
import Button from "components/CustomButtons/Button.jsx";
import { Link } from "react-router-dom";

const PreFoot = props => {
  return (
    <div
      style={{
        padding: "55px 0",
        backgroundColor: "rgb(94, 71, 44)"
      }}
    >
      <GridContainer
        style={{
          maxWidth: "1200px",
          marginRight: "auto",
          marginLeft: "auto"
        }}
      >
        <GridItem xs={12} sm={12} md={9} lg={9}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly"
            }}
          >
            <GridContainer>
              <GridItem xs={12} sm={12} md={3} lg={3}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: "200px",
                    maxHeight: "200px",
                    margin: "0 auto"
                    // height: "100%",
                    // width: "100%"
                  }}
                >
                  <img
                    style={{ width: "100%", height: "auto" }}
                    src={image15}
                  />
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={9} lg={9}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <h3
                    className={props.classes.nobortitle}
                    style={{
                      marginBottom: "0",
                      color: "rgb(221, 200, 129)",
                      padding: "0",
                      textAlign: "center"
                    }}
                  >
                    Preferred Destination for All Cosmetic Surgery Requirements
                  </h3>
                  <p
                    className={props.classes.footdescription}
                    style={{
                      fontSize: "16px",
                      color: "rgb(221, 200, 129)",
                      textAlign: "center",
                      fontFamily: "Lato, sans-serif"
                    }}
                  >
                    We offer extensive range of cosmetic surgery procedures by
                    the world’s most advanced Tumescent Technique
                  </p>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={3} lg={3} style={{ margin: "10px 0" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Link to="/contactus">
              <Button
                className={props.classes.footbut}
                color="transparent"
                round
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default PreFoot;
