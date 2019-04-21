import React from 'react';
import InfoArea from "components/InfoArea/InfoArea.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Timeline from "@material-ui/icons/Timeline";

function Infofromleft(props) {
    return (
                        <GridContainer>
                              <GridItem 
                                xs={12}
                                sm={12}
                                md={6}
                                style={{
                                    padding: "0 20px"
                                }}
                              >
                              <div className={props.classes.browmoverlay + " " + props.classes.brownborder  + " " + props.classes.radiusborder} style={{padding:"20px 10px", marginTop:"40px"}}>
                                <InfoArea
                                    title="Experienced Physicians"
                                    description="Your health is your most important asset. You should entrust it only to the best professionals."
                                    icon={Timeline}
                                    iconColor="rose"
                                    
                                />
                                </div>
                                <div className={props.classes.browmoverlay + " " + props.classes.brownborder + " " + props.classes.radiusborder} style={{padding:"20px 10px", marginTop:"40px"}}>
                                <InfoArea
                                    title="Personalized Treatment"
                                    description="Treatment choices perfectly match your goals of treatment complications with early intervention."
                                    icon={Timeline}
                                    iconColor="rose"
                                />
                                </div>
                              </GridItem>
                              <GridItem
                                // data-aos="fade-right"
                                // data-aos-offset="200"
                                // data-aos-delay="500"
                                // data-aos-duration="1500"
                                // data-aos-easing="ease-in-out"
                                // data-aos-mirror="true"
                                // data-aos-once="false"
                                // data-aos-anchor-placement="top-center"
                               xs={12}
                               sm={12}
                               md={6}
                               style={{
                                   padding: "0 20px"
                               }}
                              >
                                <div className={props.classes.browmoverlay + " " + props.classes.brownborder + " " + props.classes.radiusborder} style={{padding:"20px 10px", marginTop:"40px"}}>
                                <InfoArea
                                    title="Quality and Safety"
                                    description="All team members at Medical Center have been trained thoroughly to assist in any situation."
                                    icon={Timeline}
                                    iconColor="rose"
                                />
                                </div>
                                <div className={props.classes.browmoverlay + " " + props.classes.brownborder + " " + props.classes.radiusborder} style={{padding:"20px 10px", marginTop:"40px"}}>
                                <InfoArea
                                    title="Immediate Service"
                                    description="Your treatment plan is designed for steady progress, with every phase promptly implemented."
                                    icon={Timeline}
                                    iconColor="rose"
                                />
                                </div>
                              </GridItem>
                          </GridContainer>
    )
}

export default Infofromleft
