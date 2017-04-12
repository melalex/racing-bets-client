/**
 * Created by melalex on 4/11/17.
 */

import React from 'react'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {signOut} from '../actions/Client'
import {Button, Col, Nav, NavItem, NavLink, Row,} from "reactstrap";
import {I18n} from 'react-redux-i18n'
import {push} from 'react-router-redux';
import LanguagePicker from "../components/interface/LanguagePicker";
import {changeLanguage} from "../actions/App";

class Credentials extends React.Component {

    render() {
        let {isAuthenticated, login, balance, signOut, language, changeLanguage, redirect} = this.props;
        return (
            isAuthenticated ? (
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Row>
                            <LanguagePicker language={language} changeLanguage={changeLanguage}/>
                            <Col md={{size: 2, offset: 2}}>
                                <NavItem>
                                    <NavLink disabled>{login}</NavLink>
                                </NavItem>
                            </Col>
                            <Col md={{size: 3}}>
                                <NavItem>
                                    <NavLink disabled>{I18n.t('balance')} {balance}</NavLink>
                                </NavItem>
                            </Col>
                            <Col md={{size: 2}}>
                                <Button outline color="danger" onClick={signOut}>
                                    {I18n.t('logout')}
                                </Button>
                            </Col>
                        </Row>
                    </NavItem>
                </Nav>
            ) : (

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Row>
                            <LanguagePicker language={language} changeLanguage={changeLanguage}/>
                            <Col md={{size: 2, offset: 2}}>
                                <Button outline color="primary" className="" onClick={() => redirect('/login')}>
                                    {I18n.t('auth')}
                                </Button>
                            </Col>
                            <Col md={{size: 2, offset: 1}}>
                                <Button outline color="success" onClick={() => redirect('/register')}>
                                    {I18n.t('register')}
                                </Button>
                            </Col>
                        </Row>
                    </NavItem>
                </Nav>
            )
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.client.isAuthenticated,
        login: state.client.login,
        balance: state.bet.balance,
        language: state.app.language
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signOut: bindActionCreators(signOut, dispatch),
        changeLanguage: bindActionCreators(changeLanguage, dispatch),
        redirect: bindActionCreators(push, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Credentials)