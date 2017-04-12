/**
 * Created by melalex on 4/11/17.
 */

import React from 'react'
import Credentials from "./Credentials";
import {action as toggleMenu} from 'redux-burger-menu';
import {Col, Navbar, NavbarBrand, NavbarToggler, Row} from "reactstrap";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {push} from 'react-router-redux';

class Header extends React.Component {

    render() {
        let {isOpen, toggleMenu, redirect} = this.props;
        return (
            <Navbar color="inverse" inverse>
                <Row>
                    <Col md={{size: 1}}>
                        <NavbarToggler onClick={() => toggleMenu({isOpen: !isOpen})}/>
                    </Col>
                    <Col>
                        <NavbarBrand href="#" onClick={() => redirect('/')}>Racing Bets</NavbarBrand>
                    </Col>
                    <Credentials/>
                </Row>
            </Navbar>
        )
    }
}

function mapStateToProps(state) {
    return {
        isOpen: state.burgerMenu.isOpen,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleMenu: bindActionCreators(toggleMenu, dispatch),
        redirect: bindActionCreators(push, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)