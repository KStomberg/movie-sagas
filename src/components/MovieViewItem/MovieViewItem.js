import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieViewItem extends Component {

    detailsPage = () => {
        console.log('clicked', this.props.id);
    }

    render() {

        return(

            <div>
                <h3>{this.props.title}</h3>
                <img key={this.props.key} id={this.props.id} src={this.props.image} onClick={this.detailsPage}></img>
                <p>{this.props.description}</p>
            </div>
        )
    }
}



export default connect()(MovieViewItem)