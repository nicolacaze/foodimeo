import React, { Component } from 'react';
import './App.scss';
import pasta from './img/pasta.png';
import soup from './img/soup.png';
import coffee from './img/coffee.png';
import mixedPlate from './img/mixed-plate.png';
require('dotenv').config();


class App extends Component {

  constructor() {
    super();
    this.state = {
      searchInput: '',
      video: {},
      images: {},
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
    // const { pasta, soup } = this.state.images;
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
            <div className="grid-4">
              <div className="ingredients-bg"></div>
              <div className="pancake-plate"></div>
              <div className="mixed-plate"></div>
              <div className=""></div>
              <div className="pasta-plate">
                <img src={pasta} alt={pasta.description} />
              </div>
            </div>
            
            <h2>About the project</h2>
           
          </div>
          <div className="container right">
            <img src={soup} alt={soup.description} />
            <div>
              <p>Pasta with feta</p>
              <p>20 min</p>
              <p>cooking time</p>
            </div>
            <h2>All around</h2>
            <img className="coffee" src={coffee} alt={coffee.description} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
