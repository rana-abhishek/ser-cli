/* eslint-disable react/prop-types */
import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

function MainContent(props) {
  return (
    <div style={{ marginTop: "10vh" }}>
      <div
        style={{
          background: "rgba(166, 123, 63, 0.1)",
          padding: "30px 0",
          border: "4px solid rgb(221, 200, 129)"
        }}
      >
        <GridContainer justify="center" style={{ textAlign: "center" }}>
          <GridItem xs={12} sm={12} md={6}>
            <div className={props.classes.profile}>
              {/* <div>
                    <img src={christian} alt="..." className={props.imageClasses} style={{borderRadius:"50%"}}/>
                  </div> */}
              <div>
                <h3
                  className={props.classes.title}
                  style={{ margin: "10px 0" }}
                >
                  Our National & International Patients
                </h3>
                {/* <Button
                      justIcon
                      simple
                      color="dribbble"
                      className={props.classes.margin5}
                    >
                      <i className={props.classes.socials + " fab fa-dribbble"} />
                    </Button>
                    <Button
                      justIcon
                      simple
                      color="twitter"
                      className={props.classes.margin5}
                    >
                      <i className={props.classes.socials + " fab fa-twitter"} />
                    </Button>
                    <Button
                      justIcon
                      simple
                      color="pinterest"
                      className={props.classes.margin5}
                    >
                      <i className={props.classes.socials + " fab fa-pinterest"} />
                    </Button> */}
              </div>
            </div>
            {/* <div className={classes.follow}>
                  <Tooltip
                    id="tooltip-top"
                    title="Follow this user"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      justIcon
                      round
                      color="primary"
                      className={classes.followButton}
                    >
                      <Add className={classes.followIcon} />
                    </Button>
                  </Tooltip>
                </div> */}
          </GridItem>
        </GridContainer>
        <div className={props.classes.textCenter}>
          <p
            className={props.classes.darkbrown}
            style={{
              fontSize: "16px",
              textAlign: "justify",
              fontFamily: "Lato, sans-serif",
              margin: "0 40px"
            }}
          >
            Our International friends may need a valid VISA to travel to India.
            You should contact the local Indian embassy or Consulate to know the
            requirements to be fulfilled for a VISA. Often you may need a letter
            from our clinic as an invite for surgery. An invite is given when
            you have confirmed your surgery and the dates for surgery. You must
            make sure that you have a valid VISA before you travel to India.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
