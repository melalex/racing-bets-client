/**
 * Created by melalex on 4/11/17.
 */

import React from 'react'
import {Button, Col, Container, Jumbotron, Label, Row} from "reactstrap"
import {AvField, AvForm, AvGroup} from "availity-reactstrap-validation"
import I18n from 'react-redux-i18n'
import {bindActionCreators} from "redux";
import {signIn} from "../actions/Client";
import {connect} from "react-redux";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
    }

    signIn(value) {
        this.props.signIn(value.login, value.password)
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col sm={{size: 6, push: 2, pull: 2, offset: 1}}>
                        <Jumbotron>
                            <h3 className="text-center small-margin-top">{I18n.t('auth')}</h3>
                            <AvForm onValidSubmit={this.signIn}>
                                <AvGroup>
                                    <Label for="login">{I18n.t('login')}</Label>
                                    <AvField name="login" required minLength="4" maxLength="45"/>
                                </AvGroup>
                                <AvGroup>
                                    <Label for="password">{I18n.t('password')}</Label>
                                    <AvField type="password" name="password" required minLength="4" maxLength="45"/>
                                </AvGroup>
                                <Button color="primary" size="lg" block>{I18n.t('submit')}</Button>
                            </AvForm>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps() {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        signIn: bindActionCreators(signIn, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)