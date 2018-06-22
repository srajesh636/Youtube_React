import React, { Component } from "react";
import "../css/video.css";
export default class Video extends Component {
  render() {
    let data = this.props.data.id || { main: "" };
    let details = this.props.data.snippet || { main: "" };
    console.log(details);
    let url =
      "https://www.youtube.com/embed/" +
      data.videoId +
      "?autoplay=1&cc_load_policy=1";

    return (
      <div className="main">
        <div className="video">
          <iframe width="792" height="395" src={url} />
        </div>

        <div className="details">{details.title}</div>

      
      </div>
    );
  }
}
