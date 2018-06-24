import React, { Component } from "react";
import ListItem from "./listitem";
import "../css/item.css";

export default class List extends Component {
  show = data => {
    this.props.vid(data);
    window.scrollBy(0,-1100);
  };

  render() {
    let data = this.props.data || { main: "" };

    let video = this.props.data.map((e, i) => {
      return (
        <ListItem
          data={e}
          getindex={() => {
            this.show(i);
          }}
        />
      );
    });
    return (
      <div>
        <h2 className='suggestions'>Suggestion</h2>
        <hr />
        <div className="list">{video}</div>
      </div>
    );
  }
}
