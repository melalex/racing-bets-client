/**
 * Created by melalex on 4/11/17.
 */


import React, {PropTypes, Component} from 'react'
import {I18n} from 'react-redux-i18n'

export default class Bet extends Component {


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
                    1: {participants[1] ? participants[1].horse.name : I18n.t('na')} <br/>
                    2: {participants[2] ? participants[2].horse.name : I18n.t('na')} <br/>
                    3: {participants[3] ? participants[3].horse.name : I18n.t('na')} <br/>
                    4: {participants[4] ? participants[4].horse.name : I18n.t('na')}
                </td>
            </tr>
        );
    }
}

Bet.propTypes = {
    entity: PropTypes.shape({
        id: PropTypes.number.isRequired,
        raceId: PropTypes.number.isRequired,
        user: PropTypes.object.isRequired,
        betSize: PropTypes.number.isRequired,
        betType: PropTypes.string.isRequired,
        betStatus: PropTypes.string.isRequired,
        participants: PropTypes.array.isRequired
    }).isRequired,
};