/* eslint-disable react/prop-types */
import React, { Component } from "react";
import Gallery from "react-grid-gallery";
import Button from "components/CustomButtons/Button.jsx";

//Gyno images
import gyno1 from "assets/img/GalleryImages/Gynaecomastia/image (1).jpg";
import gyno2 from "assets/img/GalleryImages/Gynaecomastia/image (2).jpg";
import gyno3 from "assets/img/GalleryImages/Gynaecomastia/image (3).jpg";
import gyno4 from "assets/img/GalleryImages/Gynaecomastia/image (4).jpg";
import gyno5 from "assets/img/GalleryImages/Gynaecomastia/image (5).jpg";
import gyno6 from "assets/img/GalleryImages/Gynaecomastia/image (6).jpg";
import gyno7 from "assets/img/GalleryImages/Gynaecomastia/image (7).jpg";
import gyno8 from "assets/img/GalleryImages/Gynaecomastia/image (8).jpg";
// import gyno9 from "assets/img/GalleryImages/Gynaecomastia/image (9).jpg";
import gyno10 from "assets/img/GalleryImages/Gynaecomastia/image (10).jpg";
import gyno11 from "assets/img/GalleryImages/Gynaecomastia/image (11).jpg";
import gyno12 from "assets/img/GalleryImages/Gynaecomastia/image (12).jpg";
import gyno13 from "assets/img/GalleryImages/Gynaecomastia/image (13).jpg";
import gyno14 from "assets/img/GalleryImages/Gynaecomastia/image (14).jpg";
import gyno15 from "assets/img/GalleryImages/Gynaecomastia/image (15).jpg";

//Liposuction images
import lipo1 from "assets/img/GalleryImages/Liposuction/lipo (1).jpg";
import lipo2 from "assets/img/GalleryImages/Liposuction/lipo (2).jpg";
import lipo3 from "assets/img/GalleryImages/Liposuction/lipo (3).jpg";
import lipo4 from "assets/img/GalleryImages/Liposuction/lipo (4).jpg";
import lipo5 from "assets/img/GalleryImages/Liposuction/lipo (5).jpg";
import lipo6 from "assets/img/GalleryImages/Liposuction/lipo (6).jpg";
import lipo7 from "assets/img/GalleryImages/Liposuction/lipo (7).jpg";
import lipo8 from "assets/img/GalleryImages/Liposuction/lipo (8).jpg";
import lipo9 from "assets/img/GalleryImages/Liposuction/lipo (9).jpg";
import lipo10 from "assets/img/GalleryImages/Liposuction/lipo (10).jpg";
import lipo11 from "assets/img/GalleryImages/Liposuction/lipo (11).jpg";
import lipo12 from "assets/img/GalleryImages/Liposuction/lipo (12).jpg";
import lipo13 from "assets/img/GalleryImages/Liposuction/lipo (13).jpg";

//Breast Surgery images
import breast1 from "assets/img/GalleryImages/BreastSurgeries/breast1.jpg";
import breast2 from "assets/img/GalleryImages/BreastSurgeries/breast2.jpg";
import breast3 from "assets/img/GalleryImages/BreastSurgeries/breast3.jpg";
import breast4 from "assets/img/GalleryImages/BreastSurgeries/breast4.jpg";
import breast5 from "assets/img/GalleryImages/BreastSurgeries/breast5.jpg";
import breast6 from "assets/img/GalleryImages/BreastSurgeries/breast6.jpg";
import breast7 from "assets/img/GalleryImages/BreastSurgeries/breast7.jpg";
import breast8 from "assets/img/GalleryImages/BreastSurgeries/breast8.jpg";
import breast9 from "assets/img/GalleryImages/BreastSurgeries/breast9.jpg";

//Root Activ images
import rootActiv1 from "assets/img/GalleryImages/RootActiv/rootActiv1.jpg";
import rootActiv2 from "assets/img/GalleryImages/RootActiv/rootActiv2.jpg";
import rootActiv3 from "assets/img/GalleryImages/RootActiv/rootActiv3.jpg";
// import rootActiv4 from "assets/img/GalleryImages/RootActiv/rootActiv4.jpg";
// import rootActiv5 from "assets/img/GalleryImages/RootActiv/rootActiv5.jpg";
// import rootActiv6 from "assets/img/GalleryImages/RootActiv/rootActiv6.jpg";

