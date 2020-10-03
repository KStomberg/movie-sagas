import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieViewItem from '../MovieViewItem/MovieViewItem'

const mapStateToProps = reduxState => ({
    reduxState,
  });

class MovieView extends Component {
    componentDidMount() {
        this.fetchMovie();
    }

    fetchMovie = (event) => {
        this.props.dispatch({
            type: 'FETCH_MOVIE'
        })
    }

    render() {

        return(
            <div>
                <h1>Movies:</h1>
                {this.props.reduxState.movies.map((movie, i) => 
                    <MovieViewItem key={movie.id} id={movie.id} image={movie.poster} description={movie.description} title={movie.title} /> )}
            </div>
        )
    }
}

export default connect(mapStateToProps)(MovieView)