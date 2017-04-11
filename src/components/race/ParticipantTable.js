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
                    <thead className="thead-inverse">
                    <tr>
                        <th>{I18n.t('numberPlace')}</th>
                        <th>{I18n.t('horse')}</th>
                        <th>{I18n.t('age')}</th>
                        <th>
                            WGT <br/>
                            OR
                        </th>
                        <th>
                            {I18n.t('jockey')} <br/>
                            {I18n.t('trainer')}
                        </th>
                        <th>TS</th>
                        <th>{I18n.t('odds')}</th>
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