class LightBox extends Component {
  gynoImages = [
    {
      src: gyno1,
      thumbnail: gyno1,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [
        { value: "Gyno", title: "Gyno" },
        { value: "Gynecosmastia", title: "Gynecosmastia" }
      ],
      // isSelected: true,
      caption: "Gynecomastia / Male Breasts / Gyno"
      // isSelected: true,
      // caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
      src: gyno2,
      thumbnail: gyno2,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [
        { value: "Gyno", title: "Gyno" },
        { value: "Gynecosmastia", title: "Gynecosmastia" }
      ],
      // isSelected: true,
      caption: "Gynecomastia / Male Breasts / Gyno"
      // tags: [
      //   { value: "Ocean", title: "Ocean" },
      //   { value: "People", title: "People" }
      // ],
      // caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: gyno3,
      thumbnail: gyno3,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [
        { value: "Gyno", title: "Gyno" },
        { value: "Gynecosmastia", title: "Gynecosmastia" }
      ],
      // isSelected: true,
      caption: "Gynecomastia / Male Breasts / Gyno"
    },
    {
      src: gyno4,
      thumbnail: gyno4,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [
        { value: "Gyno", title: "Gyno" },
        { value: "Gynecosmastia", title: "Gynecosmastia" }
      ],
      // isSelected: true,
      caption: "Gynecomastia / Male Breasts / Gyno"
      // isSelected: true,
      // caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
      src: gyno5,
      thumbnail: gyno5,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [
        { value: "Gyno", title: "Gyno" },
        { value: "Gynecosmastia", title: "Gynecosmastia" }
      ],
      // isSelected: true,
      caption: "Gynecomastia / Male Breasts / Gyno"
      // isSelected: true,
      // caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
      src: gyno6,
      thumbnail: gyno6,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [
        { value: "Gyno", title: "Gyno" },
        { value: "Gynecosmastia", title: "Gynecosmastia" }
      ],
      // isSelected: true,
      caption: "Gynecomastia / Male Breasts / Gyno"
      // tags: [
      //   { value: "Ocean", title: "Ocean" },
      //   { value: "People", title: "People" }
      // ],
      // caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: gyno7,
      thumbnail: gyno7,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [
        { value: "Gyno", title: "Gyno" },
        { value: "Gynecosmastia", title: "Gynecosmastia" }
      ],
      // isSelected: true,
      caption: "Gynecomastia / Male Breasts / Gyno"
    },
    {
      src: gyno8,
      thumbnail: gyno8,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [
        { value: "Gyno", title: "Gyno" },
        { value: "Gynecosmastia", title: "Gynecosmastia" }
      ],
      // isSelected: true,
      caption: "Gynecomastia / Male Breasts / Gyno"
      // isSelected: true,
      // caption: "After Rain (Jeshu John - designerspics.com)"
    },
    // {
    //   src: gyno9,
    //   thumbnail: gyno9,
    //   thumbnailWidth: 320,
    //   thumbnailHeight: 212,
    //   // isSelected: true,
    //   // caption: "After Rain (Jeshu John - designerspics.com)"
    // },
    {
      src: gyno10,
      thumbnail: gyno10,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [
        { value: "Gyno", title: "Gyno" },
        { value: "Gynecosmastia", title: "Gynecosmastia" }
      ],
      // isSelected: true,
      caption: "Gynecomastia / Male Breasts / Gyno"
      // tags: [
      //   { value: "Ocean", title: "Ocean" },
      //   { value: "People", title: "People" }
      // ],
      // caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: gyno11,
      thumbnail: gyno11,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [
        { value: "Gyno", title: "Gyno" },
        { value: "Gynecosmastia", title: "Gynecosmastia" }
      ],
      // isSelected: true,
      caption: "Gynecomastia / Male Breasts / Gyno"
    },
    {
      src: gyno12,
      thumbnail: gyno12,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [
        { value: "Gyno", title: "Gyno" },
        { value: "Gynecosmastia", title: "Gynecosmastia" }
      ],
      // isSelected: true,
      caption: "Gynecomastia / Male Breasts / Gyno"
      // isSelected: true,
      // caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
      src: gyno13,
      thumbnail: gyno13,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [
        { value: "Gyno", title: "Gyno" },
        { value: "Gynecosmastia", title: "Gynecosmastia" }
      ],
      // isSelected: true,
      caption: "Gynecomastia / Male Breasts / Gyno"
      // isSelected: true,
      // caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
      src: gyno14,
      thumbnail: gyno14,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [
        { value: "Gyno", title: "Gyno" },
        { value: "Gynecosmastia", title: "Gynecosmastia" }
      ],
      // isSelected: true,
      caption: "Gynecomastia / Male Breasts / Gyno"
      // isSelected: true,
      // caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
      src: gyno15,
      thumbnail: gyno15,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [
        { value: "Gyno", title: "Gyno" },
        { value: "Gynecosmastia", title: "Gynecosmastia" }
      ],
      // isSelected: true,
      caption: "Gynecomastia / Male Breasts / Gyno"
      // isSelected: true,
      // caption: "After Rain (Jeshu John - designerspics.com)"
    }
  ];

