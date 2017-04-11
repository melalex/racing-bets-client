/**
 * Created by melalex on 4/10/17.
 */

import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {i18nReducer} from 'react-redux-i18n';
import {reducer as burgerMenu} from 'redux-burger-menu'
import app from './app'
import bet from './bet'
import client from './client'
import content from './content'

export default combineReducers({
    app,
    bet,
    client,
    content,
    burgerMenu,
    i18n: i18nReducer,
    routing: routerReducer
});