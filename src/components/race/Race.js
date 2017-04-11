/**
 * Created by melalex on 4/11/17.
 */

import React, {PropTypes, Component} from 'react'
import RaceInf from './RaceInf'
import ParticipantTable from './ParticipantTable'
import RaceHeader from './RaceHeader'

export default class Race extends Component {
    constructor(props) {
        super(props);

        this.searchByRacecourse = this.searchByRacecourse.bind(this);
    }

    searchByRacecourse(e, id) {
        e.preventDefault();
        this.props.onFilter({racecourse: id});
    }

    render() {
        let {entity, onGetByParticipant} = this.props;
        let {name, racecourse, start, participants} = entity;

        return (
            <div className="elem-margin">
                <RaceHeader racecourse={racecourse} name={name} start={start}/>
                <RaceInf entity={entity}/>
                <ParticipantTable participants={participants} onGetByParticipant={onGetByParticipant}/>
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
    onFilter: PropTypes.func.isRequired
};