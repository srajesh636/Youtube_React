import React, { Component } from "react";
import "../css/search.css";
export default class Search extends Component {
  onChangeHandler = e => {
    this.props.setKeyword(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.onChangeHandler}
          placeholder="Enter here .."
        />
        <hr id="search_hr" />
      </div>
    );
  }
}
