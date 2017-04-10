/**
 * Created by melalex on 4/10/17.
 */

import {ajax} from "jquery";
import {API_ROOT} from  '../constants/Api'
import {refresh} from './Client'
import * as betConst from '../constants/Bet'
import * as appConst from '../constants/App'
import {bearerAuthHeader, getErrorsFromResponse} from "../util/index";


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
            data: bet,
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
            data: bet,
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

export {makeBet, getOdds}