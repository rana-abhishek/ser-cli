import React from 'react';
import NavPills from "components/NavPills/NavPills.jsx";
import Done from "@material-ui/icons/Done";
import withStyles from "@material-ui/core/styles/withStyles";
import aboutPageStyle from "assets/jss/material-kit-pro-react/views/aboutPageStyle.jsx";

const Insnavpills = (props) => {
    return (
        <div>
             <h3 className={props.classes.title}>Insurance We Accept</h3>
                          <NavPills
                            style={{
                                margin: "50px 0"
                            }}
                            alignCenter
                            color="primary"
                            tabs={[
                                {
                                tabButton: "Tab 1",
                                tabContent: (
                                    <span>
                                    <b>
                                    <p className={props.classes.browncolor} style={{
                                        margin:"0"
                                    }}>
                                    Assuming that you will go the easy way and choose a theme for your WordPress website. When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality, the choices are versatile.
                                    </p>
                                    <br />
                                    <div className={props.classes.ticksection} style={{
                                        paddingTop: "0px"
                                    }}>
                                        <p className={props.classes.browncolor}><Done className={props.classes.tickicon + " " + props.classes.browncolor}/>Quick diagnosis</p>
                                        <p className={props.classes.browncolor}><Done className={props.classes.tickicon + " " + props.classes.browncolor}/>Complex medical tests</p>
                                        <p className={props.classes.browncolor}><Done className={props.classes.tickicon + " " + props.classes.browncolor}/>Early identification and intervention</p>
                                        <p className={props.classes.browncolor}><Done className={props.classes.tickicon + " " + props.classes.browncolor}/>Complex surgical interventions</p>
                                    </div>
                                    </b>
                                    </span>
                                )
                                },
                                {
                                tabButton: "Tab 2",
                                tabContent: (
                                    <span>
                                    <b>
                                    <p className={props.classes.browncolor} style={{
                                        margin:"0"
                                    }}>
                                    Assuming that you will go the easy way and choose a theme for your WordPress website. When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality, the choices are versatile.
                                    </p>
                                    <br />
                                    <div className={props.classes.ticksection} style={{
                                        paddingTop: "0px"
                                    }}>
                                        <p className={props.classes.browncolor}><Done className={props.classes.tickicon + " " + props.classes.browncolor}/>Quick diagnosis</p>
                                        <p className={props.classes.browncolor}><Done className={props.classes.tickicon + " " + props.classes.browncolor}/>Complex medical tests</p>
                                        <p className={props.classes.browncolor}><Done className={props.classes.tickicon + " " + props.classes.browncolor}/>Early identification and intervention</p>
                                        <p className={props.classes.browncolor}><Done className={props.classes.tickicon + " " + props.classes.browncolor}/>Complex surgical interventions</p>
                                    </div>
                                    </b>
                                    </span>
                                )
                                },
                                {
                                tabButton: "Tab 3",
                                tabContent: (
                                    <span>
                                    <b>
                                    <p className={props.classes.browncolor} style={{
                                        margin:"0"
                                    }}>
                                    Assuming that you will go the easy way and choose a theme for your WordPress website. When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality, the choices are versatile.
                                    </p>
                                    <br />
                                    <div className={props.classes.ticksection} style={{
                                        paddingTop: "0px"
                                    }}>
                                        <p className={props.classes.browncolor}><Done className={props.classes.tickicon + " " + props.classes.browncolor}/>Quick diagnosis</p>
                                        <p className={props.classes.browncolor}><Done className={props.classes.tickicon + " " + props.classes.browncolor}/>Complex medical tests</p>
                                        <p className={props.classes.browncolor}><Done className={props.classes.tickicon + " " + props.classes.browncolor}/>Early identification and intervention</p>
                                        <p className={props.classes.browncolor}><Done className={props.classes.tickicon + " " + props.classes.browncolor}/>Complex surgical interventions</p>
                                    </div>
                                    </b>
                                    </span>
                                )
                                }
                            ]}
                            />
        </div>
    );
}

export default withStyles(aboutPageStyle)(Insnavpills);
