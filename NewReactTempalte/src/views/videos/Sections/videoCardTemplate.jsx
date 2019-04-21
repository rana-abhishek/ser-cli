/* eslint-disable react/prop-types */
import React from "react";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import YouTube from "react-youtube";

const opts = {
  height: "200px",
  width: "100%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0
  }
};

const VideoTemplate = props => {
  return (
    <Card
      plain
      blog
      style={{
        border: "4px solid rgb(221, 200, 129)"
      }}
    >
      <CardHeader image plain style={{ margin: "0", padding: "0" }}>
        <YouTube videoId={props.videoid} opts={opts} onReady={this._onReady} />
        {/* <div
                className={props.classes.coloredShadow}
                style={{
                  backgroundImage: "url(" + props.image + ")",
                  opacity: "1",
                  left:"0"
                }}
              /> */}
      </CardHeader>
      <CardBody
        plain
        style={{
          background: "rgb(94, 71, 44)",
          marginTop: "-10px",
          color: "rgb(221, 200, 129)"
        }}
      >
        {/* <Info>
          <h6
            className={props.classes.latofont}
            style={{ color: "rgb(221, 200, 129)" }}
          >
            {props.tag}
          </h6>
        </Info> */}
        <h4 className={props.classes.cardTitle}>
          <a href="#pablo" style={{ color: "rgb(221, 200, 129)" }}>
            {props.head}
          </a>
        </h4>
        <p
          className={props.classes.latofont}
          style={{ color: "rgb(221, 200, 129)", fontSize: "15px" }}
        >
          {props.content}
          {/* <a href="#pablo"> Read More </a> */}
        </p>
      </CardBody>
    </Card>
  );
};

export default VideoTemplate;
