import React from "react";
import Card from "components/Card/Card.jsx";
import Carousel from "react-slick";
// import slider1 from "assets/img/IntPatientImages/SliderImages/image1.jpg";
// import slider2 from "assets/img/IntPatientImages/SliderImages/image2.jpg";
// import slider3 from "assets/img/IntPatientImages/SliderImages/image3.jpg";
// import slider4 from "assets/img/IntPatientImages/SliderImages/image4.jpg";
// import slider5 from "assets/img/IntPatientImages/SliderImages/image5.jpg";
import slider1 from "assets/img/AboutUsImages/SliderImages/image (1).jpg";
import slider2 from "assets/img/AboutUsImages/SliderImages/image (2).jpg";
import slider3 from "assets/img/AboutUsImages/SliderImages/image (3).jpg";
import slider4 from "assets/img/AboutUsImages/SliderImages/image (4).jpg";
import slider5 from "assets/img/AboutUsImages/SliderImages/image (5).jpg";
import slider6 from "assets/img/AboutUsImages/SliderImages/image (6).jpg";
import slider7 from "assets/img/AboutUsImages/SliderImages/image (7).jpg";
import slider8 from "assets/img/AboutUsImages/SliderImages/image (8).jpg";
import slider9 from "assets/img/AboutUsImages/SliderImages/image (9).jpg";
import slider10 from "assets/img/AboutUsImages/SliderImages/image (10).jpg";
import slider11 from "assets/img/AboutUsImages/SliderImages/image (11).jpg";
import slider12 from "assets/img/AboutUsImages/SliderImages/image (12).jpg";
import slider13 from "assets/img/AboutUsImages/SliderImages/image (13).jpg";
import slider14 from "assets/img/AboutUsImages/SliderImages/image (14).jpg";
import slider15 from "assets/img/AboutUsImages/SliderImages/image (15).jpg";
import slider16 from "assets/img/AboutUsImages/SliderImages/image (16).jpg";
import slider17 from "assets/img/AboutUsImages/SliderImages/image (17).jpg";
import LocationOn from "@material-ui/icons/LocationOn";

const Slidersection = props => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div
      className={props.classes.carimage + " " + props.classes.brownborder}
      style={{ margin: "30px auto", width: "100%", height: "auto" }}
    >
      <Card style={{ margin: "0" }}>
        <Carousel {...settings}>
          <div>
            <img src={slider1} alt="First slide" className="slick-image" />
            <div className="slick-caption">
              <h4>
                <LocationOn className="slick-icons" />
                Dr JB Ratti with French Surgeon ILOUZ, inventor of Liposuction
              </h4>
            </div>
          </div>
          <div>
            <img src={slider2} alt="Second slide" className="slick-image" />
            <div className="slick-caption">
              <h4>
                <LocationOn className="slick-icons" />
                Dr Neeta Ratti and Dr JB Ratti with Dr Joe Niamtu, Facial
                Cosmetic Surgeon at Richmond Virginia USA
              </h4>
            </div>
          </div>
          <div>
            <img src={slider3} alt="Third slide" className="slick-image" />
            <div className="slick-caption">
              <h4>
                <LocationOn className="slick-icons" />
                Attending World Congress of AACS at Dubai 2007
              </h4>
            </div>
          </div>
          <div>
            <img src={slider4} alt="Third slide" className="slick-image" />
            <div className="slick-caption">
              <h4>
                <LocationOn className="slick-icons" />
                Dr JB Ratti presenting paper on Awake Gynecomastia Surgery
              </h4>
            </div>
          </div>
          <div>
            <img src={slider5} alt="Third slide" className="slick-image" />
            <div className="slick-caption">
              <h4>
                <LocationOn className="slick-icons" />
                Dr JB Ratti at the Conference
              </h4>
            </div>
          </div>
          <div>
            <img src={slider6} alt="Third slide" className="slick-image" />
            <div className="slick-caption">
              <h4>
                <LocationOn className="slick-icons" />
                25TH ANNIVERSARY MEET OF AMERICAN ACADEMY OF COSMETIC SURGERY
                2007 in Orlando
              </h4>
            </div>
          </div>
          <div>
            <img src={slider7} alt="Third slide" className="slick-image" />
            <div className="slick-caption">
              <h4>
                <LocationOn className="slick-icons" />
                Dr JB Ratti with Jeffrey Klein, inventor of Tumescent Technique
                of Liposuction
              </h4>
            </div>
          </div>
          <div>
            <img src={slider8} alt="Third slide" className="slick-image" />
            <div className="slick-caption">
              <h4>
                <LocationOn className="slick-icons" />
                Dr JB Ratti & Dr Neeta Ratti with doctor friends at the
                conference
              </h4>
            </div>
          </div>
          <div>
            <img src={slider9} alt="Third slide" className="slick-image" />
            <div className="slick-caption">
              <h4>
                <LocationOn className="slick-icons" />
                With the rock band at the conference
              </h4>
            </div>
          </div>
          <div>
            <img src={slider10} alt="Third slide" className="slick-image" />
            <div className="slick-caption">
              <h4>
                <LocationOn className="slick-icons" />
                30TH ANNUAL MEET OF AMERICAN ACADEMY OF COSMETIC SURGERY 2014 AT
                FORT LAUDERDALE FLORIDA USA
              </h4>
            </div>
          </div>
          <div>
            <img src={slider11} alt="Third slide" className="slick-image" />
            <div className="slick-caption">
              <h4>
                <LocationOn className="slick-icons" />
                Presenting papers at the conference
              </h4>
            </div>
          </div>
          <div>
            <img src={slider12} alt="Third slide" className="slick-image" />
            <div className="slick-caption">
              <h4>
                <LocationOn className="slick-icons" />
                Presenting papers at the conference
              </h4>
            </div>
          </div>
          <div>
            <img src={slider13} alt="Third slide" className="slick-image" />
            <div className="slick-caption">
              <h4>
                <LocationOn className="slick-icons" />
                Presenting papers at the conference
              </h4>
            </div>
          </div>
          <div>
            <img src={slider14} alt="Third slide" className="slick-image" />
            <div className="slick-caption">
              <h4>
                <LocationOn className="slick-icons" />
                Answering questions of audience
              </h4>
            </div>
          </div>
          <div>
            <img src={slider15} alt="Third slide" className="slick-image" />
            <div className="slick-caption">
              <h4>
                <LocationOn className="slick-icons" />
                Presenting paper on Breast Augmentation Awake Tumescent
                technique at the conference
              </h4>
            </div>
          </div>
          <div>
            <img src={slider16} alt="Third slide" className="slick-image" />
            <div className="slick-caption">
              <h4>
                <LocationOn className="slick-icons" />
                Dr JB Ratti with Dr Guillermo Blugerman from Argentina
              </h4>
            </div>
          </div>
          <div>
            <img src={slider17} alt="Third slide" className="slick-image" />
            <div className="slick-caption">
              <h4>
                <LocationOn className="slick-icons" />
                With then President of AACS Jane Petro
              </h4>
            </div>
          </div>
        </Carousel>
      </Card>
    </div>
  );
};

export default Slidersection;
