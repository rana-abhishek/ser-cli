/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
import React from "react";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";
import docbg2 from "assets/img/common/Images/ParallaxDarkBG.jpg";
import callicon from "assets/img/callIcon.png";
import { Link } from "react-router-dom";

const Emerygency = props => {
  return (
    <Card style={{ background: `URL('${docbg2}')` }}>
      <CardBody
        style={{
          padding: "0 10px"
        }}
      >
        <div className={props.classes.contactus}>
          <div className={props.classes.contactimagecontainer}>
            <img
              src={callicon}
              alt="Second slide"
              className={props.classes.callusicon}
            />
          </div>
          <div
            className={props.classes.contactimagecontainer}
            style={{ flexDirection: "column" }}
          >
            <h3
              className={props.classes.title}
              style={{
                margin: "0",
                color: "rgb(221, 200, 129)"
              }}
            >
              Call us at
            </h3>
            <h2
              style={{
                margin: "0",
                fontWeight: "bold",
                color: "rgb(221, 200, 129)"
              }}
            >
              <a
                href="tel:+91-11-26252333"
                className={props.classes.officelink}
              >
                +91-11-26252333
                <br />
              </a>
            </h2>
            <p
              style={{
                color: "rgb(221, 200, 129)"
              }}
            >
              As far as possible, we will accommodate you at the earliest, to
              save your time.
            </p>
            {/* <h4 className={props.classes.cardTitle}>
                                    <a href="#pablo" onClick={e => e.preventDefault()}>
                                      To Grow Your Business Start Focusing on Your Employees
                                    </a>
                                  </h4> */}
          </div>
          <div className={props.classes.contactimagecontainer}>
            <Link to="/contactus">
              <Button
                color="primary"
                round
                className={props.classes.darkbutton}
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Emerygency;
