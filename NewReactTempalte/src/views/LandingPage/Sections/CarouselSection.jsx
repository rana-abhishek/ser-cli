import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// material-ui components
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";

import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";
import image4 from "assets/img/bg7.jpg";
import bg from "assets/img/otherhalfbg.jpg";

class CarouselSection extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <div style={{
        background: `URL('${bg}')`, 
        backgroundPosition: "center center",
        backgroundSize:"cover",
        height:"100%",
        paddingTop: "5%",
        }}>
          <GridContainer style={{
            textAlign:'center',
            display: "flex"
            }} justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h3 style={{
                fontFamily: "Oswald, sans-serif",
                color: "white",
                marginTop: "60px",
                fontWeight: "700"
              }}>WHAT PEOPLE SAY</h3>
            </GridItem>
            <GridItem xs={12} sm={10} md={8}  style={{
                  opacity: "0.8",
                  paddingBottom: "30px"
                }}>
              <Card>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={image1}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />Yellowstone
                        National Park, United States
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image2}
                      alt="Second slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />Somewhere Beyond,
                        United States
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image3}
                      alt="Third slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />Yellowstone
                        National Park, United States
                      </h4>
                    </div>
                  </div>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
      </div>
    );
  }
}

export default CarouselSection;