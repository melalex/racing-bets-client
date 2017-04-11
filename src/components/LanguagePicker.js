/**
 * Created by melalex on 4/11/17.
 */

import React, {PropTypes, Component} from 'react'
import {Col, DropdownItem, DropdownMenu, DropdownToggle, NavDropdown} from "reactstrap";

export default class LanguagePicker extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        let {language, changeLanguage} = this.props;
        return (
            <Col md={{size: 1}}>
                <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                        {language}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={() => changeLanguage('en')}>EN</DropdownItem>
                        <DropdownItem onClick={() => changeLanguage('ru')}>RU</DropdownItem>
                    </DropdownMenu>
                </NavDropdown>
            </Col>
        )
    }
}

LanguagePicker.propTypes = {
    language: PropTypes.string,
    changeLanguage: PropTypes.func,
};