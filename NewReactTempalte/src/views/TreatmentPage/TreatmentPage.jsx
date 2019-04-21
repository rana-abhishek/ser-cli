/* eslint-disable */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ScrollToTop from "react-scroll-up";
import Icon from "@material-ui/core/Icon";
// core components
import Header from "components/Header/Header.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import cardsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx";
import treatmentPageStyle from "assets/jss/material-kit-pro-react/views/treatmentPageStyle.jsx";
import ConatinerFile from "./Sections/containerFile";
import image1 from "assets/img/examples/cynthia-del-rio.jpg";
import image2 from "assets/img/examples/cynthia-del-rio.jpg";
import image3 from "assets/img/examples/cynthia-del-rio.jpg";


const dashboardRoutes = [];

class TreatmentPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    const style = {
      ...cardsStyle
    };
    const treatdata = {
      main:{
        head:"Liposuction",
        desc:"AWAKE LIPOSUCTION is a cosmetic surgery procedure for permanent body shaping where fat is removed from between skin and muscles from specific areas of the body. It is done by using hollow steel tubes called cannulas with the help of powerful vacuum suction. AWAKE LIPOSUCTION can be very safely performed totally under local anaesthesia by the best and safest technique called Tumescent Technique."
      },
      left:{
        firsthead:"Are there other techniques of liposuction?",
        firstdesc:"Yes there are other forms of liposuction techniques being practiced by Liposuction surgeons. These are basically modifications on the equipment used or on the amount of tumescent fluid infiltrated like ‘Wet’ and ‘Super-wet’ liposuction. Ultrasonic Liposuction employs ultrasonic energy to emulsify fat which is then removed by liposuction cannula. Because of the ultrasonic energy and the production of heat in this procedure, there is always a possibility of skin burns and fluid accumulation under the skin (seroma). These are commonly performed under general anaesthesia. Laser Liposuction is an untested and untried method. It also produces heat under the skin and has the potential for causing skin burns. So far there are no significant studies or reviews on the advantages, if any, by this method. Liposuction after ‘freezing’ the fat called ‘Cryo-liposuction’ is a very new development and is still an untested and untried method with no significant studies.",
        secondhead:"Which is the best technique of liposuction?",
        seconddesc:"AWAKE TUMESCENT Liposuction is the best and safest way of doing liposuction. A large volume of very dilute local anaesthetic solution is infiltrated painlessly into the fat layer under the skin. This fluid contains medicines which constrict the blood vessels. This results in virtually nil blood loss during liposuction by the tumescent technique. This technique eliminates the need for general anaesthesia or heavy sedation during or after liposuction. The painless state remains for several hours after surgery and thereafter there is minimal pain or discomfort.",
        galleryimages:[{src:image1,imagecaption:"Yellowstone National Park, United States"},{src:image2,imagecaption:"Yellowstone National Park, United States"},{src:image3,imagecaption:"Yellowstone National Park, United States"}],
        thirdhead:"What are the advantages of AWAKE TUMESCENT LIPOSUCTION over other techniques?",
        thirddesc:"There are several unmatched and unique benefits when liposuction is done by AWAKE TUMESCENT technique.",
        thirdlist:[
          {content:"It is done totally under local anaesthesia, thus eliminating the need for general/systemic anaesthesia. This removes the potential risks of general anaesthesia."},
          {content:"Person is awake and conversing thereby adding to the safety during surgery."},
          {content:"The procedure is virtually bloodless. The blood loss during surgery is negligible. High volume liposuctions can be routinely performed by tumescent technique."},
          {content:"There is no heat production in the fat layer or under the skin. Therefore there is no possibility of skin burns at all"},
          {content:"Fat embolism’, a serious life threatening situation, often reported from traditional liposuction, never happens in AWAKE TUMESCENT LIPOSUCTION"},
          {content:"After surgery pain is much less than any other form of liposuction."},
          {content:"Liposuction is performed like an OPD procedure. There is almost always no need for hospitalization."},
          {content:"AWAKE Tumescent liposuction has a very high safety profile which has been proven by national surveys conducted in USA by professional medical associations."},
        ],
        tabshead:"Is it possible to perform AWAKE LIPOSUCTION on any area of the body by tumescent technique?",
        tabsdesc:"Yes. AWAKE Liposuction by tumescent technique can be performed on any area of the body like, belly, hips, thighs, back, arms, face and neck.",
        tabsitems:[
          {title:'Tumescent AWAKE LIPOSUCTION',content:'It is performed totally under local anaesthesia, without intravenous sedation or general anaesthesia. Person is awake and conversing while liposuction is going on.'},
          {title:'Traditional form of liposuction',content:'It is performed under general anaesthesia or under deep intravenous anaesthesia. Patients may receive a limited amount of tumescent fluid infiltration.'}
        ],
        sixthhead:"Can major surgeries like Abdominoplasty (tummy-tuck), breast reduction in women, Body Contouring Surgery after massive weight loss etc be done under local anaesthesia by AWAKE method?",
        sixthdesc:"It is in fact the safest and best way to do Total Abdominoplasty, Brachioplasty (arms-lift), Thighs lift, Breast Reduction and Lift. There is no need to give general anaesthesia when even such major surgeries are done by the tumescent technique. Surgery can be painless and bloodless and in almost all cases, patient goes home immediately after operation. Advised rest can be taken in the comfort of one’s own home.",
        seventhhead:"Can SIX PACK ABS surgery be done under AWAKE TUMESCENT technique?",
        seventhdesc:"SIX PACK ABS in men or TWIN PACKS in women by HIGH DEFINITION LIPOSUCTION is a very advanced and precise form of liposuction surgery. It can be very safely performed totally under tumescent local anaesthesia by the AWAKE TUMESCENT technique and the patient may go home immediately after surgery.",
        cardshead:"Procedures",
        carditems:[
          {image:image1,head:'Neuralgia Treatment',content:'Treatment includes drug therapy, physiotherapy and/ or surgery, aimed to relieve pain....'},
          {image:image1,head:'Epilepsy Treatment',content:'Treatment includes drug therapy, physiotherapy and/ or surgery, aimed to relieve pain....'},
          {image:image1,head:'Epilepsy Treatment',content:'Treatment includes drug therapy, physiotherapy and/ or surgery, aimed to relieve pain....'},
          {image:image1,head:'Epilepsy Treatment',content:'Treatment includes drug therapy, physiotherapy and/ or surgery, aimed to relieve pain....'}
        ]
      },
      right:{
        firsthead:'About Liposuction',
        firstdesc:'AWAKE LIPOSUCTION is a cosmetic surgery procedure for permanent body shaping where fat is removed from between skin and muscles from specific areas of the body.',
        card:{
          head:'Pateints Say',
          content: 'There may be other factors for the surgeon to consider before deciding upon the charges like sagging of the breasts, previous incomplete or complicated surgeries and expected technical difficulties during surgery. Therefore surgeon must examine you first before quoting gynecomastia surgery cost to you.',
          image: image1,
          name: 'Deep',
          desi: "Patient"
        }
      }
    }
    
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
                color="transparent"
                routes={dashboardRoutes}
                brand="Vital Clinic"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}    
            />
        <Parallax
          image={require("assets/img/examples/city.jpg")}
          filter="dark"
          className={classes.parallax}
          style={{height: "480px"}}
        >
          <div className={classes.container} onClick={this.handleClick}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
                <h2 className={classes.title} style={{color:"#fff"}}>
                  Treatments
                </h2>
                <h3 className={classes.title} style={{color:"#fff"}}>
                  A place for you to see the Information<br/> about different Treatments
                </h3>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        
          <ConatinerFile classes={classes} data={treatdata}/>
          <ScrollToTop showUnder={160} style={{
              zIndex: "1000",
            "&:hover": {
              backgroundColor: "#000",
            }
          }}>
            <Icon className={classes.link}>arrow_upward</Icon>
          </ScrollToTop>
        
      </div>
    );
  }
}

export default withStyles(treatmentPageStyle)(TreatmentPage);
