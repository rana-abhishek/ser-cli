/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-deprecated */
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import { NavLink } from "react-router-dom";

// @material-ui/icons
import ExpandMore from "@material-ui/icons/ExpandMore";

import accordionStyle from "assets/jss/material-kit-pro-react/components/accordionStyle.jsx";

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
      single: false
    };
  }

  componentWillMount() {
    // am facut array din numar ca metoda .find sa functioneze indiferent de ce se intampla.
    if (this.state.active.length === undefined) {
      this.setState({
        active: [this.state.active],
        single: true
      });
    }
  }

  handleChange = panel => (event, expanded) => {
    let newArray;

    if (this.state.single) {
      if (this.state.active[0] === panel) {
        newArray = [];
      } else {
        newArray = [panel];
      }
    } else {
      if (this.state.active.indexOf(panel) === -1) {
        newArray = [...this.state.active, panel];
      } else {
        newArray = [...this.state.active];
        newArray.splice(this.state.active.indexOf(panel), 1);
      }
    }
    this.setState({
      active: newArray
    });
  };
  render() {
    const { classes, collapses, activeColor } = this.props;
    return (
      <div className={classes.root}>
        {collapses.map((prop, key) => {
          return (
            <ExpansionPanel
              expanded={
                this.state.active === key ||
                this.state.active.indexOf(key) !== -1
              }
              onChange={this.handleChange(key)}
              key={key}
              classes={{
                root: classes.expansionPanel,
                expanded: classes.expansionPanelExpanded
              }}
              style={{ background: "transparent" }}
            >
              <ExpansionPanelSummary
                expandIcon={!prop.nodrop ? <ExpandMore /> : null}
                classes={{
                  root: `${classes.expansionPanelSummary} ${
                    classes[activeColor + "ExpansionPanelSummary"]
                  }`,
                  expanded: `${classes.expansionPanelSummaryExpaned} ${
                    classes[activeColor + "ExpansionPanelSummaryExpaned"]
                  }`,
                  content: classes.expansionPanelSummaryContent,
                  expandIcon: classes.expansionPanelSummaryExpandIcon
                }}
                style={{
                  color: "rgb(221, 200, 129)",
                  borderBottom: "1px solid rgb(221, 200, 129)"
                }}
              >
                {prop.nodrop ? (
                  <NavLink
                    to={prop.content.url}
                    className={classes.darkBrown}
                    activeClassName={classes.activeRightLink}
                  >
                    <h4 className={classes.title} style={{ color: "inherit" }}>
                      {prop.title}
                    </h4>
                  </NavLink>
                ) : (
                  <h4
                    className={classes.title}
                    style={{ color: "rgb(221, 200, 129)" }}
                  >
                    {prop.title}
                  </h4>
                )}
              </ExpansionPanelSummary>
              <ExpansionPanelDetails
                className={classes.expansionPanelDetails}
                style={{ color: "rgb(94, 71, 44)" }}
              >
                {prop.content.length > 0
                  ? prop.content.map((item, index) => (
                      <li
                        key={index}
                        style={{
                          color: "rgb(221, 200, 129)",
                          paddingBottom: "5px"
                        }}
                      >
                        <NavLink
                          to={item.url}
                          className={classes.darkBrown}
                          activeClassName={classes.activeRightLink}
                        >
                          {item.name}
                        </NavLink>
                      </li>
                    ))
                  : null}
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })}
      </div>
    );
  }
}

Accordion.defaultProps = {
  active: -1,
  activeColor: "primary"
};

Accordion.propTypes = {
  classes: PropTypes.object.isRequired,
  // index of the default active collapse
  active: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  activeColor: PropTypes.oneOf([
    "primary",
    "secondary",
    "warning",
    "danger",
    "success",
    "info",
    "rose"
  ])
};

export default withStyles(accordionStyle)(Accordion);
