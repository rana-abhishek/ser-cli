import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.jsx";

import { cardTitle } from "assets/jss/material-kit-pro-react.jsx";

const style = {
  ...imagesStyles,
  cardTitle,
};

class Cards extends React.Component {
  render() {
    const { classes } = this.props;
    let template = null;

    const givecard = (props) => {
      console.log("template")
      console.log(props)
      console.log(classes.cardTitle)
      switch(props.type){
        case ('image'):{
            return (
                <Card>
                    <img className={classes.imgCardTop} style={{borderRadius: "5px",borderBottomLeftRadius:"0",borderBottomRightRadius:"0"}} src={this.props.imgsrc} alt="Card-img-cap" />
                    <CardBody style={{
                        backgroundColor: "rgb(94, 71, 44)",
                        borderRadius: "5px",
                        borderTopLeftRadius:"0",
                        borderTopRightRadius:"0"
                    }}>
                    <h6 className={classes.cardTitle} style={{
                        color: "rgb(221, 200, 129)"
                    }}>MEDICAL DOCTOR</h6>
                    <h4 className={classes.cardTitle} style={{
                        color: "rgb(221, 200, 129)"
                    }}>Dr. Greg House</h4>
                    <p style={{
                        color: "rgb(221, 200, 129)"
                    }}>+ 800 123 45 67<br/>info@beclinic.com</p>
                    {/* <p><small className={classes.textMuted}>Last updated 3 mins ago</small></p> */}
                    </CardBody>
              </Card>
            )
          }
          break;
        case ('list'):
          {
            return (
                <Card>
                    <CardBody style={{
                        backgroundColor: "rgb(94, 71, 44)",
                        borderRadius: "5px"
                    }}>
                    <h4 className={classes.cardTitle} style={{
                        color: "rgb(221, 200, 129)"
                    }}>Treatments</h4>
                    <ul style={{
                        color: "rgb(221, 200, 129)",
                        paddingLeft: "20px"
                    }}>
                        <li style={{color:"rgb(221, 200, 129)",paddingBottom:"5px"}}>Liposuction</li>
                        <li style={{color:"rgb(221, 200, 129)",paddingBottom:"5px"}}>Male Breast</li>
                        <li style={{color:"rgb(221, 200, 129)",paddingBottom:"5px"}}>Vital Skin-Tite</li>
                        <li style={{color:"rgb(221, 200, 129)",paddingBottom:"5px"}}>Cosmetic Gynecology</li>
                        <li style={{color:"rgb(221, 200, 129)",paddingBottom:"5px"}}>Awake Liposuction</li>
                        <li style={{color:"rgb(221, 200, 129)",paddingBottom:"5px"}}>Awake Cosmetic Surgery</li>
                        <li style={{color:"rgb(221, 200, 129)",paddingBottom:"5px"}}>Breast Surgeries</li>
                        <li style={{color:"rgb(221, 200, 129)",paddingBottom:"5px"}}>RootActiv</li>
                        <li style={{color:"rgb(221, 200, 129)",paddingBottom:"5px"}}>Body Contouring Surgeries</li>
                    </ul>
                    {/* <p><small className={classes.textMuted}>Last updated 3 mins ago</small></p> */}
                    </CardBody>
                </Card>
            )
          }
          break;
        case ('fourtiles'):
          {
            return (
              <div style={{padding: "0 20px"}}>
                <Card style={{borderRadius:"0",margin:"0", boxShadow:"0 0 0"}}>
                    <img  style={{borderRadius:"0",height:"200px",width:"auto"}} className={classes.imgCard} src={this.props.src} alt="Card-img" />
                    {this.props.desc?<div className={classes.imgCardOverlay} style={{position:"absolute",top: "65%",textAlign:"center",marginBottom:"10px"}}>
                    <p style={{color:"white",fontSize:"24px",fontFamily:"Abril Fatface, display"}}>{this.props.desc}</p>
                    <h4 className={classes.cardTitle} style={{color:"white",fontSize:"44px",fontFamily:"Abril Fatface, display",fontWeight:"900",lineHeight:"28px"}}>{this.props.title ? this.props.title : null}</h4>
                    </div>:null}
                </Card>
              </div>
            )
          }
          break;
        case ('people'):
            {
                return (
                <Card style={{borderRadius: "10px",}}>
                    <CardBody style={{
                        backgroundColor: "rgb(94, 71, 44)",
                        padding:"30px 40px",
                        paddingBottom: "50px",
                        borderRadius: "5px",
                    }}>
                    <h3 className={classes.cardTitle} style={{
                        color: "rgb(221, 200, 129)"
                    }}>{this.props.head ? this.props.head : null}</h3>
                    <p style={{
                        color: "rgb(221, 200, 129)"
                    }}>{this.props.content ? this.props.content : null}</p>
                    <div style={{
                        display: "flex"
                    }}>
                        <img className={classes.imgCardTop} src={this.props.imgsrc ? this.props.imgsrc : null} alt="Card-img-cap" style={{
                            width: "30%",
                            height: "30%",
                            borderRadius: "50%",
                        }}/>
                        <p style={{
                            color:"rgb(221, 200, 129)",
                            paddingLeft:"20px",
                            paddingTop:"10px"
                        }}><b>{this.props.name ? this.props.name : null}</b><br/>{this.props.desi ? this.props.desi : null}</p>
                    </div>
                    {/* <p><small className={classes.textMuted}>Last updated 3 mins ago</small></p> */}
                    </CardBody>
                </Card>
                )
            }  
        default:
          template = null;
      }
      console.log(template);
    }  

    return(
      // <Card style={{borderRadius:"0",margin:"0"}}>
      //   <img  style={{borderRadius:"0",height:"300px",width:"auto"}} className={classes.imgCard} src={this.props.src} alt="Card-img" />
      //   <div className={classes.imgCardOverlay} style={{position:"absolute",top: "60%",backgroundColor:"#000",opacity:"0.3"}}>
      //     <h4 className={classes.cardTitle} style={{color:"white"}}>{this.props.title ? this.props.title : null}</h4>
      //     <p style={{color:"white"}}>{this.props.desc ? this.props.desc : null}</p>
      //   </div>
      // </Card>
      <div>
        {givecard(this.props)}
      </div>
    );
  }
};

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