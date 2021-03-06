/**
 * Created by melalex on 4/11/17.
 */

import React, {PropTypes, Component} from 'react'
import RaceInf from './RaceInf'
import ParticipantTable from './ParticipantTable'
import RaceHeader from './RaceHeader'
import {Button} from "reactstrap";
import {I18n} from 'react-redux-i18n'

export default class Race extends Component {
    render() {
        let {entity, onGetByParticipant, onFilter, onBetting} = this.props;
        let {name, racecourse, start, participants, raceStatus} = entity;

        return (
            <div className="elem-margin race-view">
                <RaceHeader racecourse={racecourse} name={name} start={start} onFilter={onFilter}/>
                <RaceInf entity={entity}/>
                <ParticipantTable participants={participants} onGetByParticipant={onGetByParticipant}/>

                {
                    raceStatus === 'scheduled' ? (
                        <Button color="primary" onClick={() => onBetting(entity)} block>{I18n.t('makeBet')}</Button>
                    ) : null
                }

            </div>
        );
    }
}

Race.propTypes = {
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
    onGetByParticipant: PropTypes.func.isRequired,
    onFilter: PropTypes.func.isRequired,
    onBetting: PropTypes.func.isRequired
};