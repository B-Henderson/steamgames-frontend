import React, { Component } from 'react';


import './App.css';
import HeroBackground from './background.js';
import SteamInput from './components/searchBar.js';
import { GetGame } from './scripts/getGame.js';
import 'bulma';

let url;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      searching: false
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
    setTimeout(function() {
      this.setState({ searching: false })
    }.bind(this), 1200)


    if (isNaN(this.state.value)) {
      if (this.state.value.lastIndexOf('/') !== -1) {
        url = this.state.value.substring(this.state.value.lastIndexOf('/') + 1);
        GetGame(url, function(res, err) {
          console.log('is nan', res)
        })
      }
    }else {
      url = this.state.value;
      GetGame(url, function(res, err) {
        console.log('is a number', res)
      })
    }

    console.log(url);

  }
  render() {
    return (
      <div className="App">
      <HeroBackground/>
      <div className="content-container">
          { !this.state.searching ? <SteamInput handleSearch={this.handleSearch} val={this.state.value} handleInput={this.handleInput} /> : null}
      </div>
      
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
