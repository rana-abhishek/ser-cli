import {
  container,
  cardTitle,
  title,
  mlAuto,
  mrAuto,
  main,
  mainRaised
} from "assets/jss/material-kit-pro-react.jsx";

import imagesStyle from "assets/jss/material-kit-pro-react/imagesStyles.jsx";

import tooltipsStyle from "assets/jss/material-kit-pro-react/tooltipsStyle.jsx";

const profilePageStyle = {
  ...imagesStyle,
  ...tooltipsStyle,
  cardTitleWhite: {
    ...cardTitle,
    color: "#FFFFFF !important"
  },
  container: {
    ...container,
    zIndex: "2",
    position: "relative"
  },
  cardTitle: {
    ...cardTitle,
    color: "rgb(94, 71, 44)"
  },
  dateholder: {
    color: "white",
    "&,&::placeholder": {
      color: "rgb(221, 200, 129)"
    },
    "&::placeholder": {
      color: "rgb(221, 200, 129)"
    }
  },
  profile: {
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  description: {
    textAlign: "justify",
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999"
  },
  name: {
    marginTop: "-80px"
  },

  main: {
    ...main
  },
  mainRaised: {
    ...mainRaised
  },
  title: {
    ...title,
    position: "relative",
    minHeight: "32px",
    textDecoration: "none",
    color: "rgb(94, 71, 44)",
    "@media (max-width: 800px)": {
      textAlign: "center"
    }
  },
  follow: {
    position: "absolute",
    top: "0",
    right: "0"
  },
  ticksection: {
    padding: "20px 0"
  },
  tickicon: {
    paddingTop: "10px",
    color: "rgb(94, 71, 44)"
  },
  contactus: {
    padding: "30px 0",
    display: "flex",
    "@media (max-width:800px)": {
      flexWrap: "wrap",
      textAlign: "center"
    }
  },
  contactimagecontainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width:800px)": {
      width: "100%"
    }
  },
  brownoverlay: {
    background: "rgba(166,123,63,0.1)"
  },
  browndiv: {
    background: "rgba(166,123,63,0.1)",
    padding: "20px 40px",
    paddingBottom: "40px",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "30px"
  },
  followIcon: {
    width: "20px",
    height: "20px"
  },
  textCenter: {
    width: "auto",
    boxShadow: "0 0 0 0",
    paddingTop: "10px",
    marginBottom: "0",
    textAlign: "center"
  },
  imgcont: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center"
  },
  proctile: {
    display: "flex",
    textAlgin: "center",
    padding: "10px",
    "@media (max-width: 800px)": {
      flexWrap: "wrap",
      paddingBottom: "0"
    }
  },
  imgcard: {
    height: "100px",
    width: "100px"
  },
  treatmentele: {
    color: "rgb(94, 71, 44)",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid rgb(94, 71, 44)",
    marginBottom: "10px",
    paddingBottom: "5px",
    textWeight: "bold"
  },
  followButton: {
    marginTop: "-28px !important"
  },
  gridItem: {
    ...mlAuto,
    ...mrAuto,
    paddingRight: "40px",
    "@media (max-width:800px)": {
      padding: "0"
    }
  },
  collections: {
    marginTop: "20px"
  },
  callusicon: {
    padding: "20px",
    "@media (max-width: 800px)": {
      padding: "0"
    }
  },
  cardBody: {
    display: "flex",
    boxOrient: "vertical",
    boxDirection: "normal",
    flexDirection: "column",
    boxPack: "center",
    justifyContent: "center"
  },
  badge: {
    display: "inline-table",
    margin: "0 auto"
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
  listUnstyled: {
    paddingLeft: "0",
    listStyle: "none",
    "& > li": {
      padding: "5px 0px",
      fontSize: "1em"
    }
  },
  profileTabs: {
    marginTop: "4.284rem",
    marginBottom: "50px"
  },
  card: {
    textAlign: "left !important"
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
  parallax: {
    height: "380px",
    backgroundPosition: "top center"
  },
  carimage: {
    width: "350px",
    height: "auto",
    margin: "auto",
    "@media (max-width: 800px)": {
      width: "100%"
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
  officelink2: {
    fontSize: "14px",
    color: "rgb(94, 71, 44)",
    transition: "0.3s ease-in",
    cursor: "pointer",
    "&:hover": {
      color: "rgba(166, 123, 63)"
    }
  },
  brownborder: {
    border: "4px solid rgb(221, 200, 129)"
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
  darkbrown: {
    color: "rgb(94, 71, 44)",
    textAlign: "justify"
  }
};

export default profilePageStyle;
