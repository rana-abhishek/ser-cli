/* eslint-disable react/prop-types */
import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

const DocTemplate = props => {
  return props.right ? (
    <GridContainer justify="center" style={{ margin: "20px" }}>
      <GridItem xs={12} sm={12} md={5} className={props.classes.dimagecont}>
        <div
          className={props.classes.docimagescont}
          style={{ backgroundImage: `URL('${props.imagesrc}')` }}
        />
      </GridItem>
      <GridItem
        xs={12}
        sm={12}
        md={7}
        style={{
          margin: "auto",
          color: "rgb(221, 200, 129)",
          letterSpacing: "1.5px"
        }}
      >
        <h5
          style={{
            color: "rgb(221, 200, 129)",
            letterSpacing: "1.5px",
            fontWeight: "500"
          }}
        >
          {props.dochead}
        </h5>
        <p style={{ textAlign: "justify" }}>{props.docdesc}</p>
        <h5 style={{ fontWeight: "500" }}>{props.docname}</h5>
        {/* <div>
          <img style={{ height: "100px", width: "150px" }} src={props.sign} />
        </div> */}
        <div
          style={{
            height: "100px",
            width: "150px"
          }}
        >
          <div
            style={{
              backgroundImage: `URL('${props.sign}')`,
              width: "150px",
              height: "100px",
              position: "absolute",
              backgroundSize: "cover",
              left: "0",
              pointerEvents: "none !important"
            }}
          />
        </div>

        {/* <div>
                    <Button style={{margin:"5px"}} justIcon round color="twitter">
                        <i className="fab fa-twitter" />
                    </Button>
                    <Button style={{margin:"5px"}} justIcon round color="facebook">
                        <i className="fab fa-facebook" />
                    </Button>
                    <Button style={{margin:"5px"}} justIcon round color="google">
                        <i className="fab fa-google" />
                    </Button>
                </div> */}
      </GridItem>
    </GridContainer>
  ) : (
    <GridContainer
      justify="center"
      style={{ margin: "20px", flexWrap: "wrap-reverse" }}
      className={props.classes.invimage}
    >
      <GridItem
        xs={12}
        sm={12}
        md={7}
        style={{
          margin: "auto",
          color: "rgb(221, 200, 129)",
          letterSpacing: "1.5px",
          textAlign: "center"
        }}
      >
        <h6 style={{ color: "rgb(221, 200, 129)", letterSpacing: "1.5px" }}>
          {props.doctype}
        </h6>
        <h5 style={{ fontWeight: "500" }}>{props.docname}</h5>
        <p style={{ textAlign: "justify" }}>{props.docdesc}</p>
        {/* <div>
                    <Button style={{margin:"5px"}} justIcon round color="twitter">
                        <i className="fab fa-twitter" />
                    </Button>
                    <Button style={{margin:"5px"}} justIcon round color="facebook">
                        <i className="fab fa-facebook" />
                    </Button>
                    <Button style={{margin:"5px"}} justIcon round color="google">
                        <i className="fab fa-google" />
                    </Button>
                </div> */}
      </GridItem>
      <GridItem xs={12} sm={12} md={5} className={props.classes.dimagecont}>
        <div
          className={props.classes.docimagescont}
          style={{ backgroundImage: `URL('${props.imagesrc}')` }}
        />
      </GridItem>
    </GridContainer>
  );
};

export default DocTemplate;
