import { container, title } from "assets/jss/material-kit-pro-react.jsx";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  landbut: {
    color: "#fff",
    backgroundColor: "#e9ad0e"
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
  officelink: {
    color: "rgb(221, 200, 129)",
    transition: "0.3s ease-in",
    cursor: "pointer",
    "&:hover": {
      color: "rgb(94, 71, 44)"
    }
  },
  overlay: {
    "&:before": {
      content: "",
      display: "block",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      position: "absolute",
      background: "rgba(0,0,0,0.5)"
    }
  },
  compname: {
    fontSize: "9vw",
    fontFamily: "Abril Fatface",
    fontWeight: "400",
    background: "linear-gradient(to right, #A67B3F, #F1EBE3, #A67B3F)",
    color: "transparent",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
    WebkitTextStroke: "1px #5E472C",
    lineHeight: "9vw",
    maxWidth: "100vw",
    "@media (max-width:1200px)": {
      fontSize: "12vw",
      WebkitTextStroke: "0.5px #5E472C",
      lineHeight: "12vw"
    },
    "@media (max-width:800px)": {
      fontSize: "22vw",
      WebkitTextStroke: "0.5px #5E472C",
      lineHeight: "22vw"
    },
    "@media (min-width:2000px)": {
      fontSize: "7vw",
      WebkitTextStroke: "0.5px #5E472C",
      lineHeight: "7vw"
    }
  },
  mobcenter: {
    "@media (max-width: 1200px)": {
      textAlign: "center"
    }
  },
  pralbanner: {
    height: "20px",
    "@media (max-width: 800px)": {
      left: "0",
      top: "0",
      transform: "translateX(0)",
      height: "20px"
    }
  },
  imgCardTop: {
    height: "auto",
    width: "100%",
    display: "block",
    borderRadius: "0",
    transition: "0.3s ease",
    opacity: "0.8"
  },
  imgCardCont: {
    textAlign: "center",
    fontSize: "1.2rem",
    padding: "20px 0px",
    transition: "0.3s ease",
    height: "100%"
  },
  tabsHover: {
    height: "100%",
    border: "4px solid transparent",
    backgroundColor: "rgba(166,123,63,0.2)",
    color: "rgba(94, 71, 44)",
    "&:hover": {
      backgroundColor: "rgba(94, 71, 44)",
      border: "4px solid rgba(94, 71, 44)",
      color: "rgb(221, 200, 129)"
    }
  },
  vitalCont: {
    padding: "50px 15%",
    backgroundColor: "rgba(94, 71, 44)",
    color: "rgb(221, 200, 129)",
    fontSize: "1.3rem",
    textAlign: "justify",
    fontFamily: "lato",
    letterSpacing: "2px",
    lineHeight: "1.6rem",
    fontWeight: "500",
    "@media (max-width: 800px)": {
      padding: "50px 20px",
      fontSize: "1.1rem"
    }
  },
  gridoverlay: {
    color: "#fff",
    "&:before": {
      borderRadius: "50px",
      background: "rgba(0, 0, 0, 0.4)",
      boxShadow: "5px 5px 50px 20px #000000",
      filter: "blur(250px)"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "-1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  }
};

export default landingPageStyle;
