/**
 * Created by melalex on 4/11/17.
 */

import React, {PropTypes, Component} from 'react'

export default class Race extends Component {


    render() {
        let {id, raceId, betSize, betType, betStatus, participants} = this.props.entity;
        return (
            <tr>
                <td>{id}</td>
                <td>{raceId}</td>
                <td>{betType}</td>
                <td>{betStatus}</td>
                <td>{betSize}</td>
                <td>
                    {'1: ' + participants[1].horse ? participants[1].horse.name : 'N/A'} <br/>
                    {'2: ' + participants[2].horse ? participants[2].horse.name : 'N/A'} <br/>
                    {'3: ' + participants[3].horse ? participants[3].horse.name : 'N/A'} <br/>
                    {'4: ' + participants[4].horse ? participants[4].horse.name : 'N/A'} <br/>
                </td>
            </tr>
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
};