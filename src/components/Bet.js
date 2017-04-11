/**
 * Created by melalex on 4/11/17.
 */


import React, {PropTypes, Component} from 'react'

export default class HorseRow extends Component {


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

HorseRow.propTypes = {
    entity: PropTypes.shape({
        id: PropTypes.number.isRequired,
        raceId: PropTypes.number.isRequired,
        user: PropTypes.object.isRequired,
        betSize: PropTypes.number.isRequired,
        betType: PropTypes.string.isRequired,
        betStatus: PropTypes.string.isRequired,
        participants: PropTypes.object.isRequired
    }).isRequired,
};