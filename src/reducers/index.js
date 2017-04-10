/**
 * Created by melalex on 4/10/17.
 */

import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import app from './app'
import client from './client'
import content from './content'

export default combineReducers({
    app,
    client,
    content,
    routing: routerReducer
});