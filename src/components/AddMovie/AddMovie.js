import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'

class AddMovie extends Component {
    
    state = {
        newMovie: {
            title: '',
            poster: '',
            description: '',
            genre_id: '1'
        }
    }

    handleChangeFor = (event, propertyName) => {
        this.setState({
            newMovie: {
            ...this.state.newMovie,
            [propertyName]: event.target.value
            }
        })
    }

    addMovie = (event) => {
        event.preventDefault();
        console.log('current state:', this.state);
        this.props.dispatch({
            type: 'ADD_MOVIE',
            payload: this.state.newMovie
        })
    }

    toHome = () => {
        this.props.history.push('/')
    }

    render() {
        console.log('Updated state:', this.state);
        return(
            <div>
      <h1>ADD MOVIE</h1>
      <form onSubmit={this.addMovie}>
            <input placeholder="Movie Title" type="text"
            value={this.state.newMovie.title} onChange={(event) => this.handleChangeFor(event, 'title')}></input> <br/>
            <input placeholder="Movie Poster URL" type="text"
            value={this.state.newMovie.poster} onChange={(event) => this.handleChangeFor(event, 'poster')} ></input><br/>
            <textarea placeholder="Movie Description" type="text"
            value={this.state.newMovie.description} onChange={(event) => this.handleChangeFor(event, 'description')}></textarea><br/>
            
            <label htmlFor="Genre">Choose a Genre:</label>
            <select 
            name="Genre" id="Genre" type="text" value={this.state.newMovie.genre_id}
            onChange={(event) => this.handleChangeFor( event, 'genre_id')}>
                <option value="1">Adventure</option>
                <option value="2">Animated</option>
                <option value="3">Biographical</option>
                <option value="4">Comedy</option>
                <option value="5">Disaster</option>
                <option value="6">Drama</option>
                <option value="7">Epic</option>
                <option value="8">Fantasy</option>
                <option value="9">Musical</option>
                <option value="10">Romantic</option>
                <option value="11">Science Fiction</option>
                <option value="12">Space-Opera</option>
                <option value="13">Superhero</option>
            </select>
            <br/>
            <button onClick={this.toHome}>Cancel</button>
            {/* ^ should bring the user to the Home/List Page */}
            <button>Save</button>
            {/* ^ update the title and description in the database and bring the user to the Home/List Page (which now has the new movie) */}
            <br/>
        </form>
    </div>
        )
    }
}

export default connect()(withRouter(AddMovie))