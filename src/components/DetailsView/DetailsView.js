import React, { Component } from 'react';
import { connect } from 'react-redux';
import DetailsViewItem from '../DetailsViewItem/DetailsViewItem';
const mapStateToProps = reduxState => ({
    reduxState,
});

class DetailsView extends Component {

    componentDidMount() {
        this.fetchDetails();
    }

    fetchDetails = (event) => {
        this.props.dispatch({
            type: 'FETCH_DETAILS'
        })
    }

    render() {

        return(

            <div>
                <p>{JSON.stringify(this.props.reduxState)}</p>
                {this.props.reduxState.details.map((detail, i) => 
                <DetailsViewItem key={detail.id} id={detail.id} title={detail.title} poster={detail.poster} description={detail.description} genre={detail.name}/> )}
            </div>
        )
    }
}

export default connect(mapStateToProps)(DetailsView);