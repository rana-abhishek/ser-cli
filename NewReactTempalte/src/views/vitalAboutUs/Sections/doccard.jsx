/* eslint-disable react/prop-types */
import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Icon from "@material-ui/icons/Call";

import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.jsx";

import { cardTitle } from "assets/jss/material-kit-pro-react.jsx";
import Button from "components/CustomButtons/Button.jsx";

const style = {
  ...imagesStyles,
  cardTitle
};

class Cards extends React.Component {
  render() {
    const { classes } = this.props;

    const givecard = props => {
      switch (props.type) {
        case "image": {
          return (
            <Card>
              <img
                className={classes.imgCardTop}
                src={this.props.imgsrc}
                alt="Card-img-cap"
              />
              <CardBody
                style={{
                  backgroundColor: "#636970"
                }}
              >
                <h6
                  className={classes.cardTitle}
                  style={{
                    color: "pink",
                    fontFamily: "Abril Fatface, display",
                    fontWeight: "200"
                  }}
                >
                  MEDICAL DOCTOR
                </h6>
                <h4
                  className={classes.cardTitle}
                  style={{
                    color: "white"
                  }}
                >
                  Dr. Greg House
                </h4>
                <p
                  style={{
                    color: "white"
                  }}
                >
                  + 800 123 45 67
                  <br />
                  info@beclinic.com
                </p>
                {/* <p><small className={classes.textMuted}>Last updated 3 mins ago</small></p> */}
              </CardBody>
            </Card>
          );
        }
        case "list": {
          return (
            <Card
              style={{ background: "rgba(166,123,63,0.1)" }}
              className={this.props.classes.brownborder}
            >
              <CardBody>
                <h4
                  className={classes.cardTitle}
                  style={{
                    color: "rgb(94, 71, 44)",
                    fontFamily: "Abril Fatface, display",
                    fontWeight: "200",
                    fontSize: "22px"
                  }}
                >
                  Treatments
                </h4>
                <ul
                  style={{
                    color: "rgb(94, 71, 44)",
                    paddingLeft: "20px"
                  }}
                >
                  <Link to="/landing-page">
                    <li
                      style={{
                        color: "rgb(94, 71, 44)",
                        paddingBottom: "5px"
                      }}
                      className={props.classes.fontcontent}
                    >
                      Facials
                    </li>
                  </Link>
                  <li
                    style={{ color: "rgb(94, 71, 44)", paddingBottom: "5px" }}
                    className={props.classes.fontcontent}
                  >
                    Body Treatments
                  </li>
                  <li
                    style={{ color: "rgb(94, 71, 44)", paddingBottom: "5px" }}
                    className={props.classes.fontcontent}
                  >
                    Waxing
                  </li>
                  <li
                    style={{ color: "rgb(94, 71, 44)", paddingBottom: "5px" }}
                    className={props.classes.fontcontent}
                  >
                    Massage
                  </li>
                  <li
                    style={{ color: "rgb(94, 71, 44)", paddingBottom: "5px" }}
                    className={props.classes.fontcontent}
                  >
                    Finishing Touches
                  </li>
                  <li
                    style={{ color: "rgb(94, 71, 44)", paddingBottom: "5px" }}
                    className={props.classes.fontcontent}
                  >
                    Pulmonary
                  </li>
                </ul>
                {/* <p><small className={classes.textMuted}>Last updated 3 mins ago</small></p> */}
              </CardBody>
            </Card>
          );
        }
        case "cardinfo": {
          return (
            <Card
              style={{
                margin: "0",
                background: "rgba(166,123,63,0.1)"
              }}
              className={props.classes.brownborder}
            >
              <CardBody
                style={{
                  padding: "30px"
                }}
              >
                <h4
                  className={classes.cardTitle}
                  style={{
                    color: "rgb(94, 71, 44)",
                    fontFamily: "Abril Fatface, display",
                    fontWeight: "200"
                  }}
                >
                  Opening Hours
                </h4>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: "20px",
                    paddingBottom: "10px",
                    borderBottom: "1px solid #edeff1",
                    color: "rgb(94, 71, 44)"
                  }}
                >
                  <span>
                    <b>Monday-Friday</b>
                  </span>
                  <span>8.00-18.00</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: "20px",
                    paddingBottom: "10px",
                    borderBottom: "1px solid #edeff1"
                  }}
                >
                  <span>
                    <b>Saturday</b>
                  </span>
                  <span>9.00-17.00</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: "20px",
                    paddingBottom: "10px",
                    borderBottom: "1px solid #edeff1"
                  }}
                >
                  <span>
                    <b>Sunday</b>
                  </span>
                  <span>9.00-15.00</span>
                </div>
                {/* <p><small className={classes.textMuted}>Last updated 3 mins ago</small></p> */}
              </CardBody>
            </Card>
          );
        }
        case "fourtiles": {
          return (
            <div style={{ padding: "0 20px" }}>
              <Card
                style={{ borderRadius: "0", margin: "0", boxShadow: "0 0 0" }}
              >
                <img
                  style={{
                    borderRadius: "0",
                    height: "200px",
                    width: "auto"
                  }}
                  className={classes.imgCard}
                  src={this.props.src}
                  alt="Card-img"
                />
                <div
                  className={classes.imgCardOverlay}
                  style={{
                    position: "absolute",
                    top: "65%",
                    textAlign: "center",
                    marginBottom: "10px"
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      fontSize: "24px",
                      fontFamily: "Abril Fatface, display"
                    }}
                  >
                    {this.props.desc ? this.props.desc : null}
                  </p>
                  <h4
                    className={classes.cardTitle}
                    style={{
                      color: "white",
                      fontSize: "44px",
                      fontFamily: "Abril Fatface, display",
                      fontWeight: "900",
                      lineHeight: "28px"
                    }}
                  >
                    {this.props.title ? this.props.title : null}
                  </h4>
                </div>
              </Card>
            </div>
          );
        }
        case "people": {
          return (
            <Card
              style={{
                margin: "0",
                background: "rgba(166,123,63,0.1)"
              }}
              className={props.classes.brownborder}
            >
              <CardBody
                style={{
                  padding: "30px 40px",
                  paddingBottom: "50px"
                }}
              >
                <h3
                  className={classes.cardTitle}
                  style={{
                    color: "rgb(94, 71, 44)",
                    fontFamily: "Abril Fatface, display",
                    fontWeight: "200"
                  }}
                >
                  People Say
                </h3>
                <p
                  className={props.classes.fontcontent}
                  style={{
                    color: "rgb(94, 71, 44)"
                  }}
                >
                  It should go without saying that designers, now more than
                  ever, have to design with a mobile-first mentality.
                </p>
                <div
                  style={{
                    display: "flex"
                  }}
                >
                  <img
                    className={classes.imgCardTop}
                    src={this.props.imgsrc}
                    alt="Card-img-cap"
                    style={{
                      width: "30%",
                      height: "30%",
                      borderRadius: "50%"
                    }}
                  />
                  <p
                    style={{
                      color: "rgb(94, 71, 44)",
                      paddingLeft: "20px",
                      paddingTop: "10px"
                    }}
                  >
                    <b>John Doe</b>
                    <br />
                    Designer
                  </p>
                </div>
                {/* <p><small className={classes.textMuted}>Last updated 3 mins ago</small></p> */}
              </CardBody>
            </Card>
          );
        }
        case "cardhours": {
          return (
            <Card
              style={{
                margin: "0",
                background: "rgba(166,123,63,0.1)"
              }}
              className={props.classes.brownborder}
            >
              <CardBody
                style={{
                  backgroundColor: "transparent"
                }}
              >
                <h3
                  className={classes.cardTitle}
                  style={{
                    color: "rgb(94, 71, 44)",
                    fontFamily: "Abril Fatface, display",
                    fontWeight: "200"
                  }}
                >
                  Emergency Cases
                </h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                  }}
                >
                  <Icon
                    style={{
                      fontSize: "50px",
                      color: "rgb(94, 71, 44)"
                    }}
                  >
                    name_of_the_icon
                  </Icon>
                  <h2
                    style={{
                      color: "rgb(94, 71, 44)",
                      fontWeight: "bold"
                    }}
                  >
                    8001234567
                  </h2>
                </div>
                <p
                  style={{ color: "rgb(94, 71, 44)" }}
                  className={props.classes.fontcontent}
                >
                  Your treatment plan is designed for steady progress, with
                  every phase promptly implemented.
                </p>

                {/* <p><small className={classes.textMuted}>Last updated 3 mins ago</small></p> */}
              </CardBody>
            </Card>
          );
        }
        case "cardoverlay": {
          return (
            <Card
              background
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=750&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D)`,
                margin: "0"
              }}
              className={this.props.overlay}
            >
              <CardBody background>
                {/* <h6 className={classes.cardCategoryWhite}>PRODUCTIVITY APPS</h6>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                        <h3 className={classes.cardTitleWhite}>
                            The Best Productivity Apps on Market
                        </h3>
                        </a> */}
                <div
                  style={{
                    textAlign: "center",
                    padding: "40px 0"
                  }}
                >
                  <h2
                    style={{
                      textAlign: "center",
                      color: "#fff",
                      position: "relative",
                      zIndex: "1",
                      fontFamily: "Abril Fatface, display",
                      fontWeight: "200"
                    }}
                  >
                    Health
                    <br /> Insurance
                  </h2>
                  <h3
                    style={{
                      textAlign: "center",
                      color: "#fff",
                      position: "relative",
                      zIndex: "1"
                    }}
                  >
                    Visit the Help Center
                  </h3>
                  <Button
                    simple
                    color="white"
                    style={{
                      border: "1px solid #fff",
                      borderRadius: "30px",
                      marginTop: "20px"
                    }}
                    className={props.hover}
                  >
                    <Icon
                      style={{
                        fontSize: "50px"
                      }}
                    />{" "}
                    Contact Us
                  </Button>
                </div>
              </CardBody>
            </Card>
          );
        }
        default:
          return;
      }
    };

    return (
      // <Card style={{borderRadius:"0",margin:"0"}}>
      //   <img  style={{borderRadius:"0",height:"300px",width:"auto"}} className={classes.imgCard} src={this.props.src} alt="Card-img" />
      //   <div className={classes.imgCardOverlay} style={{position:"absolute",top: "60%",backgroundColor:"#000",opacity:"0.3"}}>
      //     <h4 className={classes.cardTitle} style={{color:"white"}}>{this.props.title ? this.props.title : null}</h4>
      //     <p style={{color:"white"}}>{this.props.desc ? this.props.desc : null}</p>
      //   </div>
      // </Card>
      <div>{givecard(this.props)}</div>
    );
  }
}

export default withStyles(style)(Cards);
// import React from "react";
// // material-ui components
// import withStyles from "@material-ui/core/styles/withStyles";
// // core components
// import Card from "components/Card/Card.jsx";
// import CardBody from "components/Card/CardBody.jsx";

// import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.jsx";

// import { cardTitle } from "assets/jss/material-kit-pro-react.jsx";

// const style = {
//   ...imagesStyles,
//   cardTitle,
//   textMuted: {
//     color: "#6c757d"
//   },
// };

// class Cards extends React.Component {

//   render() {
//     const { classes } = this.props;

//     templatecard = (type) => {
//         switch(type){
//             case("image"): return (
//                 <div>
// <Card>
//   <img className={classes.imgCardTop} src={this.props.imgsrc} alt="Card-img-cap" />
//   <CardBody style={{
//       backgroundColor: "#636970"
//   }}>
//     <h6 className={classes.cardTitle} style={{
//         color: "pink"
//     }}>MEDICAL DOCTOR</h6>
//     <h4 className={classes.cardTitle} style={{
//         color: "white"
//     }}>Dr. Greg House</h4>
//     <p style={{
//         color: "white"
//     }}>+ 800 123 45 67<br/>info@beclinic.com</p>
//     {/* <p><small className={classes.textMuted}>Last updated 3 mins ago</small></p> */}
//   </CardBody>
// </Card>
//               </div>
//             )
//         }

//     }

//     return(
//         <div>
//             {templatecard(this.props.type)}
//         </div>
//     )
// };

// export default withStyles(style)(Cards);
