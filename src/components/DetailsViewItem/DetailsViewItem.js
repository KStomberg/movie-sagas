import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'

const mapStateToProps = reduxState => ({
    reduxState
});

class DetailsViewItem extends Component {

    render() {

        return(

            <div>
                <h2>Details:</h2>
                <h3>{this.props.title}</h3>
                <h3>{this.props.genre}</h3>
                <img src={this.props.poster}/>
                <p>{this.props.description}</p>



            </div>
        )
    }
}

export default connect(mapStateToProps)(withRouter(DetailsViewItem));