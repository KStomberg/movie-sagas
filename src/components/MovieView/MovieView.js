import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieViewItem from '../MovieViewItem/MovieViewItem';

//imports reduxState
const mapStateToProps = (reduxState) => ({
  reduxState,
});

class MovieView extends Component {
  //Run fetch movie onReady
  componentDidMount() {
    this.fetchMovie();
  }

  //Gets details of all movies
  fetchMovie = (event) => {
    this.props.dispatch({
      type: 'FETCH_MOVIE',
    });
  };

  render() {
    return (
      <div>
        <h1>Movies:</h1>
        {/* Maps through movies and sends them individualy to MovieViewItem */}
        {this.props.reduxState.movies.map((movie, i) => (
          <MovieViewItem
            key={movie.id}
            id={movie.id}
            image={movie.poster}
            description={movie.description}
            title={movie.title}
          />
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps)(MovieView);
