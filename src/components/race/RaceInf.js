/**
 * Created by melalex on 4/11/17.
 */

import React, {PropTypes, Component} from 'react'
import {I18n} from 'react-redux-i18n'
import {Col, Row} from "reactstrap";

export default class RaceInf extends Component {
    constructor(props) {
        super(props);

        this.searchByRacecourse = this.searchByRacecourse.bind(this);
    }

    searchByRacecourse(e, id) {
        e.preventDefault();
        this.props.onFilter({racecourse: id});
    }

    render() {
        let {
            minBet,
            commission,
            raceType,
            minAge,
            minRating,
            maxRating,
            trackCondition,
            distance,
            prizes,
        } = this.props.entity;

        return (
            <Row>
                <Col md={{size : 3}}>
                    <dl className="row">
                        <dt className="col-sm-3">{I18n.t('minBet')}</dt>
                        <dd className="col-sm-9">{minBet}</dd>

                        <dt className="col-sm-3">{I18n.t('commission')}</dt>
                        <dd className="col-sm-9">{commission}</dd>

                        <dt className="col-sm-3">{I18n.t('raceType')}</dt>
                        <dd className="col-sm-9">{raceType}</dd>

                        <dt className="col-sm-3">{I18n.t('trackCondition')}</dt>
                        <dd className="col-sm-9">{trackCondition}</dd>
                    </dl>
                </Col>

                <Col md={{size : 3, offset: 1}}>
                    <dl className="row">
                        <dt className="col-sm-3">{I18n.t('minAge')}</dt>
                        <dd className="col-sm-9">{minAge}</dd>

                        <dt className="col-sm-3">{I18n.t('minRating')}</dt>
                        <dd className="col-sm-9">{minRating}</dd>

                        <dt className="col-sm-3">{I18n.t('maxRating')}</dt>
                        <dd className="col-sm-9">{maxRating}</dd>

                        <dt className="col-sm-3">{I18n.t('distance')}</dt>
                        <dd className="col-sm-9">{distance}</dd>
                    </dl>
                </Col>

                <Col md={{size : 3, offset: 1}}>
                    <dl className="row">
                        <dt className="col-sm-3">{1 + I18n.t('place') + ':'}</dt>
                        <dd className="col-sm-9">{prizes[1] ? prizes[1] : I18n.t('na')}</dd>

                        <dt className="col-sm-3">{2 + I18n.t('place') + ':'}</dt>
                        <dd className="col-sm-9">{prizes[2] ? prizes[2] : I18n.t('na')}</dd>

                        <dt className="col-sm-3">{3 + I18n.t('place') + ':'}</dt>
                        <dd className="col-sm-9">{prizes[3] ? prizes[3] : I18n.t('na')}</dd>

                        <dt className="col-sm-3">{4 + I18n.t('place') + ':'}</dt>
                        <dd className="col-sm-9">{prizes[4] ? prizes[4] : I18n.t('na')}</dd>
                    </dl>
                </Col>
            </Row>
        );
    }
}

RaceInf.propTypes = {
    entity: PropTypes.shape({
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
};