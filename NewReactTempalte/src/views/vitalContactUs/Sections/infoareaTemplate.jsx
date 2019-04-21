import React from 'react';
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Healing from "@material-ui/icons/Healing";
import GridContainer from "components/Grid/GridContainer.jsx";
import cont from "assets/img/contacticon.png";
import icon from "assets/img/contTile-1.png";

function ContInfoArea(props) {
    return (
            <div className={props.classes.infowrapper}>
                <div className={props.classes.toptile}>
                    <div className={props.classes.imgwrapper}>
                        <img
                            src={props.icon}
                        />
                    </div>
                    <div>
                    <h3 className={props.classes.whitetitle } style={{color:"rgb(221, 200, 129)"}}>{props.title}</h3>
                    <p className={props.classes.description + " " + props.classes.latofont} style={{
                        color: "rgb(221, 200, 129)",
                        fontSize: "15px"
                    }}>
                    {props.descr}
                    </p>
                    </div>
                </div>
            </div>                    
    )
}

export default ContInfoArea
