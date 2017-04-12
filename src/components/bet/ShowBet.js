/**
 * Created by melalex on 4/11/17.
 */


import React, {PropTypes, Component} from 'react'
import {I18n} from 'react-redux-i18n'
import {Badge, Button, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {calcOdds} from "../../util/index";
import {AvField, AvForm, AvGroup} from "availity-reactstrap-validation";

export default class ShowBet extends Component {
    constructor(props) {
        super(props);

        this.onOddsClicked = false;
        this.onSubmitClicked = false;

        this.onOdds = this.onOdds.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleForm = this.handleForm.bind(this);
    }

    onOdds() {
        this.onOddsClicked = true;
        this.onSubmitClicked = false;
    }

    onSubmit() {
        this.onSubmitClicked = true;
        this.onOddsClicked = false;
    }

    handleForm(e, value) {
        console.log(value);

        if (this.onOddsClicked) {
            this.props.getOdds(ShowBet.betFormForm(value));
        } else if (this.onSubmitClicked) {
            this.props.makeBet(ShowBet.betFormForm(value));
        }

        this.onOddsClicked = false;
        this.onSubmitClicked = false;
    }

    static betFormForm(form) {

    }

    render() {
        let {race, odds} = this.props;
        let {minBet, participants} = race;

        let options = participants.map(e => <option key={e.id} value={e.id}>{e.horse.name}</option>);

        return (
            <Row className="big-margin-top big-margin-bot">
                <Col md={{size: 6}}>
                    <AvForm onValidSubmit={this.handleForm}>
                        <AvGroup row>
                            <Label for="participant" sm={2}>{I18n.t('participant')}</Label>
                            <Col sm={10}>
                                <AvField type="select" name="participant" required>
                                    <option>{}</option>
                                    {options}
                                </AvField>
                            </Col>
                        </AvGroup>

                        <AvGroup row>
                            <Label for="amount" sm={2}>{I18n.t('betSize')}</Label>
                            <Col sm={10}>
                                <AvField type="number" name="amount" min={minBet} required/>
                            </Col>
                        </AvGroup>

                        <FormGroup row>
                            <Label for="odds" sm={2}>{I18n.t('odds')}</Label>
                            <Col sm={10}>
                                <Badge name="odds" color="success">{calcOdds(odds)}</Badge>
                            </Col>
                        </FormGroup>

                        <FormGroup check row>
                            <Row>
                                <Col sm={{size: 2, offset: 2}}>
                                    <Button type="submit" onClick={this.onOdds}>{I18n.t('odds')}</Button>
                                </Col>
                                <Col sm={{size: 2}}>
                                    <Button onClick={this.onSubmit} type="submit" color="success"
                                            outline>{I18n.t('submit')}</Button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </AvForm>
                </Col>
                <Col md={{size: 6}}>
                    <h1>{I18n.t('desc')}</h1>
                    <p>{I18n.t('showDesc')}</p>

                    <h1>{I18n.t('suggested')}</h1>
                    <p>{I18n.t('showSuggested')}</p>
                </Col>
            </Row>
        );
    }
}

ShowBet.propTypes = {
    race: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        racecourse: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            latitude: PropTypes.number,
            longitude: PropTypes.number,
            contact: PropTypes.string,
            clerk: PropTypes.string,
        }),
        start: PropTypes.number,
        minBet: PropTypes.number,
        commission: PropTypes.number,
        trackCondition: PropTypes.string,
        raceType: PropTypes.string,
        raceStatus: PropTypes.string,
        minAge: PropTypes.number,
        minRating: PropTypes.number,
        maxRating: PropTypes.number,
        distance: PropTypes.number,
        participants: PropTypes.array,
        prizes: PropTypes.object
    }).isRequired,
    id: PropTypes.number.isRequired,
    getOdds: PropTypes.func.isRequired,
    makeBet: PropTypes.func.isRequired,
    odds: PropTypes.object
};