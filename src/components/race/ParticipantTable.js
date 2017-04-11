/**
 * Created by melalex on 4/11/17.
 */

import React, {PropTypes, Component} from 'react'
import {Table} from "reactstrap";
import {I18n} from 'react-redux-i18n'
import Participant from "./Participant";

export default class ParticipantTable extends Component {

    render() {
        let {participants, onGetByParticipant} = this.props;

        let rows = participants.map((e, i) => <Participant key={i} entity={e}
                                                           onGetByParticipant={onGetByParticipant}/>);

        return (
            rows.length === 0
                ?
                <h1 className="text-center no-result-text">{I18n.t('noResult')}</h1>
                :
                <Table hover>
                    <thead>
                    <tr>
                        <td>{I18n.t('numberPlace')}</td>
                        <td>{I18n.t('horse')}</td>
                        <td>{I18n.t('age')}</td>
                        <td>
                            WGT <br/>
                            OR
                        </td>
                        <td>
                            {I18n.t('jockey')}
                            {I18n.t('trainer')}
                        </td>
                        <td>TS</td>
                        <td>{I18n.t('odds')}</td>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </Table>

        )
    }
}

ParticipantTable.propTypes = {
    participants: PropTypes.array.isRequired,
    onGetByParticipant: PropTypes.func.isRequired,
};