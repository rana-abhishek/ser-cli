/* eslint-disable react/prop-types */
import React from "react";
import DocTemplate from "./docTemplate";
import DrRatti from "assets/img/ContactUsImages/DoctorImages/DrRatti.jpg";
import MrsRatti from "assets/img/ContactUsImages/DoctorImages/MrsRatti.jpg";

const Leftdoccards = props => {
  return (
    <div
      className={props.classes.cardwrapper}
      // style={{
      //     padding:"30px 150px",
      //     "@media (max-width: 800px)":{
      //         padding:"0"
      //     }
      // }}
    >
      <div style={{ padding: "20px 0" }}>
        <DocTemplate
          classes={props.classes}
          picsrc={DrRatti}
          doctype={"MBBS, MS"}
          docname={"Dr. JB Ratti"}
          docnumber={"+91-11-26252333"}
          docemail={"info@vitalclinic.com"}
        />
      </div>
      <div style={{ paddingBottom: "20px" }}>
        <DocTemplate
          classes={props.classes}
          picsrc={MrsRatti}
          doctype={"MBBS, MS"}
          docname={"Dr. (Mrs.) Neeta Ratti"}
          docnumber={"+91-11-26252333"}
          docemail={"info@vitalclinic.com"}
        />
      </div>
    </div>
  );
};

export default Leftdoccards;
