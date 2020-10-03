import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieViewItem extends Component {

    render() {

        return(

            <div>
                <img key={this.props.id} src={this.props.image}></img>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
            </div>
        )
    }
}



export default connect()(MovieViewItem)