  lipoImages = [
    {
      src: lipo1,
      thumbnail: lipo1,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [{ value: "Abdomen Liposuction", title: "Abdomen Liposuction" }],
      // isSelected: true,
      caption: "Abdomen Liposuction"
      // isSelected: true,
      // caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
      src: lipo2,
      thumbnail: lipo2,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [{ value: "Abdomen Liposuction", title: "Abdomen Liposuction" }],
      // isSelected: true,
      caption: "Abdomen Liposuction"
      // tags: [
      //   { value: "Ocean", title: "Ocean" },
      //   { value: "People", title: "People" }
      // ],
      // caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: lipo3,
      thumbnail: lipo3,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [{ value: "Abdomen Liposuction", title: "Abdomen Liposuction" }],
      // isSelected: true,
      caption: "Abdomen Liposuction"
    },
    {
      src: lipo4,
      thumbnail: lipo4,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [{ value: "Abdomen Liposuction", title: "Abdomen Liposuction" }],
      // isSelected: true,
      caption: "Abdomen Liposuction"
      // isSelected: true,
      // caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
      src: lipo5,
      thumbnail: lipo5,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [{ value: "Abdomen Liposuction", title: "Abdomen Liposuction" }],
      // isSelected: true,
      caption: "Abdomen Liposuction"
      // isSelected: true,
      // caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
      src: lipo6,
      thumbnail: lipo6,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [{ value: "Abdominoplasty", title: "Abdominoplasty" }],
      // isSelected: true,
      caption: "Abdominoplasty"
      // tags: [
      //   { value: "Ocean", title: "Ocean" },
      //   { value: "People", title: "People" }
      // ],
      // caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: lipo7,
      thumbnail: lipo7,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [{ value: "Abdominoplasty", title: "Abdominoplasty" }],
      // isSelected: true,
      caption: "Abdominoplasty"
    },
    {
      src: lipo8,
      thumbnail: lipo8,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [{ value: "Abdomen Liposuction", title: "Abdomen Liposuction" }],
      // isSelected: true,
      caption: "Abdomen Liposuction"
      // isSelected: true,
      // caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
      src: lipo9,
      thumbnail: lipo9,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [{ value: "Abdomen Liposuction", title: "Abdomen Liposuction" }],
      // isSelected: true,
      caption: "Abdomen Liposuction"
      // isSelected: true,
      // caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
      src: lipo10,
      thumbnail: lipo10,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [{ value: "Abdomen Liposuction", title: "Abdomen Liposuction" }],
      // isSelected: true,
      caption: "Abdomen Liposuction"
      // tags: [
      //   { value: "Ocean", title: "Ocean" },
      //   { value: "People", title: "People" }
      // ],
      // caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: lipo11,
      thumbnail: lipo11,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [{ value: "Abdomen Liposuction", title: "Abdomen Liposuction" }],
      // isSelected: true,
      caption: "Abdomen Liposuction"
    },
    {
      src: lipo12,
      thumbnail: lipo12,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [{ value: "Abdomen Liposuction", title: "Abdomen Liposuction" }],
      // isSelected: true,
      caption: "Abdomen Liposuction"
      // isSelected: true,
      // caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
      src: lipo13,
      thumbnail: lipo13,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [{ value: "Abdomen Liposuction", title: "Abdomen Liposuction" }],
      // isSelected: true,
      caption: "Abdomen Liposuction"
      // isSelected: true,
      // caption: "After Rain (Jeshu John - designerspics.com)"
    }
  ];

