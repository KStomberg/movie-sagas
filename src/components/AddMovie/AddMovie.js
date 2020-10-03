import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovie extends Component {
    
    render() {

        return(
            <div>
      <h1>ADD MOVIE</h1>
        <input placeholder="Movie Title"></input> <br/>
        <input placeholder="Movie Poster URL"></input><br/>
        <textarea placeholder="Movie Description"></textarea><br/>
        
        <label htmlFor="Genre">Choose a Genre:</label>
        <select name="Genre" id="Genre">
            <option value="Adventure">Adventure</option>
            <option value="Animated">Animated</option>
            <option value="Biographical">Biographical</option>
            <option value="Comedy">Comedy</option>
            <option value="Disaster">Disaster</option>
            <option value="Drama">Drama</option>
            <option value="Epic">Epic</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Musical">Musical</option>
            <option value="Romantic">Romantic</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Space-Opera">Space-Opera</option>
            <option value="Superhero">Superhero</option>
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