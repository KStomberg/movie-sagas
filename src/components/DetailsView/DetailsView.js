import React, { Component } from 'react';
import { connect } from 'react-redux';
import DetailsViewItem from '../DetailsViewItem/DetailsViewItem';
const mapStateToProps = reduxState => ({
    reduxState,
});

class DetailsView extends Component {

    render() {

        return(

            <div>
                {/* <p>{JSON.stringify(this.props.reduxState.details)}</p> */}
                {/* Maps through the reduxstate and sends info to DetailsViewItem to display */}
                {this.props.reduxState.details.map((detail, i) => 
                <DetailsViewItem key={detail.id} id={detail.id} title={detail.title} 
                poster={detail.poster} description={detail.description} genre={detail.name}/> )}
            </div>
        )
    }
}

export default connect(mapStateToProps)(DetailsView);