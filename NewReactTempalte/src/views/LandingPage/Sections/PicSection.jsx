/* eslint-disable react/prop-types */
import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// import CustomTabs from "components/CustomTabs/Landingtabs.jsx";
import { Link } from "react-router-dom";

import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.jsx";

// import pic1 from "assets/img/tile-1.jpg";
// import pic1 from "assets/img/treat-1.jpg";
import pic1 from "assets/img/HomePageImages/TabsImages/treat-1.jpg";
import pic2 from "assets/img/HomePageImages/TabsImages/treat-3.jpg";
import pic3 from "assets/img/HomePageImages/TabsImages/treat-2.jpg";
import pic4 from "assets/img/HomePageImages/TabsImages/treat-4.jpg";

import { cardTitle } from "assets/jss/material-kit-pro-react.jsx";

const style = {
  ...imagesStyles,
  cardTitle,
  textCenter: {
    textAlign: "center",
    padding: "50px 20%",
    backgroundColor: "#F1EBE3",
    color: "rgb(94, 71, 44)",
    fontSize: "16px",
    fontFamily: "Lato, sans-serif",
    margin: "0",
    "@media (max-width: 800px)": {
      padding: "20px 40px",
      fontSize: "14px"
    }
  }
};

class PicSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div
        style={{
          margin: "0px"
        }}
      >
        <GridContainer style={{ marginRight: "0" }}>
          <GridItem style={{ padding: "0px" }} xs={6} sm={3} md={3}>
            <Link to="/malebreast/Gynecomastia&gyno">
              <div className={classes.tabsHover}>
                <img
                  className={classes.imgCardTop}
                  src={pic2}
                  alt="Card-img-cap"
                />
                <div className={classes.imgCardCont}>
                  Gynecomastia / Male Breast / Gyno
                </div>
              </div>
            </Link>
            {/* desc="For" title="Her" */}
            {/* <Cards src={pic1}  type="fourtiles" /> */}
          </GridItem>
          <GridItem style={{ padding: "0px" }} xs={6} sm={3} md={3}>
            <Link to="/liposuction/AreasForLiposuction">
              <div className={classes.tabsHover}>
                <img
                  className={classes.imgCardTop}
                  src={pic4}
                  alt="Card-img-cap"
                />
                <div className={classes.imgCardCont}>Liposuction</div>
              </div>
            </Link>
            {/* <Cards src={pic2} type="fourtiles" /> */}
          </GridItem>
          <GridItem style={{ padding: "0px" }} xs={6} sm={3} md={3}>
            <Link to="/breastSurgeries/BreastAugmentation">
              <div className={classes.tabsHover}>
                <img
                  className={classes.imgCardTop}
                  src={pic1}
                  alt="Card-img-cap"
                />
                <div className={classes.imgCardCont}>Breast Surgeries</div>
              </div>
            </Link>
            {/* <img className={classes.imgCardTop} src={pic1} alt="Card-img-cap" /> */}
            {/* <Cards src={pic3} type="fourtiles" /> */}
          </GridItem>
          <GridItem style={{ padding: "0px" }} xs={6} sm={3} md={3}>
            <Link to="/bodyContouringSurgeries/ContouringSurgeryAfterWeightLoss">
              <div className={classes.tabsHover}>
                <img
                  className={classes.imgCardTop}
                  src={pic3}
                  alt="Card-img-cap"
                />
                <div className={classes.imgCardCont}>Body contouring</div>
              </div>
            </Link>
            {/* <img className={classes.imgCardTop} src={pic4} alt="Card-img-cap" /> */}
            {/* <Cards src={pic4} type="fourtiles" /> */}
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <div className={classes.vitalCont}>
              In case you are contemplating doing any of the above cosmetic
              surgeries, then VITAL CLINIC is your destination! Dr JB Ratti,
              Senior Cosmetic Surgeon, is pioneer in Tumescent Awake Technique
              in India. Whether it is Gynecomastia / Gyno, Liposuction, female
              Breast Surgeries, Body Contouring Surgeries or any other cosmetic
              surgery, it will be done totally under local anesthesia. You may
              remain awake or go to sleep throughout. Every cosmetic surgery is
              completely painless, bloodless and like an office procedure. You
              may come after breakfast, get your surgery done and go home
              immediately after the surgery is over. Tumescent technique is the
              best and safest way of doing cosmetic surgeries. It has a very
              high safety profile. Results are permanent.
            </div>
          </GridItem>
        </GridContainer>
        {/* <GridContainer>
          <CustomTabs
            headerColor="info"
            tabs={[
              {
                tabName: "Gynaecomastia",
                tabIcon: pic2,
                tabContent: (
                  <p className={classes.textCenter}>
                    Men who have enlarged chests (breasts) suffer from a
                    condition known as gynecomastia. Around 50% of the men’s
                    population including teenage boys have enlarged breasts. In
                    most of the cases (90%), the enlarged breast issue gets
                    resolved on its own. But if it is not resolved and the
                    individual enters his adulthood, then there is less scope to
                    reduce.
                  </p>
                )
              },
              {
                tabName: "Liposuction Surgeries",
                tabIcon: pic4,
                tabContent: (
                  <p className={classes.textCenter}>
                    AWAKE LIPOSUCTION is a cosmetic surgery procedure for
                    permanent body shaping where fat is removed from between
                    skin and muscles from specific areas of the body. It is done
                    by using hollow steel tubes called cannulas with the help of
                    powerful vacuum suction. AWAKE LIPOSUCTION can be very
                    safely performed totally under local anaesthesia by the best
                    and safest technique called Tumescent Technique.
                  </p>
                )
              },
              {
                tabName: "Breast Surgeries",
                tabIcon: pic1,
                tabContent: (
                  <p className={classes.textCenter}>
                    As you prepare for Male breast reduction operation, the
                    doctors at VITAL Clinic wants the procedure to be as smooth
                    as possible. Experiencing unnecessary stress and anxiety is
                    normal but if you want the before and after of your Man
                    breast surgery to be pleasant, here are some important
                    things to know, do and avoid.BREAST LIFT is a cosmetic
                    surgery to lift sagging breasts. Breasts start sagging after
                    multiple child berths, repeated weight gain and weight loss
                    and advancing age. BREAST LIFT is a major surgery designed
                    to lift the breasts, tighten the skin and restore the shape
                    and looks to like before marriage. In fact it is a ‘total
                    reconstruction’ of a firm and lifted breast.
                  </p>
                )
              },
              {
                tabName: `Body Contouring`,
                tabIcon: pic3,
                tabContent: (
                  <p className={classes.textCenter}>
                    Morbid obesity developing due to unhealthy lifestyles can be
                    a very difficult problem to treat. Although trying to lose
                    weight by a controlled diet plan and regular exercise is
                    most desirable and recommended yet, it can be a very
                    daunting proposition for many. A large number of morbidly
                    obese patients are nowadays preferring to undergo the
                    surgeon {'"'}s knife for weight loss surgery, also known as
                    bariatric surgery.
                  </p>
                )
              }
            ]}
          />
        </GridContainer> */}
      </div>
    );
  }
}

export default withStyles(style)(PicSection);
