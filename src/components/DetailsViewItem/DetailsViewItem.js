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
                <h3>{JSON.stringify(this.props)}</h3>
                <p>Test</p>
            </div>
        )
    }
}

export default connect(mapStateToProps)(withRouter(DetailsViewItem));