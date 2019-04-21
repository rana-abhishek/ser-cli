import {
  container,
  title,
  main,
  mainRaised,
  mlAuto,
  description
} from "assets/jss/material-kit-pro-react.jsx";

const contactUsStyle = {
  main,
  mainRaised,
  connumb: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  toptile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  offhourtitle: {
    color: "rgb(94, 71, 44)",
    fontSize: "26px",
    fontWeight: "400",
    fontFamily: "Abril Fatface, display"
  },
  infowrapper: {
    display: "flex",
    height: "100%",
    padding: "10% 25%",
    "@media (max-width: 800px)": {
      padding: "15%"
    }
  },
  imgwrapper: {
    display: "flex",
    alignItems: "flex-start",
    height: "100%",
    padding: "10px"
  },
  whitetitle: {
    marginTop: "0",
    fontSize: "25px",
    fontWeight: "300",
    fontFamily: "Abril Fatface, display",
    color: "#fff"
  },
  bluetitle: {
    fontSize: "18px",
    fontWeight: "300",
    fontFamily: "Abril Fatface, display",
    color: "#2a93c9"
  },
  title: {
    ...title,
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    fontSize: "26px",
    fontWeight: "400",
    fontFamily: "Abril Fatface, display",
    color: "rgb(94, 71, 44)",
    paddingBottom: "20px",
    "&:after": {
      content: "''",
      position: "absolute",
      bottom: "0",
      left: "0",
      width: "20%",
      borderBottom: "2px solid rgb(94, 71, 44)"
    }
  },
  mlAuto,
  officelink: {
    color: "rgb(221, 200, 129)",
    transition: "0.3s ease-in",
    cursor: "pointer",
    "&:hover": {
      color: "rgb(94, 71, 44)"
    }
  },
  officelink2: {
    fontSize: "14px",
    color: "rgb(94, 71, 44)",
    transition: "0.3s ease-in",
    cursor: "pointer",
    "&:hover": {
      color: "rgba(166, 123, 63)"
    }
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
      border: "1px solid #fff"
    }
  },
  mobiledoccard: {
    "@media (max-width:800px)": {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      marginBottom: "20px"
    }
  },
  description: {
    ...description,
    color: "#000",
    fontWeight: "400",
    fontFamily: "Lato, sans-serif"
  },
  brownborder: {
    border: "4px solid rgb(221, 200, 129)"
  },
  brownleftright: {
    borderLeft: "4px solid rgb(221, 200, 129)",
    borderRight: "4px solid rgb(221, 200, 129)"
  },
  browmoverlay: {
    background: "rgba(166, 123, 63, 0.1)"
  },
  browncolor: {
    color: "rgb(94, 71, 44)"
  },
  latofont: {
    fontFamily: "Lato, sans-serif"
  },
  darkbutton: {
    border: "1px solid rgb(221, 200, 129)",
    background: "transparent",
    color: "rgb(221, 200, 129)",
    height: "50px",
    width: "150px",
    backgroundColor: "transparent",
    transition: "0.3s ease-in-out",
    marginTop: "20px",
    boxShadow:
      "0 2px 2px 0 rgba(233, 173, 14, 0.2), 0 3px 1px -2px rgba(233, 173, 14, 0.2), 0 1px 5px 0 rgba(233, 173, 14, 0.2)",
    "&:focus": {
      background: "transparent"
    },
    "&:hover": {
      color: "rgb(94, 71, 44)",
      backgroundColor: "rgb(221, 200, 129)",
      boxShadow:
        "0 14px 26px -12px rgba(233, 173, 14, 0.4), 0 4px 23px 0px rgba(233, 173, 14, 0.4), 0 8px 10px -5px rgba(233, 173, 14, 0.4)"
    },
    "@media (max-width: 800px)": {
      margin: "20px"
    }
  },
  container: {
    ...container,
    maxWidth: "970px !important"
  },
  contactContent: {
    paddingBottom: "40px",
    paddingTop: "40px"
  },
  bigMap: {
    height: "55vh",
    maxHeight: "550px",
    width: "100%",
    display: "block"
  },
  info: {
    paddingBottom: "10px",
    paddingTop: 0
  },
  textCenter: {
    textAlign: "center !important"
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
  },
  cardwrapper: {
    padding: "30px 150px",
    "@media (max-width:800px)": {
      padding: "0"
    }
  },
  doccardinfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 25px",
    "@media (max-width:800px)": {
      padding: "0",
      width: "100%"
    }
  },
  firsthalf: {
    padding: "2vw 10vw",
    paddingRight: "0",
    "@media (max-width:800px)": {
      padding: "10px"
    }
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
    boxShadow:
      "0 2px 2px 0 rgba(233, 173, 14, 0.2), 0 3px 1px -2px rgba(233, 173, 14, 0.2), 0 1px 5px 0 rgba(233, 173, 14, 0.2)",
    "&:focus": {
      background: "transparent"
    },
    "&:hover": {
      color: "rgb(94, 71, 44)",
      backgroundColor: "rgb(221, 200, 129)",
      boxShadow:
        "0 14px 26px -12px rgba(233, 173, 14, 0.4), 0 4px 23px 0px rgba(233, 173, 14, 0.4), 0 8px 10px -5px rgba(233, 173, 14, 0.4)"
    },
    "@media (max-width: 800px)": {
      margin: "20px"
    }
  }
};

export default contactUsStyle;
