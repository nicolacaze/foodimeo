import React, { Component } from 'react';
import './App.scss';
import pasta from './img/pasta.png';
import soup from './img/soup.png';
require('dotenv').config();


class App extends Component {

  constructor() {
    super();
    this.state = {
      searchInput: '',
      video: {},
    };
  }

  getData(query) {
    return fetch(`https://api.spoonacular.com/food/videos/search?apiKey=${process.env.REACT_APP_DEV_API_KEY}&query=${query}&number=1`)
    .then(data => data.json())
    .catch(err => console.log(err));
  }

  updateInput = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  }

  searchRecipe = () => {
    this.getData(this.state.searchInput)
    .then(({ videos }) => this.setState({ video: videos[0] }))
    .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getData()
    .then(({ videos }) => this.setState({ video: videos[0] }))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        {/* <div className="controls">
          <input value={this.state.searchInput} onChange={this.updateInput}/>
          <button onClick={this.searchRecipe}>Search</button>
        </div>
        <iframe title="video-player" width="560" height="315"
        src={this.state.video && 'https://www.youtube.com/embed/'+ this.state.video.youTubeId} frameBorder="0" allowFullScreen>
        </iframe> */}
        <div className="main">
          <div className="container left">
            <img src={pasta} alt="pasta"/>
            <div className="ingredients-bg"></div>
            <h2>About the project</h2>
          </div>
          <div className="container right">
            <img src={soup} alt="soup" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
