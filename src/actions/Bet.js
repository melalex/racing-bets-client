/**
 * Created by melalex on 4/10/17.
 */

import {ajax} from 'jquery'
import {push} from 'react-router-redux';
import {API_ROOT} from  '../constants/Api'
import {CONTENT_TYPE_BET} from  '../constants/Content'
import {refresh} from './Client'
import * as betConst from '../constants/Bet'
import * as appConst from '../constants/App'
import {bearerAuthHeader, getErrorsFromResponse} from '../util/index'
import getContent from './getContent'

function goToBettingPage(race) {
    return dispatch => {
        dispatch({
            type: betConst.SET_TARGET,
            payload: race
        });

        dispatch(push('/betting'))
    }
}

function clearOdds() {
    return {
        type: betConst.CLEAR_ODDS
    }
}

function makeBet(bet) {
    return refresh((dispatch, getState)=> {
        dispatch({
            type: betConst.MAKE_BET_REQUEST,
        });

        ajax({
            type: 'POST',
            url: API_ROOT + '/api/bet',
            crossDomain: true,
            dataType: 'json',
            data: JSON.stringify(bet),
            headers: bearerAuthHeader(getState),
            success: [
                response => {
                    let result = response.result[0];

                    dispatch({
                        type: betConst.MAKE_BET_SUCCESS,
                        payload: result.balance
                    });

                    dispatch({
                        type: appConst.INFO_MESSAGE,
                        payload: result.message
                    });
                }
            ],
            error: [
                response => {
                    let errors = getErrorsFromResponse(response);

                    dispatch({
                        type: betConst.MAKE_BET_FAILED,
                    });

                    dispatch({
                        type: appConst.ERROR_MESSAGE,
                        payload: errors
                    })
                }
            ]
        })
    });
}

function getOdds(bet) {
    return (dispatch, getState)=> {
        dispatch({
            type: betConst.GET_ODS_REQUEST,
        });

        ajax({
            type: 'POST',
            url: API_ROOT + '/api/bet/odds',
            crossDomain: true,
            dataType: 'json',
            data: JSON.stringify(bet),
            headers: bearerAuthHeader(getState),
            success: [
                response => {
                    dispatch({
                        type: betConst.GET_ODS_SUCCESS,
                        payload: response.result[0]
                    });
                }
            ],
            error: [
                response => {
                    let errors = getErrorsFromResponse(response);

                    dispatch({
                        type: betConst.GET_ODS_FAILED,
                    });

                    dispatch({
                        type: appConst.ERROR_MESSAGE,
                        payload: errors
                    })
                }
            ]
        })
    }
}

function setBalance(amount) {
    return {
        type: betConst.SET_BALANCE,
        payload: amount
    }
}

function requestBalance(id) {
    return (dispatch, getState) => {
        ajax({
            type: 'GET',
            url: API_ROOT + '/api/account/' + id,
            crossDomain: true,
            dataType: 'json',
            headers: bearerAuthHeader(getState),
            success: [
                response => {
                    dispatch(setBalance(response.result[0].balance));
                }
            ],
            error: [
                response => {
                    let errors = getErrorsFromResponse(response);

                    dispatch({
                        type: appConst.ERROR_MESSAGE,
                        payload: errors
                    })
                }
            ]
        })
    }
}

function getBets(page) {
    return getContent(CONTENT_TYPE_BET, '/api/bet', {page: page})
}

export {makeBet, getOdds, getBets, requestBalance, goToBettingPage, clearOdds, setBalance}