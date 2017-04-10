/**
 * Created by melalex on 4/11/17.
 */

import React, {PropTypes, Component} from 'react'
import {Button, Col, Container, Jumbotron, Label, Row} from "reactstrap"
import Notifications from '../components/Notifications'
import {AvField, AvForm, AvGroup} from "availity-reactstrap-validation"
import I18n from 'react-redux-i18n'

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
    }

    signUp(value) {
        if (value.password === value.confirmPassword) {
            this.props.signIn({
                firstName: value.firstName,
                lastName: value.lastName,
                login: value.login,
                password: value.password,
                email: value.email,
            })
        } else {
            this.props.addError(I18n.t('confirmPasswordError'));
        }
    }

    render() {
        let {errors} = this.props;
        return (
            <Container>
                <Row>
                    <Col sm={{size: 6, push: 2, pull: 2, offset: 1}}>
                        <Jumbotron>
                            <h3 className="text-center small-margin-top">{I18n.t('register')}</h3>
                            <Notifications errors={errors}/>
                            <AvForm onValidSubmit={this.signIn}>
                                <AvGroup>
                                    <Label for="firstName">{I18n.t('firstName')}</Label>
                                    <AvField name="firstName" required minLength="4" maxLength="45"/>
                                </AvGroup>

                                <AvGroup>
                                    <Label for="lastName">{I18n.t('lastName')}</Label>
                                    <AvField name="lastName" required minLength="4" maxLength="45"/>
                                </AvGroup>

                                <AvGroup>
                                    <Label for="login">{I18n.t('login')}</Label>
                                    <AvField name="login" required minLength="4" maxLength="45"/>
                                </AvGroup>

                                <AvGroup>
                                    <Label for="email">{I18n.t('email')}</Label>
                                    <AvField type="email" name="email" required minLength="4" maxLength="45"/>
                                </AvGroup>

                                <AvGroup>
                                    <Label for="password">{I18n.t('password')}</Label>
                                    <AvField type="password" name="password" required minLength="4" maxLength="45"/>
                                </AvGroup>

                                <AvGroup>
                                    <Label for="confirmPassword">{I18n.t('confirmPassword')}</Label>
                                    <AvField type="password" name="confirmPassword" required minLength="4"
                                             maxLength="45"/>
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

Register.PropTypes = {
    signUp: PropTypes.func.isRequired,
    addError: PropTypes.func.isRequired,
    errors: PropTypes.array.isRequired,
};