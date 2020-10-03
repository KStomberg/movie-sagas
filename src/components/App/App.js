import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieView from '../MovieView/MovieView'

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <MovieView />
        </Router>
      </div>
    );
  }
}

export default App;
