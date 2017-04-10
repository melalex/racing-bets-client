/**
 * Created by melalex on 4/10/17.
 */

import * as clientConst from '../constants/Client'
import * as appConst from '../constants/App'
import {API_ROOT} from  '../constants/Api'
import {ajax} from 'jquery'
import {push} from 'react-router-redux';
import {basicAuthHeader, isExpired, getErrorsFromResponse, languageHeader} from "../util"


function signIn(login, password) {
    return(dispatch, getState) => {
        dispatch({
            type: clientConst.LOGIN_REQUEST,
            payload: {
                login: login,
                password: password
            }
        });

        let language = getState().app.language;

        ajax({
            type: 'GET',
            url: API_ROOT + '/api/account/login',
            crossDomain: true,
            dataType: 'json',
            headers: basicAuthHeader(login, password, language),
            success: [
                response => {
                    let token = response.result[0];
                    dispatch({
                        type: clientConst.LOGIN_SUCCESS,
                        payload: {
                            tokenType: token.tokenType,
                            accessToken: token.accessToken,
                            expiresIn: token.expiresIn,
                            refreshToken: token.refreshToken,
                        }
                    });
                    dispatch(push('/'));
                }
            ],
            error: [
                response => {
                    let errors = getErrorsFromResponse(response);
                    dispatch({
                        type: clientConst.LOGIN_FAILED,
                        payload: errors
                    })
                }
            ]
        });
    }
}

function signUp(account) {
    return (dispatch, getState) => {
        dispatch({
            type: clientConst.REGISTER_REQUEST,
            payload: account
        });

        ajax({
            type: 'POST',
            url: API_ROOT + '/api/account/register',
            crossDomain: true,
            dataType: 'json',
            data: account,
            headers: languageHeader(getState),
            success: [
                response => {
                    let token = response.result[0];
                    dispatch({
                        type: clientConst.REGISTER_SUCCESS,
                        payload: {
                            tokenType: token.tokenType,
                            accessToken: token.accessToken,
                            expiresIn: token.expiresIn,
                            refreshToken: token.refreshToken,
                        }
                    });
                    dispatch(push('/'));
                }
            ],
            error: [
                response => {
                    let errors = getErrorsFromResponse(response);
                    dispatch({
                        type: clientConst.REGISTER_FAILED,
                        payload: errors
                    })
                }
            ]
        });
    }
}


function signOut() {
    return {
        type: clientConst.LOGOUT,
    }
}

function refresh(next) {
    return (dispatch, getState) => {
        let appUser = getState().client;
        if (isExpired(appUser)) {
            dispatch({
                type: clientConst.REFRESH_REQUEST,
            });

            let refreshToken = appUser.refreshToken;

            ajax({
                type: 'GET',
                url: API_ROOT + '/api/account/refresh/' + refreshToken,
                dataType: 'json',
                headers: languageHeader(getState),
                crossDomain: true,
                success: [
                    response => {
                        let token = response.result[0];
                        dispatch({
                            type: clientConst.REFRESH_SUCCESS,
                            payload: {
                                tokenType: token.tokenType,
                                accessToken: token.accessToken,
                                expiresIn: token.expiresIn,
                                refreshToken: token.refreshToken,
                            }
                        });
                        dispatch(next)
                    }
                ],
                error: [
                    response => {
                        let errors = getErrorsFromResponse(response);
                        dispatch({
                            type: clientConst.REFRESH_FAILED,
                            payload: []
                        });

                        dispatch({
                            type: appConst.ERROR_MESSAGE,
                            payload: errors
                        })
                    }
                ]
            });
        } else {
            dispatch(next)
        }
    }
}

export {signIn, signOut, refresh, signUp};