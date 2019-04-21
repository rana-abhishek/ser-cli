import { container, primaryColor } from "assets/jss/material-kit-pro-react.jsx";
import {
  title,
  main,
  mainRaised
} from "assets/jss/material-kit-pro-react.jsx";

const footerStyle = {
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
    transition: "all 0.3s ease-in",
    "&:hover":{
      color:"#e9ad0e"
    }
  },
  footdescription: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999"
  },
  nobortitle: {
    ...title,
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    fontSize: "26px",
    fontWeight: "400",
    fontFamily: "Abril Fatface, display",
    color: "#292c30",
    paddingBottom: "20px"
  },
  footbut: {
    border: "1px solid rgb(221, 200, 129)",
    background: "transparent",
    color: "rgb(221, 200, 129)",
    height: "50px",
    width: "150px",
    backgroundColor: "transparent",
    transition: "0.3s ease-in-out",
    marginTop: "20px",
    boxShadow: "0 2px 2px 0 rgba(233, 173, 14, 0.2), 0 3px 1px -2px rgba(233, 173, 14, 0.2), 0 1px 5px 0 rgba(233, 173, 14, 0.2)",
    "&:focus": {
      background: "transparent"
    },
    "&:hover": {
      color: "rgb(94, 71, 44)",
      backgroundColor: "rgb(221, 200, 129)",
      boxShadow: "0 14px 26px -12px rgba(233, 173, 14, 0.4), 0 4px 23px 0px rgba(233, 173, 14, 0.4), 0 8px 10px -5px rgba(233, 173, 14, 0.4)"
    },
    "@media (max-width: 800px)": {
      margin: "20px"
    }
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right!important"
  },
  footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative"
  },
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF"
    }
  },
  container,
  wrapper:{
    color: "#848a93",
    backgroundColor: "#292c30"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  },
  footlink: {
    color: "#e9ad0e",
    transition: "all 0.3s ease-in",
    cursor: "pointer",
    "&:hover":{
      color: "inherit"
    }
  }
};
export default footerStyle;
