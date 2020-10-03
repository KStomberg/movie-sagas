import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieViewItem extends Component {

    idForDetailsPage = () => {
        console.log('clicked, id:', this.props.id);
        this.props.dispatch({
            type: 'FETCH_DETAIL',
            payload: this.props.id
        })
    
        this.props.history.push('/details')

    }

    render() {

        return(

            <div>
                <h3>{this.props.title}</h3>
                <img key={this.props.key} id={this.props.id} src={this.props.image} onClick={this.idForDetailsPage}></img>
                <p>{this.props.description}</p>
            </div>
        )
    }
}



export default connect()(MovieViewItem)