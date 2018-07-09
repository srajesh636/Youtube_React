import React, { Component } from "react";
import List from "./components/list";
import Video from "./components/video";
import Search from "./components/search";
import YTSearch from "youtube-api-search";
import "./css/App.css";

const api_key = "Your api key";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      youtube_data: [],
      selectedVideo: []
    };
  }

  setKeyword = keyword => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?q=${keyword}&part=snippet&key=${API_KEY}&maxResults=17`
    )
      .then(result => result.json())
      .then(data =>
        this.setState({
          youtube_data: data.items,
          selectedVideo: data.items[0]
        })
      );
  };
  currentVideo = data => {
    this.setState({ selectedVideo: this.state.youtube_data[data] });
  };

  render() {
    return (
      <div className="App">
        <ul>
          <li>Videora</li>
        </ul>
        <Search setKeyword={this.setKeyword} />
        <br />
        <Video data={this.state.selectedVideo} />
        <br />
        <br />{" "}
        {this.state.selectedVideo == "" ? (
          <div />
        ) : (
          <div>
            {" "}
            <List
              data={this.state.youtube_data}
              currentVideo={this.currentVideo}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
