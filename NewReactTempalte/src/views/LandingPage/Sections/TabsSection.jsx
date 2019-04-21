import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import tabsStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx";

const styles = {
  textCenter: {
    textAlign: "center"
  }
};

class TabsSection extends React.Component{
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
            <h2 className={classes.title}>Tabs</h2>
            <CustomTabs
            headerColor="primary"
            tabs={[
                {
                tabName: "Profile",
                tabIcon: Face,
                tabContent: (
                    <p className={classes.textCenter}>
                    I think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that
                    things could be at. So when you get something that has
                    the name Kanye West on it, it’s supposed to be pushing
                    the furthest possibilities. I will be the leader of a
                    company that ends up being worth billions of dollars,
                    because I got the answers. I understand culture. I am
                    the nucleus.
                    </p>
                )
                },
                {
                tabName: "Messages",
                tabIcon: Chat,
                tabContent: (
                    <p className={classes.textCenter}>
                    I think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that
                    things could be at. I will be the leader of a company
                    that ends up being worth billions of dollars, because
                    I got the answers. I understand culture. I am the
                    nucleus. I think that’s a responsibility that I have,
                    to push possibilities, to show people, this is the
                    level that things could be at.
                    </p>
                )
                },
                {
                tabName: "Settings",
                tabIcon: Build,
                tabContent: (
                    <p className={classes.textCenter}>
                    think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that
                    things could be at. So when you get something that has
                    the name Kanye West on it, it’s supposed to be pushing
                    the furthest possibilities. I will be the leader of a
                    company that ends up being worth billions of dollars,
                    because I got the answers. I understand culture. I am
                    the nucleus.
                    </p>
                )
                }
            ]}
            />
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(tabsStyle)(TabsSection);