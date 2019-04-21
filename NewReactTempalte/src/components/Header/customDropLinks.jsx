/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-string-refs */
import React from "react";
// @material-ui/core components
// @material-ui/icons
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import { NavLink } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import headerLinksStyle from "assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx";

class CustomDropLinks extends React.Component {
  render() {
    return (
      <CustomDropdown
        ref="multi"
        innerDropDown
        buttonText={this.props.headname}
        buttonProps={{
          simple: true,
          color: "transparent"
        }}
        dropPlacement="bottom-start"
        dropdownList={[
          <CustomDropdown
            ref="multi"
            innerDropDown
            noLiPadding={true}
            buttonText="Gynecomastia (Male Breast)"
            buttonProps={{
              simple: true,
              block: true,
              color: "transparent"
            }}
            dropPlacement="right-start"
            dropdownList={[
              <NavLink
                to="/malebreast/Gynecomastia&gyno"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>
                  Gynecomastia General Information
                </div>
              </NavLink>,
              <NavLink
                to="/malebreast/MaleBreastInformation"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>
                  Male Breast Information
                </div>
              </NavLink>,
              <NavLink
                to="/malebreast/FAQsMaleBreasts"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>FAQs Male Breasts</div>
              </NavLink>,
              <NavLink
                to="/malebreast/RemovalOfMammaryGlands"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>
                  Removal of Mammary Glands
                </div>
              </NavLink>,
              <NavLink
                to="/malebreast/SurferyForIncompleteGynecomastia"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>
                  Surgery-for-incomplete-gynecomastia
                </div>
              </NavLink>,
              <NavLink
                to="/malebreast/ExerciseDoesNotHelp"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>
                  Exercise Does Not Help
                </div>
              </NavLink>,
              <NavLink
                to="/malebreast/PicturesGalleryMaleBreasts"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>
                  Pictures gallery Male Breasts
                </div>
              </NavLink>,
              <NavLink
                to="/malebreast/TechniqueOfGynecomastiaSurgery"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>
                  Technique of Gynecomastia Surgery
                </div>
              </NavLink>,
              <NavLink
                to="/malebreast/ImportantIssueOfScars"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>
                  The Important Issue of Scars
                </div>
              </NavLink>,
              <NavLink
                to="/malebreast/ImportantIssueOfSkin"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>
                  The Important Issue of Skin
                </div>
              </NavLink>,
              <NavLink
                to="/malebreast/AsymmetricalGynecomastia"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>
                  Unilateral or Asymmetrical Gynecomastia
                </div>
              </NavLink>,
              <NavLink
                to="/malebreast/GynecomastiaSurgeryCost"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>
                  Gynecomastia Surgery Cost
                </div>
              </NavLink>
            ]}
          />,
          <CustomDropdown
            ref="multi"
            innerDropDown
            noLiPadding={true}
            buttonText="Liposuction"
            buttonProps={{
              simple: true,
              block: true,
              color: "transparent"
            }}
            dropPlacement="right-start"
            dropdownList={[
              <NavLink
                to="/liposuction/AreasForLiposuction"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>
                  Areas for liposcution
                </div>
              </NavLink>,
              <NavLink
                to="/liposuction/AbdomenLiposuction"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>Abdomen liposuction</div>
              </NavLink>,
              <NavLink
                to="/liposuction/ArmsLiposuction"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>Arms liposuction</div>
              </NavLink>,
              <NavLink
                to="/liposuction/LoveHandlesLiposuction"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>
                  Love handles,hips,side bags liposuction
                </div>
              </NavLink>,
              <NavLink
                to="/liposuction/ThighsLiposuction"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>Thighs liposuction</div>
              </NavLink>,
              <NavLink
                to="/liposuction/BackLiposuction"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>Back liposuction</div>
              </NavLink>,
              <NavLink
                to="/liposuction/HighDefinitionLiposuction"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>
                  High Definition liposuction
                </div>
              </NavLink>
              // <NavLink
              //   to="/liposuction/BellyUpper&LowerLiposuction"
              //   activeClassName={this.props.classes.navLinkActive}
              //   style={{ color: "inherit" }}
              // >
              //   <div style={{ padding: "12px 30px" }}>
              //     Belly-upper & lower liposuction
              //   </div>
              // </NavLink>
            ]}
          />,
          <CustomDropdown
            ref="multi"
            innerDropDown
            noLiPadding={true}
            buttonText="Breast Surgeries"
            buttonProps={{
              simple: true,
              block: true,
              color: "transparent"
            }}
            dropPlacement="right-start"
            dropdownList={[
              <NavLink
                to="/breastSurgeries/BreastAugmentation"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>Breast Augmentation</div>
              </NavLink>,
              <NavLink
                to="/breastSurgeries/BreastLift"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>Breast Lift</div>
              </NavLink>,
              <NavLink
                to="/breastSurgeries/BreastReduction"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>Breast Reduction</div>
              </NavLink>
            ]}
          />,
          <CustomDropdown
            ref="multi"
            innerDropDown
            noLiPadding={true}
            buttonText="Body Contouring Surgeries"
            buttonProps={{
              simple: true,
              block: true,
              color: "transparent"
            }}
            dropPlacement="right-start"
            dropdownList={[
              <NavLink
                to="/bodyContouringSurgeries/ContouringSurgeryAfterWeightLoss"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>
                  Body Contouring Surgery after Weight Loss
                </div>
              </NavLink>,
              // <NavLink
              //   to="/bodyContouringSurgeries/Abdominoplasty"
              //   activeClassName={this.props.classes.navLinkActive}
              //   style={{ color: "inherit" }}
              // >
              //   <div style={{ padding: "12px 30px" }}>Abdominoplasty</div>
              // </NavLink>,
              <NavLink
                to="/bodyContouringSurgeries/AbdominoplastyHowPatientsPresent"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>
                  Abdominoplasty How Patients Present
                </div>
              </NavLink>,
              <NavLink
                to="/bodyContouringSurgeries/AbdominplastyTypes"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>Abdominoplasty Types</div>
              </NavLink>,
              <NavLink
                to="/bodyContouringSurgeries/TotalAbdominoplastyTechnique"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>
                  Total Abdominoplasty Technique
                </div>
              </NavLink>,
              <NavLink
                to="/bodyContouringSurgeries/Brachioplasty"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>Brachioplasty</div>
              </NavLink>,
              <NavLink
                to="/bodyContouringSurgeries/Thighplasty&LateralBodyLift"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>
                  Thighplasty & lateral body lift
                </div>
              </NavLink>
            ]}
          />,
          <NavLink
            to="/awakeCosmetic"
            activeClassName={this.props.classes.navLinkActive}
            style={{ color: "inherit" }}
          >
            <div style={{ padding: "6px 0", textAlign: "center" }}>
              Awake Cosmetic Surgery
            </div>
          </NavLink>,
          <NavLink
            to="/cosmeticGynecology"
            activeClassName={this.props.classes.navLinkActive}
            style={{ color: "inherit" }}
          >
            <div style={{ padding: "6px 0", textAlign: "center" }}>
              Cosmetic Gynecology
            </div>
          </NavLink>,
          <CustomDropdown
            ref="multi"
            innerDropDown
            noLiPadding={true}
            buttonText="Vital Skin-tite™"
            buttonProps={{
              simple: true,
              block: true,
              color: "transparent"
            }}
            dropPlacement="right-start"
            dropdownList={[
              <NavLink
                to="/skinTite/MechanismOfActionOfIRF"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>
                  Mechanism of action of ReformCRF
                </div>
              </NavLink>,
              <NavLink
                to="/skinTite/GoingThroughASessionOfIRF"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>
                  Going through a session of ReformCRF
                </div>
              </NavLink>,
              <NavLink
                to="/skinTite/PatientTestimonials"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>
                  Patient Testimonials on ReformCRF
                </div>
              </NavLink>
            ]}
          />,
          // <NavLink
          //   to="/surgery"
          //   activeClassName={this.props.classes.navLinkActive}
          //   style={{ color: "inherit" }}
          // >
          //   <div style={{ padding: "6px 0", textAlign: "center" }}>Surgery</div>
          // </NavLink>,
          <NavLink
            to="/rootActiv"
            activeClassName={this.props.classes.navLinkActive}
            style={{ color: "inherit" }}
          >
            <div style={{ padding: "6px 0", textAlign: "center" }}>
              ROOTACTIV™
            </div>
          </NavLink>,
          <CustomDropdown
            ref="multi"
            innerDropDown
            noLiPadding={true}
            buttonText="Awake Liposuction"
            buttonProps={{
              simple: true,
              block: true,
              color: "transparent"
            }}
            dropPlacement="right-start"
            dropdownList={[
              <NavLink
                to="/awakeLiposuction/GetInShape"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>
                  Get in Shape by Liposuction
                </div>
              </NavLink>,
              <NavLink
                to="/awakeLiposuction/PearShapedBottom"
                activeClassName={this.props.classes.navLinkActive}
                style={{ color: "inherit" }}
              >
                <div style={{ padding: "12px 30px" }}>
                  Pear Shaped Bottom Liposuction
                </div>
              </NavLink>
            ]}
          />
          // { divider: true },
          // "Separated link",
          // { divider: true },
          // "One more separated link",
          // <CustomDropdown
          //   ref="multi"
          //   innerDropDown
          //   buttonText="Submenu"
          //   buttonProps={{
          //     simple: true,
          //     block: true
          //   }}
          //   dropPlacement="right-start"
          //   dropdownList={[
          //     "Submenu action",
          //     "Submenu action",
          //     <CustomDropdown
          //       ref="multi"
          //       innerDropDown
          //       buttonText="Second submenu"
          //       buttonProps={{
          //         simple: true
          //       }}
          //       dropPlacement="right-start"
          //       dropdownList={["Submenu action 1", "Submenu action 2"]}
          //     />
          //   ]}
          // />
        ]}
      />
    );
  }
}

export default withStyles(headerLinksStyle)(CustomDropLinks);
