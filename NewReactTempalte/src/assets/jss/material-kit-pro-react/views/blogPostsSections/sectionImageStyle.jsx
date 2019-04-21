import {
  section,
  sectionDark,
  cardTitle,
  container
} from "assets/jss/material-kit-pro-react.jsx";

const sectionImageStyle = {
  container: {
    ...container,
    position: "relative",
    zIndex: "2"
  },
  section: {
    ...section,
    ...sectionDark,
    padding: "80px 0",
    position: "relative",
    "&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
    }
  },
  cardTitle: {
    ...cardTitle,
    color: "#000000"
  },
  description: {
    color:"rgb(94, 71, 44)",
    textAlign: "left",
    margin: "30px 0",
    "&:before":{
      content: 'open-quote',
      fontSize:"120px"
    },
    "&:after":{
      content: 'close-quote',
      fontSize:"120px",
      marginTop:"100px",
      display:"flex",
      justifyContent:"flex-end"
    }
  },
  textLeft: {
    textAlign: "left",
    marginTop:"0"
  },
  postbut: {
    backgroundColor: "transparent",
    color: "#000",
    transition: "0.3s ease-in",
    backgroundColor: "transparent",
    color: "#000",
    marginTop: "20px",
    boxShadow: "0 2px 2px 0 rgba(233, 173, 14, 0.2), 0 3px 1px -2px rgba(233, 173, 14, 0.2), 0 1px 5px 0 rgba(233, 173, 14, 0.2)",
    border: "0",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#e9ad0e",
      boxShadow: "0 14px 26px -12px rgba(233, 173, 14, 0.4), 0 4px 23px 0px rgba(233, 173, 14, 0.4), 0 8px 10px -5px rgba(233, 173, 14, 0.4)"
    }
  }
};

export default sectionImageStyle;
