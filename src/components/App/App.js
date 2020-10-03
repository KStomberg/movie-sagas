import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieView from '../MovieView/MovieView'
import DetailsView from '../DetailsView/DetailsView'
import AddMovie from '../AddMovie/AddMovie'


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
        <Link to='/addMovie'>Add Movie</Link>
        <br></br>
        <Link to='/'>Home</Link>
          <Route  path='/' exact>
            <MovieView />
          </Route>
          <Route path='/details'>
            <DetailsView />
          </Route>
          <Route path='/addMovie' >
            <AddMovie />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
