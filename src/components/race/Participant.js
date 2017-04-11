/**
 * Created by melalex on 4/11/17.
 */


import React, {PropTypes, Component} from 'react'
import {I18n} from 'react-redux-i18n'
import {calculateAge, fullName} from '../../util'

export default class Participant extends Component {

    constructor(props) {
        super(props);

        this.searchByHorse = this.searchByHorse.bind(this);
        this.searchByJockey = this.searchByJockey.bind(this);
        this.searchByTrainer = this.searchByTrainer.bind(this);
    }

    searchByHorse(e, id) {
        e.preventDefault();
        this.props.onGetByParticipant({horse: id});
    }

    searchByJockey(e, id) {
        e.preventDefault();
        this.props.onGetByParticipant({jockey: id});
    }

    searchByTrainer(e, id) {
        e.preventDefault();
        this.props.onGetByParticipant({trainer: id});
    }

    render() {
        let {number, place, horse, carriedWeight, officialRating, jockey, trainer, odds} = this.props.entity;
        return (
            <tr>
                <td>{number + ' (' + place ? place : I18n.t('na') + ')'}</td>
                <td><a onClick={e => this.searchByHorse(e, horse.id)}>{horse.name}</a></td>
                <td>{calculateAge(horse.birthday)}</td>
                <td>
                    {carriedWeight}<br/>
                    {officialRating}
                </td>
                <td>
                    <a onClick={e => this.searchByJockey(e, jockey.id)}>{fullName(jockey)}</a><br/>
                    <a onClick={e => this.searchByTrainer(e, trainer.id)}>{fullName(trainer)}</a>
                </td>
                <td>{odds}</td>
            </tr>
        );
    }
}

Participant.propTypes = {
    entity: PropTypes.shape({
        id: PropTypes.number,
        number: PropTypes.number,
        horse: PropTypes.object,
        carriedWeight: PropTypes.number,
        topSpeed: PropTypes.number,
        officialRating: PropTypes.number,
        odds: PropTypes.number,
        jockey: PropTypes.object,
        trainer: PropTypes.object,
        place: PropTypes.number,
    }).isRequired,
    onGetByParticipant: PropTypes.func.isRequired
};