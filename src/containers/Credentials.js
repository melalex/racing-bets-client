/**
 * Created by melalex on 4/11/17.
 */

import React from 'react'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {signUp, signIn, signOut} from '../actions/Client'

export default class Credentials extends React.Component {

    render() {
        let {isAuthenticated, login, balance, signUp, signIn, signOut} = this.props;
        return (
            isAuthenticated ? (
                null
            ) : (
                null
            )
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
        signUp: bindActionCreators(signUp, dispatch),
        signIn: bindActionCreators(signIn, dispatch),
        signOut: bindActionCreators(signOut, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Credentials)