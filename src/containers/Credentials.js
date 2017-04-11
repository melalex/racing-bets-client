/**
 * Created by melalex on 4/11/17.
 */

import React from 'react'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {signOut} from '../actions/Client'
import {Button,} from "reactstrap";
import I18n from 'react-redux-i18n'

export default class Credentials extends React.Component {

    render() {
        let {isAuthenticated, login, balance, signOut} = this.props;
        return (
            isAuthenticated ? (
                <div>
                    <li className="nav-item pull-xs-right">
                        <p className="navbar-text">{login}</p>
                    </li>
                    <li className="nav-item pull-xs-right">
                        <p className="navbar-text">{'balance: ' + balance}</p>
                    </li>
                    <li className="nav-item pull-xs-right">
                        <Button outline color="danger" onClick={signOut}>
                            {I18n.t('logout')}
                        </Button>
                    </li>
                </div>

            ) : (
                <div>
                    <li className="nav-item pull-xs-right">
                        <Button outline color="primary" href="/login">
                            {I18n.t('auth')}
                        </Button>
                    </li>
                    <li className="nav-item pull-xs-right">
                        <Button outline color="success" href="/register">
                            {I18n.t('register')}
                        </Button>
                    </li>
                </div>
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
        signOut: bindActionCreators(signOut, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Credentials)