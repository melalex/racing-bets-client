/**
 * Created by melalex on 4/11/17.
 */


import React, {PropTypes, Component} from 'react'
import {I18n} from 'react-redux-i18n'
import {Badge, Button, Col, FormGroup, Label, Row} from "reactstrap";
import {calcOdds, isUnique} from "../../util/index";
import {AvField, AvForm, AvGroup} from "availity-reactstrap-validation";

export default class TrifectaBet extends Component {
    constructor(props) {
        super(props);

        this.onOddsClicked = false;
        this.onSubmitClicked = false;

        this.onOdds = this.onOdds.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleForm = this.handleForm.bind(this);
        this.betFromForm = this.betFromForm.bind(this);
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
        if (this.onOddsClicked) {
            let bet = this.betFromForm(value);

            if (!isUnique([this.participant1, this.participant2, this.participant3])) {
                this.props.error(I18n.t('unique'));
            } else {
                this.props.getOdds(bet);
            }
        } else if (this.onSubmitClicked) {
            let bet = this.betFromForm(value);

            if (!isUnique([this.participant1, this.participant2, this.participant3])) {
                this.props.error(I18n.t('unique'));
            } else {
                this.props.makeBet(bet);
            }
        }

        this.onOddsClicked = false;
        this.onSubmitClicked = false;
    }

    betFromForm(form) {
        this.betSize = Number(form.betSize);
        this.participant1 = Number(form.participant1);
        this.participant2 = Number(form.participant2);
        this.participant3 = Number(form.participant3);

        return {
            raceId: this.props.race.id,
            user: this.props.id,
            betSize: this.betSize,
            betType: 'Trifecta',
            participants: {
                1: this.participant1,
                2: this.participant2,
                3: this.participant3,
            }
        }
    }

    render() {
        let {race, odds} = this.props;
        let {minBet, participants} = race;

        let options = participants.map(e => <option key={e.id} value={e.id}>{e.horse.name}</option>);

        let oddsFraction = calcOdds(odds);

        return (
            <Row className="big-margin-top big-margin-bot">
                <Col md={{size: 6}}>
                    <AvForm onValidSubmit={this.handleForm}>
                        <AvGroup row>
                            <Label for="participant1" sm={4}>{I18n.t('participant')} 1</Label>
                            <Col sm={8}>
                                <AvField type="select" name="participant1" value={this.participant1} required>
                                    <option>{}</option>
                                    {options}
                                </AvField>
                            </Col>
                        </AvGroup>

                        <AvGroup row>
                            <Label for="participant2" sm={4}>{I18n.t('participant')} 2</Label>
                            <Col sm={8}>
                                <AvField type="select" name="participant2" value={this.participant2} required>
                                    <option>{}</option>
                                    {options}
                                </AvField>
                            </Col>
                        </AvGroup>

                        <AvGroup row>
                            <Label for="participant3" sm={4}>{I18n.t('participant')} 3</Label>
                            <Col sm={8}>
                                <AvField type="select" name="participant3" value={this.participant3} required>
                                    <option>{}</option>
                                    {options}
                                </AvField>
                            </Col>
                        </AvGroup>

                        <AvGroup row>
                            <Label for="betSize" sm={4}>{I18n.t('betSize')}</Label>
                            <Col sm={8}>
                                <AvField type="number" name="betSize" min={minBet} value={this.betSize} required/>
                            </Col>
                        </AvGroup>

                        <FormGroup row>
                            <Label for="odds" sm={4}>{I18n.t('odds')}</Label>
                            <Col sm={8}>
                                {
                                    oddsFraction ? (
                                        <Label>
                                            <Badge name="odds" color="success">
                                                {oddsFraction[0]}/{oddsFraction[1]}
                                            </Badge>
                                        </Label>
                                    ) : null
                                }
                            </Col>
                        </FormGroup>

                        <FormGroup check row>
                            <Row>
                                <Col sm={{size: 4, offset: 4}}>
                                    <Button type="submit" onClick={this.onOdds}>{I18n.t('odds')}</Button>
                                </Col>
                                <Col sm={{size: 4}}>
                                    <Button onClick={this.onSubmit} type="submit" color="success"
                                            outline>{I18n.t('submit')}</Button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </AvForm>
                </Col>
                <Col md={{size: 6}}>
                    <h1>{I18n.t('desc')}</h1>
                    <p>{I18n.t('trifectaDesc')}</p>

                    <h1>{I18n.t('suggested')}</h1>
                    <p>{I18n.t('trifectaSuggested')}</p>
                </Col>
            </Row>
        );
    }
}

TrifectaBet.propTypes = {
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
    odds: PropTypes.object,
    error: PropTypes.func.isRequired
};