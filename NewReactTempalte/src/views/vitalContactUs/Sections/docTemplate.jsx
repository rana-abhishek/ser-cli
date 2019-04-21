/* eslint-disable react/prop-types */
import React from "react";

const DocTemplate = props => {
  return (
    <div
      style={{
        display: "flex",
        padding: "20px",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        margin: "0",
        borderRadius: "10px"
      }}
      className={props.classes.browmoverlay + " " + props.classes.brownborder}
    >
      <div className={props.classes.mobiledoccard}>
        <div
          className={props.classes.brownborder}
          style={{ borderRadius: "10px" }}
        >
          <img
            style={{
              height: "210px",
              width: "180px",
              borderRadius: "7px"
            }}
            src={props.picsrc}
            alt="..."
          />
        </div>
      </div>
      <div className={props.classes.doccardinfo}>
        <h6
          style={{
            margin: "0",
            color: "rgb(94, 71, 44)",
            letterSpacing: "1.5px",
            fontFamily: "Lato, sans-serif"
          }}
        >
          {props.doctype}
        </h6>
        <h5
          style={{
            margin: "0",
            fontWeight: "500",
            colro: "rgb(94, 71, 44)",
            fontFamily: "Abril Fatface, display",
            color: "rgb(94, 71, 44)"
          }}
        >
          {props.docname}
        </h5>
        <h6
          style={{
            marginTop: "30px",
            marginBottom: "0",
            fontWeight: "400",
            fontFamily: "Lato, sans-serif",
            color: "rgb(94, 71, 44)"
          }}
        >
          <a
            href={`tel:${props.docnumber}`}
            className={props.classes.officelink2}
          >
            {props.docnumber}
          </a>
        </h6>
        <h6
          style={{
            marginTop: "3px",
            fontWeight: "400",
            fontFamily: "Lato, sans-serif",
            color: "rgb(94, 71, 44)"
          }}
        >
          <a
            href={`mailto:${props.docemail}`}
            className={props.classes.officelink2}
          >
            {props.docemail}
          </a>
        </h6>
        {/* <div>
          <Button style={{ margin: "5px" }} justIcon round color="twitter">
            <i className="fab fa-twitter" />
          </Button>
          <Button style={{ margin: "5px" }} justIcon round color="facebook">
            <i className="fab fa-facebook" />
          </Button>
          <Button style={{ margin: "5px" }} justIcon round color="google">
            <i className="fab fa-google" />
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default DocTemplate;
