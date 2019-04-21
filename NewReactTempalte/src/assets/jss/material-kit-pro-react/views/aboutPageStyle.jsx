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

const aboutPageStyle = {
  container,
  ...imagesStyle,
  ...tooltipsStyle,
  cardTitleWhite: {
    ...cardTitle,
    color: "rgb(94, 71, 44) !important"
  },
  cardTitle,
  profile: {
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  textCenter: {
    width: "auto",
    boxShadow: "0 0 0 0",
    paddingTop: "10px",
    marginBottom: "0",
    textAlign: "center"
  },
  browncolor: {
    color: "rgb(94, 71, 44)"
  },
  fontcontent: {
    fontSize: "16px"
  },
  description: {
    margin: "1.071rem auto 0",
    textAlign: "justify",
    color: "#999"
  },
  carimage: {
    width: "350px",
    height: "auto",
    margin: "auto"
  },
  brownborder: {
    border: "4px solid rgb(221, 200, 129)"
  },
  brownleftright: {
    borderLeft: "4px solid rgb(221, 200, 129)",
    borderRight: "4px solid rgb(221, 200, 129)"
  },
  radiusborder: {
    borderRadius: "10px"
  },
  name: {
    marginTop: "-80px"
  },
  browmoverlay: {
    background: "rgba(166, 123, 63, 0.1)"
  },
  main: {
    ...main
  },
  mainRaised: {
    ...mainRaised
  },
  title: {
    ...title,
    lineHeight: "1.4",
    position: "relative",
    minHeight: "32px",
    textDecoration: "none",
    color: "rgb(94, 71, 44)",
    "@media (max-width: 800px)": {
      textAlign: "center"
    }
  },
  nobortitle: {
    ...title,
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    fontSize: "26px",
    fontWeight: "700",
    color: "#292c30",
    paddingBottom: "20px"
  },
  footbut: {
    border: "1px solid #fff",
    color: "#fff",
    transition: "0.5s ease-in-out",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#000"
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
  overlay: {
    "&:before": {
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      zIndex: "0",
      content: "''",
      position: "absolute",
      background: "rgba(0, 0, 0, 0.5)"
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
    display: "flex"
  },
  bluediv: {
    backgroundColor: "#24466f",
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between"
  },
  followIcon: {
    width: "20px",
    height: "20px"
  },
  brownoverlay: {
    background: "rgba(166,123,63,0.1)"
  },
  proctile: {
    display: "flex",
    flexWrap: "wrap",
    padding: "10px",

    "@media (max-width: 800px)": {
      flexWrap: "wrap",
      paddingBottom: "0"
    }
  },
  imgcont: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center"
  },
  imgcard: {
    height: "100%",
    width: "100%"
  },
  treatmentele: {
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #4f6885",
    marginBottom: "10px",
    paddingBottom: "5px",
    textWeight: "bold"
  },
  followButton: {
    marginTop: "-28px !important"
  },
  gridItem: {
    ...mlAuto,
    ...mrAuto
  },
  collections: {
    marginTop: "20px"
  },
  cardBody: {
    display: "flex",
    boxOrient: "vertical",
    boxDirection: "normal",
    flexDirection: "column",
    boxPack: "center",
    justifyContent: "center",
    color: "rgb(94, 71, 44)"
  },
  badge: {
    display: "inline-table",
    margin: "0 auto"
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
    marginTop: "25px",
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
  }
};

export default aboutPageStyle;
