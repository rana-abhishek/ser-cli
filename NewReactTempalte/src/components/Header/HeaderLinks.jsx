/* eslint-disable react/prop-types */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { NavLink } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.jsx";
import CustomDropLinks from "./customDropLinks";

import headerLinksStyle from "assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropLinks headname="Treatments" />
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          to="/gallery"
          activeClassName={classes.navLinkActive}
          style={{ color: "inherit" }}
        >
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            Picture Gallery
          </Button>
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          to="/videospage"
          activeClassName={classes.navLinkActive}
          style={{ color: "inherit" }}
        >
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            Video Gallery
          </Button>
        </NavLink>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText="Treatments"
            buttonProps={{
              color: "transparent"
            }}
            dropdownList={[
              <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <GridContainer>
      <GridItem xs={12} sm={12} md={8} lg={6}>
        <CustomDropdown
          dropdownHeader="Dropdown header"
          buttonText="Multilevel Dropdown"
          buttonProps={{
            round: true,
            block: true,
            color: "info"
          }}
          dropPlacement="bottom-start"
          dropdownList={[
            "Action",
            "Another action",
            "Something else here",
            { divider: true },
            "Separated link",
            { divider: true },
            "One more separated link",
            <CustomDropdown
              innerDropDown
              buttonText="Submenu"
              buttonProps={{
                simple: true,
                block: true
              }}
              dropPlacement="right-start"
              dropdownList={[
                "Submenu action",
                "Submenu action",
                <CustomDropdown
                  innerDropDown
                  buttonText="Second submenu"
                  buttonProps={{
                    simple: true
                  }}
                  dropPlacement="right-start"
                  dropdownList={["Submenu action 1", "Submenu action 2"]}
                />
              ]}
            />
          ]}
        />
      </GridItem>
    </GridContainer>
              </ListItem>
              <ListItem className={classes.listItem}>
                <NavLink to="/video" activeClassName={classes.navLinkActive} style={{ color: "inherit" }}>
                  <Button
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                  >
                    Male Breast
                </Button>
                </NavLink>
              </ListItem>
              <ListItem className={classes.listItem}>
                <NavLink to="/videospage" activeClassName={classes.navLinkActive} style={{ color: "inherit" }}>
                  <Button
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                  >
                    VITAL SKIN-tite™
                </Button>
                </NavLink>
              </ListItem>
              <ListItem className={classes.listItem}>
                <NavLink to="/videospage" activeClassName={classes.navLinkActive} style={{ color: "inherit" }}>
                  <Button
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                  >
                    Cosmetic Gynaecology
                </Button>
                </NavLink>
              </ListItem>
              <ListItem className={classes.listItem}>
                <NavLink to="/videospage" activeClassName={classes.navLinkActive} style={{ color: "inherit" }}>
                  <Button
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                  >
                    Awake Liposuction
                </Button>
                </NavLink>
              </ListItem>
              <ListItem className={classes.listItem}>
                <NavLink to="/videospage" activeClassName={classes.navLinkActive} style={{ color: "inherit" }}>
                  <Button
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                  >
                    Awake Cosmetic Surgery
                </Button>
                </NavLink>
              </ListItem>
              <ListItem className={classes.listItem}>
                <NavLink to="/videospage" activeClassName={classes.navLinkActive} style={{ color: "inherit" }}>
                  <Button
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                  >
                    Breast Surgeries
                </Button>
                </NavLink>
              </ListItem>
              <ListItem className={classes.listItem}>
                <NavLink to="/videospage" activeClassName={classes.navLinkActive} style={{ color: "inherit" }}>
                  <Button
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                  >
                    ROOTActiv™
                </Button>
                </NavLink>
              </ListItem>
              <ListItem className={classes.listItem}>
                <NavLink to="/videospage" activeClassName={classes.navLinkActive} style={{ color: "inherit" }}>
                  <Button
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                  >
                    Body Contouring Surgeries
                </Button>
                </NavLink>
              </ListItem>
              </List>
            ]}
          />
        // </NavLink>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <NavLink
          to="/internationalpatients"
          activeClassName={classes.navLinkActive}
          style={{ color: "inherit" }}
        >
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            International Patients
          </Button>
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="http://blog.vitalclinic.com/"
          color="transparent"
          target="_target"
          className={classes.blognavLink}
        >
          Blog
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          to="/aboutus"
          activeClassName={classes.navLinkActive}
          style={{ color: "inherit" }}
        >
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
            to="/aboutus"
          >
            About Us
          </Button>
        </NavLink>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
      <NavLink to="/enquiry" activeClassName={classes.navLinkActive} style={{color:"inherit"}}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Enquiry
        </Button>
        </NavLink>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <NavLink
          to="/contactus"
          activeClassName={classes.navLinkActive}
          style={{ color: "inherit" }}
        >
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
            to="/contactus"
          >
            Contact Us
          </Button>
        </NavLink>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem> */}
    </List>

    // <List className={classes.list + " " + classes.mlAuto}>
    //   <ListItem className={classes.listItem}>
    //     <CustomDropdown
    //       noLiPadding
    //       navDropdown
    //       hoverColor={dropdownHoverColor}
    //       buttonText="Components"
    //       buttonProps={{
    //         className: classes.navLink,
    //         color: "transparent"
    //       }}
    //       buttonIcon={Apps}
    //       dropdownList={[
    //         <Link to="/" className={classes.dropdownLink}>
    //           <LineStyle className={classes.dropdownIcons} /> Presentation Page
    //         </Link>,
    //         <Link to="/components" className={classes.dropdownLink}>
    //           <Layers className={classes.dropdownIcons} />All components
    //         </Link>,
    //         <a
    //           href="https://demos.creative-tim.com/material-kit-pro-react/#/documentation/tutorial"
    //           target="_blank"
    //           className={classes.dropdownLink}
    //         >
    //           <Icon className={classes.dropdownIcons}>content_paste</Icon>Documentation
    //         </a>
    //       ]}
    //     />
    //   </ListItem>
    //   <ListItem className={classes.listItem}>
    //     <CustomDropdown
    //       noLiPadding
    //       navDropdown
    //       hoverColor={dropdownHoverColor}
    //       buttonText="Sections"
    //       buttonProps={{
    //         className: classes.navLink,
    //         color: "transparent"
    //       }}
    //       buttonIcon={ViewDay}
    //       dropdownList={[
    //         <Link
    //           to="/sections#headers"
    //           className={classes.dropdownLink}
    //           onClick={e => smoothScroll(e, "headers")}
    //         >
    //           <Dns className={classes.dropdownIcons} /> Headers
    //         </Link>,
    //         <Link
    //           to="/sections#features"
    //           className={classes.dropdownLink}
    //           onClick={e => smoothScroll(e, "features")}
    //         >
    //           <Build className={classes.dropdownIcons} /> Features
    //         </Link>,
    //         <Link
    //           to="/sections#blogs"
    //           className={classes.dropdownLink}
    //           onClick={e => smoothScroll(e, "blogs")}
    //         >
    //           <ListIcon className={classes.dropdownIcons} /> Blogs
    //         </Link>,
    //         <Link
    //           to="/sections#teams"
    //           className={classes.dropdownLink}
    //           onClick={e => smoothScroll(e, "teams")}
    //         >
    //           <People className={classes.dropdownIcons} /> Teams
    //         </Link>,
    //         <Link
    //           to="/sections#projects"
    //           className={classes.dropdownLink}
    //           onClick={e => smoothScroll(e, "projects")}
    //         >
    //           <Assignment className={classes.dropdownIcons} /> Projects
    //         </Link>,
    //         <Link
    //           to="/sections#pricing"
    //           className={classes.dropdownLink}
    //           onClick={e => smoothScroll(e, "pricing")}
    //         >
    //           <MonetizationOn className={classes.dropdownIcons} /> Pricing
    //         </Link>,
    //         <Link
    //           to="/sections#testimonials"
    //           className={classes.dropdownLink}
    //           onClick={e => smoothScroll(e, "testimonials")}
    //         >
    //           <Chat className={classes.dropdownIcons} /> Testimonials
    //         </Link>,
    //         <Link
    //           to="/sections#contacts"
    //           className={classes.dropdownLink}
    //           onClick={e => smoothScroll(e, "contacts")}
    //         >
    //           <Call className={classes.dropdownIcons} /> Contacts
    //         </Link>
    //       ]}
    //     />
    //   </ListItem>
    //   <ListItem className={classes.listItem}>
    //     <CustomDropdown
    //       noLiPadding
    //       navDropdown
    //       hoverColor={dropdownHoverColor}
    //       buttonText="Examples"
    //       buttonProps={{
    //         className: classes.navLink,
    //         color: "transparent"
    //       }}
    //       buttonIcon={ViewCarousel}
    //       dropdownList={[
    //         <Link to="/about-us" className={classes.dropdownLink}>
    //           <AccountBalance className={classes.dropdownIcons} /> About Us
    //         </Link>,
    //         <Link to="/blog-post" className={classes.dropdownLink}>
    //           <ArtTrack className={classes.dropdownIcons} /> Blog Post
    //         </Link>,
    //         <Link to="/blog-posts" className={classes.dropdownLink}>
    //           <ViewQuilt className={classes.dropdownIcons} /> Blog Posts
    //         </Link>,
    //         <Link to="/contact-us" className={classes.dropdownLink}>
    //           <LocationOn className={classes.dropdownIcons} /> Contact Us
    //         </Link>,
    //         <Link to="/landing-page" className={classes.dropdownLink}>
    //           <ViewDay className={classes.dropdownIcons} /> Landing Page
    //         </Link>,
    //         <Link to="/login-page" className={classes.dropdownLink}>
    //           <Fingerprint className={classes.dropdownIcons} /> Login Page
    //         </Link>,
    //         <Link to="/pricing" className={classes.dropdownLink}>
    //           <AttachMoney className={classes.dropdownIcons} /> Pricing Page
    //         </Link>,
    //         <Link to="/shopping-cart-page" className={classes.dropdownLink}>
    //           <ShoppingBasket className={classes.dropdownIcons} /> Shopping Cart
    //         </Link>,
    //         <Link to="/ecommerce-page" className={classes.dropdownLink}>
    //           <Store className={classes.dropdownIcons} /> Ecommerce Page
    //         </Link>,
    //         <Link to="/product-page" className={classes.dropdownLink}>
    //           <ShoppingCart className={classes.dropdownIcons} /> Product Page
    //         </Link>,
    //         <Link to="/profile-page" className={classes.dropdownLink}>
    //           <AccountCircle className={classes.dropdownIcons} /> Profile Page
    //         </Link>,
    //         <Link to="/signup-page" className={classes.dropdownLink}>
    //           <PersonAdd className={classes.dropdownIcons} /> Signup Page
    //         </Link>
    //       ]}
    //     />
    //   </ListItem>
    //   <ListItem className={classes.listItem}>
    //     <Button
    //       href="https://www.creative-tim.com/product/material-kit-pro-react"
    //       color={window.innerWidth < 960 ? "info" : "white"}
    //       target="_blank"
    //       className={classes.navButton}
    //       round
    //     >
    //       <ShoppingCart className={classes.icons} /> buy now
    //     </Button>
    //   </ListItem>
    // </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};

export default withStyles(headerLinksStyle)(HeaderLinks);
