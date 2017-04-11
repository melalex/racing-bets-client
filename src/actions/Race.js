/**
 * Created by melalex on 4/10/17.
 */

import getContent from './getContent'

function setRaceStatus(status) {
    return dispatch => {
        dispatch({
            type: '',
            payload: status
        })


    }
}

function getRaces(params) {
    return getContent('/api/race', params)
}

export default {getRaces}