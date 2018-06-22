import React, { Component } from "react";
import List from "./components/list";
import Video from "./components/video";
import Search from "./components/search";
import YTSearch from "youtube-api-search";

import "./css/App.css";

const api_key = "AIzaSyBCBi6LtHdcK_2vnM5QA9N479kTX0Q0nQw";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      youtube_data: [],
      selected: []
    };
  }
  term = data => {
    YTSearch(
      {
        key: api_key,
        term: data
      },
      data => {
        this.setState({
          youtube_data: data,
          selected: data[0]
        });
      }
    );
  };

  video = data => {
    this.setState({
      selected: this.state.youtube_data[data]
    });
  };

  render() {
    return (
      <div className="App">
        <ul>
  <li>Videora</li>

</ul>

        <Search keyword={this.term} />
        <br />
        <Video data={this.state.selected} />
        <br />
        <br />
        {this.state.selected == "" ? (
          <div />
        ) : (
          <div>
            {" "}
          <List data={this.state.youtube_data} vid={this.video} />
            >
          </div>
        )}
      </div>
    );
  }
}

export default App;
