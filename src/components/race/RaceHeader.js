/**
 * Created by melalex on 4/11/17.
 */

import React, {PropTypes, Component} from 'react'
import {dateTimeFromTimestamp} from '../../util'

export default class RaceHeader extends Component {
    constructor(props) {
        super(props);

        this.searchByRacecourse = this.searchByRacecourse.bind(this);
    }

    searchByRacecourse(e, id) {
        e.preventDefault();
        this.props.onFilter({racecourse: id});
    }

    render() {
        let {racecourse, name, start} = this.props;

        return (
            <div>
                <h1>{dateTimeFromTimestamp(start) + ': ' + name + ' (' +
                <a onClick={e => this.searchByRacecourse(e, racecourse.id)}>racecourse.name</a> + ')'}
                </h1>
                <hr/>
            </div>
        );
    }
}

RaceHeader.propTypes = {
    racecourse: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        latitude: PropTypes.number,
        longitude: PropTypes.number,
        contact: PropTypes.string,
        clerk: PropTypes.string,
    }).isRequired,
    name: PropTypes.string.isRequired,
    start: PropTypes.number.isRequired,
};