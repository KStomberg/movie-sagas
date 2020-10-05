import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router'

const mapStateToProps = reduxState => ({
    reduxState,
});


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

            <div class="listItem">
                <h3>{this.props.title}</h3>
                <img width="200" height="300" key={this.props.key} id={this.props.id} src={this.props.image} onClick={this.idForDetailsPage}></img>
                <p>{this.props.description}</p>
            </div>
        )
    }
}



export default connect(mapStateToProps)(withRouter(MovieViewItem))