/**
 * Created by melalex on 4/10/17.
 */

import {CHANGE_STATUS} from '../constants/Race'
import getContent from './getContent'
import {push} from 'react-router-redux'

function setRaceStatus(status) {
    return dispatch => {
        dispatch({
            type: CHANGE_STATUS,
            payload: status
        });

        dispatch(push('/'));
    }
}

function getRaces(params) {
    return getContent('/api/race', params)
}

export {getRaces, setRaceStatus}