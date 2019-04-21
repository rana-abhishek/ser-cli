// import React from 'react';

// const Officetemp = (props) => {
//     return (

//         {retadress(props)}
// <div style={{padding:"45px 25%"}}>
//     <div>
//         <h4 className={props.classes.offhourtitle}>{props.title}</h4>
//         <p className={props.classes.description} style={{
//             fontSize: "18px",
//             lineHeight: "2"
//         }}>
//             4096 N Highland St, Arlington<br/>
//             VA 32101, USA<br/>
//             <a className={props.classes.officelink}>info@beclinic.com<br/></a>
//             800 1234 56 78
//         </p>
//     </div>
//     <div style={{marginTop: "30px"}}>
//         <h4 className={props.classes.offhourtitle}>{props.title}</h4>
//         <p className={props.classes.description} style={{
//             fontSize: "18px",
//             lineHeight: "2"
//         }}>
//             4096 N Highland St, Arlington<br/>
//             VA 32101, USA<br/>
//             <a className={props.classes.officelink}>info@beclinic.com<br/></a>
//             800 1234 56 78
//         </p>
//     </div>
// </div>
//     );
// }

// export default Officetemp;
import React, { Component } from "react";

class Officetemp extends Component {
  render() {
    const retadress = props => {
      switch (props.type) {
        case "office1": {
          return (
            <div
              style={{
                padding: "45px 0",
                textAlign: "center",
                fontStyle: ""
              }}
            >
              <div>
                <h4 className={props.classes.offhourtitle}>{props.title}</h4>
                <p
                  className={props.classes.description}
                  style={{
                    fontSize: "17px",
                    lineHeight: "1.8"
                  }}
                >
                  L-3, South Extension -II
                  <br />
                  New Delhi-110 049
                  <br />
                  <a
                    href="mailto:info@vitalclinic.com"
                    className={props.classes.officelink}
                  >
                    info@vitalclinic.com
                    <br />
                  </a>
                  <a
                    href="tel:+91-11-26252333"
                    className={props.classes.officelink}
                  >
                    +91-11-26252333
                    <br />
                  </a>
                </p>
              </div>
              <div style={{ marginTop: "30px" }}>
                <h4 className={props.classes.offhourtitle}>Opening Hours</h4>
                <p
                  className={props.classes.description}
                  style={{
                    fontSize: "17px",
                    lineHeight: "1.8"
                  }}
                >
                  Mon - Sat: 09:00 – 19:00
                  <br />
                  Sun: Closed
                  <br />
                </p>
              </div>
            </div>
          );
        }
        case "office2": {
          return (
            <div style={{ padding: "45px 0", textAlign: "center" }}>
              <div>
                <h4 className={props.classes.offhourtitle}>{props.title}</h4>
                <p
                  className={props.classes.description}
                  style={{
                    fontSize: "17px",
                    lineHeight: "1.8"
                  }}
                >
                  M-3, South Extension -II
                  <br />
                  New Delhi-110 049
                  <br />
                  <a
                    href="https://www.melblok.com/"
                    className={props.classes.officelink}
                    rel="noopener no referrer"
                    // eslint-disable-next-line react/jsx-no-target-blank
                    target="_blank"
                  >
                    www.Melblok.com
                    <br />
                  </a>
                  <a
                    href="tel:+91-8010888000"
                    className={props.classes.officelink}
                  >
                    +91-8010888000
                    <br />
                  </a>
                </p>
              </div>
              <div style={{ marginTop: "30px" }}>
                <h4 className={props.classes.offhourtitle}>Opening Hours</h4>
                <p
                  className={props.classes.description}
                  style={{
                    fontSize: "17px",
                    lineHeight: "1.8"
                  }}
                >
                  Mon - Sat: 09:00 – 19:00
                  <br />
                  Sun: Closed
                  <br />
                </p>
              </div>
            </div>
          );
        }
        default:
          return null;
      }
    };
    return <div>{retadress(this.props)}</div>;
  }
}

export default Officetemp;
