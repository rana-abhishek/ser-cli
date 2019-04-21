import React from 'react';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import image14 from "assets/img/foot-logo.png"
import Button from "components/CustomButtons/Button.jsx";

const Aboutfoot = (props) => {
    return (
        <div style={{
            padding: "55px 0",
            backgroundColor: "#000"
        }}>
            <GridContainer style={{
                maxWidth: "1200px",
                marginRight: "auto",
                marginLeft: "auto"
            }}>
                <GridItem xs={12} sm={12} md={9} lg={9}>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-evenly"
                    }}>
                        <img src={image14}/>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <h3 className={props.classes.nobortitle} style={{marginBottom: "0",color: "#fff",padding: "0",textAlign: "center"}}>Encompassing All Accessible Exclusive Medical Treatment</h3>
                        <p className={props.classes.description} style={{color:"white",textAlign: "center"}}>
                            We offer extensive medical procedures to outbound and inbound patients.
                        </p>
                        </div>
                    </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={3} lg={3} style={{margin:"10px 0"}}>
                    <div style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Button className={props.classes.footbut} color="transparent" round>Get In Touch</Button>
                    </div>
                </GridItem>
            </GridContainer>
        </div>
    );
};

export default Aboutfoot;