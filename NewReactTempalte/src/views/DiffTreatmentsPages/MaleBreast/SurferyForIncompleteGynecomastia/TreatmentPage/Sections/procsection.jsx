import React from 'react';
import Accordion from "components/Accordion/Accordion.jsx";

function Procsection(props) {
    return (
        <div>
            <h3 className={props.classes.title}>{props.data.tabshead}</h3>
                          <p className={props.classes.browncolor}>{props.data.tabsdesc}</p>
                          <div style={{
                              margin: "30px 0",

                          }}>
                            <Accordion
                                active={-1}
                                collapses={props.data.tabsitems}
                            />
                          </div>  
        </div>
    )
}

export default Procsection;
