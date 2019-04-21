import { title } from "assets/jss/material-kit-pro-react.jsx";
import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.jsx";
import { cardTitle } from "assets/jss/material-kit-pro-react.jsx";

const Twohalfs = {
  section: {
    padding: "0",
    textAlign: "center",
    "@media (min-height: 1200px)" : {
      width: "100%"
    }
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: "#999"
  },
  curvepoint:{
    position:"absolute",
    zIndex:"100",
    marginTop: "-29px",
    borderBottom: "30px solid rgb(166, 123, 63)",
    borderLeft: "50vw solid transparent",
    borderRight: "50vw solid transparent",
    height: "0",
    width: "100%"
  },
  sechalf: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
  },
  halfbut: {
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
  fontblack:{
    color:"#000"
  },
  ...imagesStyles,
  cardTitle,
  cardcont:{
      textAlign: "center"
  },
  thumb:{
    width: "200px",
                          height: "250px",
                          border: "4px solid rgb(221, 200, 129)",
                          AlignSelf:"flex-start",
                          "@media (max-width:800px)":{
                            display:"none"
                          }
  },
  befaft:{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "-500px",
      position: "relative",
      zIndex: "100",
      "@media (max-width:800px)":{
        flexDirection: "column"
      }
  },
  babut:{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "40px",
      "@media (max-width:800px)":{
        margin:"0 auto"
      }
  },
  black:{
    "@media (max-width:800px)":{
      color: "#000"
    }
  },
  mainslidercontainer:{
    marginBottom:"50px",
    display:"flex",
    "@media (max-width:800px)":{
      flexDirection: "column"
    }
  },
  marTop:{
    margin: "60px 0",
    marginTop: "30vh"
  },
  marchange:{
    marginTop:"-20vh",
    "@media (max-width:800px)":{
      marginTop: "-30vh"
    }
  }
};

export default Twohalfs;
