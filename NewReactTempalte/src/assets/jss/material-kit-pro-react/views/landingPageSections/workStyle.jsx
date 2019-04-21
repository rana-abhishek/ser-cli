import { title } from "assets/jss/material-kit-pro-react.jsx";

const workStyle = {
  section: {
    padding: "70px 0",
    width: "100%"
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  description: {
    color: "#fff",
    textAlign: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  },
  overlay:{
    color: "#fff",
    "&:before": {
      borderRadius: "50px",
      background: "rgba(0, 0, 0, 0.4)",
      boxShadow: "10px 10px 100px 40px #000000",
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

export default workStyle;
