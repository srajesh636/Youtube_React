import React, { Component } from "react";
import "../css/search.css";
export default class Search extends Component {
  onChange = e => {
    this.props.keyword(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.onChange}
          placeholder="Enter here .."
        />
        <hr id="search_hr" />
      </div>
    );
  }
}
