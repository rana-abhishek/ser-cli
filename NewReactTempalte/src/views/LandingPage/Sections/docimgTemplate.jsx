import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.jsx";
// core components
import Card from "components/Card/Card.jsx";

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
      switch(props.type){
        case ('docimages'):{
            return (
              <Card style={{borderRadius:"0",margin:"0"}}>
                <div>
                  <img  style={{borderRadius:"0",height:"auto",width:"100%"}} className={classes.imgCard} src={this.props.src} alt="Card-img" />
                </div>
                <div className={classes.imgCardOverlay} style={{display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
                  <h4 className={classes.cardTitle} style={{color:"white",textAlign:"right",fontFamily:"Lato, sans-serif"}}>{this.props.title ? this.props.title : null}</h4>
                  <p style={{color:"white",textAlign:"right",fontFamily:"Lato, sans-serif"}}>{this.props.desc ? this.props.desc : null}</p>
                </div>
              </Card>
            )
          }
          break;
        case ('fourtiles'):
          {
            return (
              <Card style={{borderRadius:"0",margin:"0"}}>
                <div>
                  <img  style={{borderRadius:"0",height:"auto"}} className={classes.imgCard} src={this.props.src} alt="Card-img" />
                </div>
                <div className={classes.imgCardOverlay} style={{position:"absolute",top: "65%",textAlign:"center",marginBottom:"10px"}}>
                  <p style={{color:"white",fontSize:"24px",fontFamily:"Abril Fatface, display"}}>{this.props.desc ? this.props.desc : null}</p>
                  <h4 className={classes.cardTitle} style={{color:"white",fontSize:"44px",fontFamily:"Abril Fatface, display",fontWeight:"900",lineHeight:"28px"}}>{this.props.title ? this.props.title : null}</h4>
                </div>
              </Card>
            )
          }
          break;
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