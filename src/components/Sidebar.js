/**
 * Created by melalex on 4/11/17.
 */

import BurgerMenu from './Menu'
import React, {PropTypes, Component} from 'react'
import {I18n} from 'react-redux-i18n'

export default class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.onStatusChange = this.onStatusChange.bind(this);
    }

    onStatusChange(e, status) {
        e.preventDefault();
        this.props.setRaceStatus(status);
    }

    render() {
        return (
            <BurgerMenu id="sidebar" className="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li>
                        <a onClick={e => this.onStatusChange('scheduled')}>{I18n.t('scheduled')}</a>
                    </li>
                    <li>
                        <a onClick={e => this.onStatusChange('finished')}>{I18n.t('finished')}</a>
                    </li>
                </ul>
            </BurgerMenu>
        )
    }
}

Sidebar.propTypes = {
    setRaceStatus: PropTypes.func.isRequired
};