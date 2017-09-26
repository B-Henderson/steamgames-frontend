import React, { Component } from 'react';


import './App.css';
import HeroBackground from './background.js';
import SteamInput from './components/searchBar.js';
import GameDisplay from './components/displayResults.js';
import { GetGame } from './scripts/getGame.js';
import 'bulma';

let url;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      searching: false,
      results: false,
      gameData: null
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleInput(e) {

    this.setState({ value: e.target.value });

    e.preventDefault();
  }
  handleSearch(e) {
    this.setState({ searching: true });
    // setTimeout(function() {
    //   this.setState({ searching: false })
    // }.bind(this), 1200)
      const regex = /\d{10,20}/g;
      url = this.state.value.match(regex);
    
        GetGame(url, function(res, err) {
            this.setState({ searching: false,
            results: true})
            console.log(res.data);
            this.setState({gameData: res.data});
        }.bind(this))

  }
  render() {
    return (
      <div className="App">

      <div className="content-container">
      
          { !this.state.searching && !this.state.results ? <SteamInput handleSearch={this.handleSearch} val={this.state.value} handleInput={this.handleInput} /> : null}
          { this.state.results && this.state.gameData ? <GameDisplay data={this.state.gameData}/> : null }
      </div>
            <HeroBackground/>
      </div>
    );
  }
}

export default App;


// <div className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h2>Welcome to React</h2>
// </div>
// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p>
