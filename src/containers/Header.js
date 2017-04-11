/**
 * Created by melalex on 4/11/17.
 */

import React from 'react'
import Credentials from "./Credentials";
import {Col, Collapse, Navbar, NavbarBrand, NavbarToggler, Row} from "reactstrap";

export default class Header extends React.Component {

    render() {
        return (
            <Navbar color="inverse" inverse>
                <Row>
                    <Col md={{size: 1}}>
                        <NavbarToggler onClick={() => {}}/>
                    </Col>
                    <Col>
                        <NavbarBrand href="/">Racing Bets Admin</NavbarBrand>
                    </Col>
                    <Credentials/>
                </Row>
            </Navbar>
        )
    }
}