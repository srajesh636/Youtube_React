import React from "react";
import "../css/item.css";
class ListItem extends React.Component {
  render() {
    let data = this.props.data.id.snippet || { main: "" };

    let url = "https://www.youtube.com/embed/" + this.props.data.id.videoId;

    return (
      <div className="item">
        <iframe width="300" height="250" src={url} />
        <div className="description">
          <button onClick={this.props.getindex} class="button">
            play
          </button>
        </div>
      </div>
    );
  }
}

export default ListItem;
