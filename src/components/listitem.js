import React from "react";
import "../css/item.css";
import 'font-awesome/css/font-awesome.min.css';
class ListItem extends React.Component {
  render() {
    let data = this.props.data.id.snippet || { main: "" };

    let url = "https://www.youtube.com/embed/" + this.props.data.id.videoId;

    return (<div className="card" onClick={this.props.getindex} >
    <img src={image} className='card-image' />
    <div className="card-title">
      {snippet.title}


    </div>
    <div className="youtube-logo">  <i className="fa fa-youtube" aria-hidden="true"></i></div>

    </div>

    );
  }
}

export default ListItem;
