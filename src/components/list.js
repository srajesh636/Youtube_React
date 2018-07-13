import React, { Component } from "react";
import ListItem from "./listitem";
import "../css/item.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class List extends Component {
  show = data => {
    this.props.currentVideo(data);
    window.scrollTo(0, 70);
  };
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }

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
      <div data-aos="zoom-in">
        <h2 className="suggestions">Suggestion</h2>
        <hr />
        <div className="list" >{video}</div>
      </div>
    );
  }
}