  breastImages = [
    {
      src: breast5,
      thumbnail: breast5,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [{ value: "Breast Augmentation", title: "Breast Augmentation" }],
      // isSelected: true,
      caption: "Breast Augmentation"
      // tags: [
      // { value: "Ocean", title: "Ocean" },
      // { value: "People", title: "People" }
      // ],
      // caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: breast6,
      thumbnail: breast6,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [{ value: "Breast Augmentation", title: "Breast Augmentation" }],
      // isSelected: true,
      caption: "Breast Augmentation"
      // isSelected: true,
      // caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
      src: breast7,
      thumbnail: breast7,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [{ value: "Breast Augmentation", title: "Breast Augmentation" }],
      // isSelected: true,
      caption: "Breast Augmentation"
    },
    {
      src: breast9,
      thumbnail: breast9,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [{ value: "Breast Augmentation", title: "Breast Augmentation" }],
      // isSelected: true,
      caption: "Breast Augmentation"
      // isSelected: true,
      // caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
      src: breast2,
      thumbnail: breast2,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [{ value: "Breast Lift", title: "Breast Lift" }],
      // isSelected: true,
      caption: "Breast Lift"
    },
    {
      src: breast3,
      thumbnail: breast3,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [{ value: "Breast Lift", title: "Breast Lift" }],
      // isSelected: true,
      caption: "Breast Lift"
      // isSelected: true
      // caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
      src: breast8,
      thumbnail: breast8,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [{ value: "Breast Lift", title: "Breast Lift" }],
      // isSelected: true,
      caption: "Breast Lift"
      // isSelected: true,
      // caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
      src: breast4,
      thumbnail: breast4,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      // isSelected: true,
      // caption: "After Rain (Jeshu John - designerspics.com)"
      tags: [
        {
          value: "Breast reduction by Liposuction",
          title: "Breast reduction by Liposuction"
        }
      ],
      // isSelected: true,
      caption: "Breast reduction by Liposuction"
    },
    {
      src: breast1,
      thumbnail: breast1,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [{ value: "Breast reduction", title: "Breast reduction" }],
      // isSelected: true,
      caption: "Breast reduction"
    }
  ];

  rootActivImages = [
    {
      src: rootActiv1,
      thumbnail: rootActiv1,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [{ value: "Root Activ", title: "Root Activ" }]
      // isSelected: true,
      // caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
      src: rootActiv2,
      thumbnail: rootActiv2,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [{ value: "Root Activ", title: "Root Activ" }]
    },
    {
      src: rootActiv3,
      thumbnail: rootActiv3,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [{ value: "Root Activ", title: "Root Activ" }]
      // isSelected: true,
      // caption: "After Rain (Jeshu John - designerspics.com)"
    }
  ];

  handleClick = ind => {
    this.setState({
      IMAGES: ind
    });
  };

  constructor() {
    super();
    this.state = {
      IMAGES: this.gynoImages
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.galbutonwrapper}>
          <Button
            className={classes.butstyle}
            round
            onClick={() => this.handleClick(this.gynoImages)}
          >
            Gynecomastia (Male Breasts)
          </Button>
          <Button
            className={classes.butstyle}
            round
            onClick={() => this.handleClick(this.lipoImages)}
          >
            Liposuction
          </Button>
          <Button
            className={classes.butstyle}
            round
            onClick={() => this.handleClick(this.rootActivImages)}
          >
            RootActiv
          </Button>
          <Button
            className={classes.butstyle}
            round
            onClick={() => this.handleClick(this.breastImages)}
          >
            Breast surgeries
          </Button>
        </div>
        <Gallery
          images={this.state.IMAGES}
          backdropClosesModal={true}
          showLightboxThumbnails={true}
        />
      </div>
    );
  }
}

export default LightBox;
