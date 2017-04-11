/**
 * Created by melalex on 4/11/17.
 */

import BurgerMenu from './Menu'
import React from 'react'
import {Link} from "react-router";
import {I18n} from 'react-redux-i18n'

export default class Sidebar extends React.Component {
    render() {
        return (
            <BurgerMenu id="sidebar" className="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li>
                        <a href="#">{I18n.t('scheduled')}</a>
                    </li>
                    <li>
                        <a href="#">{I18n.t('finished')}</a>
                    </li>
                </ul>
            </BurgerMenu>
        )
    }
}