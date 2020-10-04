import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovie extends Component {
    
    state = {
        newMovie: {
            title: '',
            image: '',
            description: '',
            genre_id: ''
        }
    }

    render() {

        return(
            <div>
      <h1>ADD MOVIE</h1>
        <input placeholder="Movie Title"></input> <br/>
        <input placeholder="Movie Poster URL"></input><br/>
        <textarea placeholder="Movie Description"></textarea><br/>
        
        <label htmlFor="Genre">Choose a Genre:</label>
        <select name="Genre" id="Genre">
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
        <button>Cancel</button>
        {/* ^ should bring the user to the Home/List Page */}
        <button>Save</button>
        {/* ^ update the title and description in the database and bring the user to the Home/List Page (which now has the new movie) */}
        <br/>
    </div>
        )
    }
}

export default connect()(AddMovie)