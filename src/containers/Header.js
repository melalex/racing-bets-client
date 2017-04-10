/**
 * Created by melalex on 4/11/17.
 */

import React from 'react'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {signUp, signIn, signOut} from '../actions/Client'
import {changeLanguage} from '../actions/App'

class Header extends React.Component {



    render() {
        let {isAuthenticated, login, balance, language, signOut, changeLanguage} = this.props;
        return (
            <nav className="navbar navbar-dark bg-primary">
                <a className="navbar-brand" href="#">Navbar</a>
                <ul className="nav navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item pull-xs-right">
                        <a className="nav-link" href="#">Link on the Right</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.client.isAuthenticated,
        login: state.client.login,
        balance: state.bet.balance,
        language: state.app.language,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signUp: bindActionCreators(signUp, dispatch),
        signIn: bindActionCreators(signIn, dispatch),
        signOut: bindActionCreators(signOut, dispatch),
        changeLanguage: bindActionCreators(changeLanguage, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)