import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";
import PreFoot from "./prefoot";

// @material-ui/icons
import logo from "assets/img/common/FooterImages/logo2.svg";

import footerStyle from "assets/jss/material-kit-pro-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });

  return (
    <div>
      <PreFoot classes={classes} />
      <footer
        className={footerClasses}
        style={{ backgroundColor: "#292c30", padding: "30px 0" }}
      >
        <div
          className={classes.container}
          style={{ maxWidth: "100%", padding: "0 0" }}
        >
          <div className={classes.wrapper}>
            {/* <h2 style={{fontFamily: "Oswald, sans-serif"}}>VitalClinic</h2> */}
            <img
              src={logo}
              style={{ width: "150px", height: "45px", marginBottom: "10px" }}
            />
            <h4 style={{ fontFamily: "Oswald, sans-serif" }}>
              Address: L-3, South Extension -II
            </h4>
            <h4 style={{ fontFamily: "Oswald, sans-serif" }}>
              New Delhi-110 049
            </h4>
            <h4 style={{ fontFamily: "Oswald, sans-serif" }}>
              Email:{" "}
              <a
                href="mailto:info@vitalclinic.com"
                className={classes.footlink}
              >
                info@vitalclinic.com
              </a>
            </h4>
            <h4 style={{ fontFamily: "Oswald, sans-serif" }}>
              Phone:{" "}
              <a href="tel:+91-11-26252333" className={classes.footlink}>
                +91-11-26252333
              </a>
            </h4>

            <div>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.youtube.com/user/jbkashi"
                    className={classes.block}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Youtube
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://twitter.com/vitalsurgeon"
                    className={classes.block}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.facebook.com/vitalclinicdelhi/"
                    className={classes.block}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.instagram.com/rattidrjb/"
                    className={classes.block}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://drjbratti.blogspot.in/"
                    className={classes.block}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blogs
                  </a>
                </ListItem>
              </List>
            </div>
            <h5
              style={{
                fontFamily: "Lato, sans-serif"
              }}
            >
              © 2019 Vital Clinic. All rights reserved.
            </h5>
          </div>
        </div>
      </footer>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
