/**
 * Created by melalex on 4/11/17.
 */

import React from 'react'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {changeLanguage} from '../actions/App'
import Credentials from "./Credentials";
import LanguagePicker from "../components/LanguagePicker"
import {Collapse, Navbar, NavbarBrand} from "reactstrap";

class Header extends React.Component {

    render() {
        let {language, changeLanguage} = this.props;
        return (
            <Navbar color="faded" toggleable>
                <NavbarBrand href="/">Racing Bets Admin</NavbarBrand>
                <Collapse isOpen={false} navbar>
                    <LanguagePicker language={language} changeLanguage={changeLanguage}/>
                    <Credentials/>
                </Collapse>
            </Navbar>
        )
    }
}

function mapStateToProps(state) {
    return {
        language: state.app.language,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeLanguage: bindActionCreators(changeLanguage, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)