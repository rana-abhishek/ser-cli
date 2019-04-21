import { title } from "assets/jss/material-kit-pro-react.jsx";

const halfformStyle = {
  section: {
    padding: "70px 0",
    width: "100%"
  },
  dateholder:{
    '::-webkit-input-placeholder' :{
      color: "red"
  }
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
  hover:{
    marginTop: "20px",
    border: "1px solid #fff",
    color:"#fff",
    transition:"0.3s ease-in",
    "&:hover":{
      color: "#000",
      backgroundColor: "#fff"
    }
  }
};

export default halfformStyle;
