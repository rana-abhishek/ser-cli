import { title } from "assets/jss/material-kit-pro-react.jsx";

const docstyle = {
  section: {
    padding: "80px 0",
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
  sechalf: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
  },
  docimagescont:{
                    height: "250px",
                    width: "auto",
                    backgroundSize: "cover",
                    border:"4px solid rgb(221, 200, 129)",
                    minWidth: "250px",
                    "@media (max-width:800px)":{
                        padding:"0"
                    }
  },
  dimagecont:{
    "@media (max-width:800px)":{
      padding:"0"
  }
  },
  halfbut: {
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
  docpics: {
      padding: "20px"
  },
  curvepointbot:{
    position:"absolute",
    zIndex:"1",
    borderTop: "30px solid rgb(166, 123, 63)",
    borderLeft: "50vw solid transparent",
    borderRight: "50vw solid transparent",
    height: "0",
    width: "100%"
  },
  curvepointtop:{
    position:"absolute",
    zIndex:"100",
    marginTop: "-28px",
    borderBottom: "30px solid rgb(166, 123, 63)",
    borderLeft: "50vw solid transparent",
    borderRight: "50vw solid transparent",
    height: "0",
    width: "100%"
  },
  ovalbot:{
    position: "relative",
    width: "100%",
    height: "50px",
    overflow: "hidden",
    margin: "0px auto",
    border: "0",
    "&:before":{
      content:"''",
      width:"100%",
      height:"20px",
      left:"0%",
      position:"absolute",
      zIndex:"50",
      borderBottomLeftRadius:"1000px 70px",
      borderBottomRightRadius:"1000px 70px",
      boxShadow:"0px 0px 10px 5px rgb(166, 123, 63)"
    },
    "&:after":{
      content:"''",
      width:"100%",
      height:"30px",
      top:"0",
      left:"0",
      position:"absolute",
      zIndex:"100",
      borderBottomLeftRadius:"1000px 70px",
      borderBottomRightRadius:"1000px 70px",
      background:"transparent"
    }
  },
  invimage:{
    "@media (max-width:800px)":{
      flexDirection: "column-reverse"
    }
  },
  ovaltop:{
    position: "relative",
    width: "100%",
    height: "50px",
    overflow: "hidden",
    margin: "0px auto",
    marginTop: "20px",
    border: "0",
    "&:before":{
      content:"''",
      width:"100%",
      height:"20px",
      left:"0%",
      top:"30px",
      position:"absolute",
      zIndex:"50",
      borderTopLeftRadius:"1000px 70px",
      borderTopRightRadius:"1000px 70px",
      boxShadow:"0px 0px 10px 5px rgb(166, 123, 63)"
    },
    "&:after":{
      content:"''",
      position:"absolute",
      top:"20px",
      left:"0",
      width:"100%",
      height:"30px",
      zIndex:"100",
      borderTopLeftRadius:"1000px 70px",
      borderTopRightRadius:"1000px 70px",
      background:"transparent"
    }
  },
};

export default docstyle;
