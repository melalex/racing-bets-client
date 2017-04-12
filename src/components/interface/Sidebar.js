/**
 * Created by melalex on 4/11/17.
 */

import BurgerMenu from './Menu'
import React, {PropTypes, Component} from 'react'
import {I18n} from 'react-redux-i18n'
import {Link} from "react-router";
import {SCHEDULED, FINISHED} from "../../constants/Race"

export default class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.onStatusChange = this.onStatusChange.bind(this);
    }

    onStatusChange(e, status) {
        e.preventDefault();
        this.props.setRaceStatus(status);
        this.props.close();
    }

    render() {
        return (
            <BurgerMenu id="sidebar" className="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <a href="/">Racing Bets</a>
                    </li>

                    <li>
                        <a href="#" onClick={e => this.onStatusChange(e, SCHEDULED)}>{I18n.t('scheduled')}</a>
                    </li>
                    <li>
                        <a href="#" onClick={e => this.onStatusChange(e, FINISHED)}>{I18n.t('finished')}</a>
                    </li>

                    {
                        this.isAuthenticated ? (
                            <li>
                                <Link to="/bets">{I18n.t('bets')}</Link>
                            </li>
                        ) : null
                    }
                </ul>
            </BurgerMenu>
        )
    }
}

Sidebar.propTypes = {
    setRaceStatus: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
};