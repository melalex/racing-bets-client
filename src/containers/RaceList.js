/**
 * Created by melalex on 4/11/17.
 */

import React from 'react'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {signOut} from '../actions/Client'

class RaceList extends React.Component {

    render() {
        return (
            null
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.client.isAuthenticated,
        login: state.client.login,
        balance: state.bet.balance,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signOut: bindActionCreators(signOut, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RaceList)