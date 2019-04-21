/* eslint-disable react/prop-types */
import React from "react";

// Sections for this page
import Slider from "react-animated-slider";
// import 'react-animated-slider/build/horizontal.css';
import "normalize.css";
import "../assets/horizontal.css";
import "../assets/slider-animations.css";
import "../assets/styles.css";
import image1 from "assets/img/HomePageImages/LandSliderImages/image1.png";
import image2 from "assets/img/HomePageImages/LandSliderImages/image2.png";
import image3 from "assets/img/HomePageImages/LandSliderImages/image3.png";
import image4 from "assets/img/HomePageImages/LandSliderImages/image4.png";
import Parallax from "components/Parallax/Parallax.jsx";
import { Link } from "react-router-dom";

const content = [
  {
    title1: "Vital",
    title2: "Clinic",
    description:
      "VITAL CLINIC is a specialty clinic devoted to state-of-the-art cosmetic surgery",
    button: "Schedule an Appointment",
    image: image1
  },
  {
    title1: "Vital",
    title2: "Clinic",
    description:
      "VITAL CLINIC is a specialty clinic devoted to state-of-the-art cosmetic surgery",
    button: "Schedule an Appointment",
    image: image2
  },
  {
    title1: "Vital",
    title2: "Clinic",
    description:
      "VITAL CLINIC is a specialty clinic devoted to state-of-the-art cosmetic surgery",
    button: "Schedule an Appointment",
    image: image3
  },
  {
    title1: "Vital",
    title2: "Clinic",
    description:
      "VITAL CLINIC is a specialty clinic devoted to state-of-the-art cosmetic surgery",
    button: "Schedule an Appointment",
    image: image4
  }
];

class BannerSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      // <Parallax
      //   bgImage={docbg1}
      //   bgImageAlt="the cat"
      //   strength={500}
      //   style={{ zIndex: "200" }}
      //   bgImageStyle={{width: '100%', height: "190vh"}}
      // >
      <div>
        <Parallax
          filter
          className={classes.overlay}
          image={require("assets/img/bg16.jpg")}
        />
        <div style={{ marginTop: "-110vh" }}>
          <Slider
            autoplay={2500}
            autoPlay
            touchDisabled={true}
            infinite={true}
            className="slider-wrapper"
          >
            {content.map((item, index) => (
              <div
                key={index}
                className="slider-content"
                //   style={{ background: `url('${item.image}') no-repeat center center` }}
              >
                <div className="inner">
                  <div className={classes.mobcenter}>
                    {/* <div className="container">
                    <div className="title-container">
                      <h2 className={classes.compname}  className="title-text">{item.title}</h2>
                    </div>
                  </div>
                  <div class="container">

                    <div class="title-container">
                      <h2>Lorem ipsum</h2>
                    </div>

                  </div> */}
                    <div className="logo-container">
                      <div
                        className="title-container"
                        style={{ position: "relative", overflow: "hidden" }}
                      >
                        <h1
                          className={classes.compname}
                          style={{ position: "relative", display: "block" }}
                        >
                          {item.title1}
                        </h1>
                      </div>
                    </div>
                    <div className="logo-container">
                      <div
                        className="title-container secondcont"
                        style={{ position: "relative", overflow: "hidden" }}
                      >
                        <h1
                          className={classes.compname + " " + "second"}
                          style={{ position: "relative", display: "block" }}
                        >
                          {item.title2}
                        </h1>
                      </div>
                    </div>
                    <div
                      className="title-container"
                      style={{ position: "relative", overflow: "hidden" }}
                    >
                      <p>{item.description}</p>
                    </div>
                    <Link to="/contactus">
                      <button
                        style={{
                          height: "50px",
                          padding: " 0 40px",
                          cursor: "pointer"
                        }}
                      >
                        {item.button}
                      </button>
                    </Link>
                    <div className="hidepic">
                      <div style={{ position: "relative" }}>
                        <img
                          src={item.image}
                          style={{
                            position: "absolute",
                            top: "0",
                            right: "0",
                            transform: "translate(10vw, -70%)",
                            zIndex: "-20",
                            height: "125vh"
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default BannerSection;
