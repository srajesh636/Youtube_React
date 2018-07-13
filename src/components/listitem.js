import React from "react";
import "../css/item.css";
import "font-awesome/css/font-awesome.min.css";
class ListItem extends React.Component {
  render() {
    let data = this.props.data.id.snippet || undefined;
    let snippet = this.props.data.snippet;
    let image = snippet.thumbnails.medium.url;
    let baseURL = "https://www.youtube.com/embed/";

    let url = baseURL + this.props.data.id.videoId;

    return (
      <div className="card" onClick={this.props.getindex} data-aos='fade-up'>
        <img src={image} className="card-image" />
        <div className="card-title">{snippet.title}</div>
        <div className="youtube-logo">
          {" "}
          <i className="fa fa-youtube" aria-hidden="true" />
        </div>
      </div>
    );
  }
}

export default ListItem;
