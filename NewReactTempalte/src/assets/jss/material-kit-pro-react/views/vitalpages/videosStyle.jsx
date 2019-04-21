import {
  container,
  title,
  main,
  mainRaised
} from "assets/jss/material-kit-pro-react.jsx";

const VideosStyle = {
  container: {
    ...container,
    zIndex: "2",
    position: "relative"
  },
  latofont:{
    fontFamily:"Lato, sans-serif",
  },
  textCenter: {
    textAlign: "center"
  },
  description: {
    margin: "1.071rem auto 1.5rem",
    textAlign: "justify",
    color: "#999",
    padding: "1rem 15px",
    fontFamily:"Lato, sans-serif",
  },
  footdescription: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999"
  },
  butstyle: {
    border: "1px solid rgb(221, 200, 129)",
    background: "transparent",
    color: "rgb(221, 200, 129)",
    height: "50px",
    width: "auto",
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
  fontcontent:{
    fontSize: "16px"
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
  title: {
    ...title,
    color: "#FFFFFF"
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
  link: {
    borderRadius: "50%",
    border: "1px solid black",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    width: "50px",
    backgroundColor: "#fff",
    transition: "0.3s ease-in-out",
    positon: "absolute",
    zIndex: "10000",
    "&:hover": {
      backgroundColor: "rgb(166, 123, 63)",
      color: "#fff",
      boxShadow: "none",
      border: "1px solid #fff",
    }
  },
  main: {
    ...main,
    ...mainRaised
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative"
  }
};

export default VideosStyle;
