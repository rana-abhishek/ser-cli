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
  halfbut: {
    height: "50px",
    width: "150px",
    backgroundColor: "transparent",
    color: "#fff",
    marginTop: "20px",
    border: "1px solid #fff",
    "&:hover":{
      backgroundColor: "#e9ad0e",
      color: "#000"
    }
  }
};

export default workStyle;
