import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'

const mapStateToProps = reduxState => ({
    reduxState
});

class DetailsViewItem extends Component {

    //When Back to list button pressed, send home
    toHome = () => {
        this.props.history.push('/')
    }

    render() {

        return(

            <div>
                <h2>Details:</h2>
                <h3>{this.props.title}</h3>
                <h3>{this.props.genre}</h3>
                <img width="200" height="300" alt={this.props.title} src={this.props.poster}/>
                <p>{this.props.description}</p>
                <button onClick={this.toHome}>Back to list</button>


            </div>
        )
    }
}

export default connect(mapStateToProps)(withRouter(DetailsViewItem));