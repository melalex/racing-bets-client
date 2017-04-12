/**
 * Created by melalex on 4/10/17.
 */

import * as actionConst from '../constants/Client'
import Progress from "react-progress-2";

const nonAuth = {
    id: 0,
    tokenType: 'jwt',
    accessToken: '',
    expiresIn: 0,
    refreshToken: '',
    isAuthenticated: false,
    fetching: false,
    login: '',
};

const initialState = JSON.parse(window.localStorage.getItem(actionConst.APP_USER_KEY)) || nonAuth;

export default function client(state = initialState, action) {
    switch (action.type) {
        case actionConst.REGISTER_REQUEST:
        case actionConst.LOGIN_REQUEST:
            Progress.show();
            return {...state, fetching: true, login: action.payload.login};

        case actionConst.REFRESH_REQUEST:
            Progress.show();
            return {...state, fetching: true};

        case actionConst.REGISTER_SUCCESS:
        case actionConst.REFRESH_SUCCESS:
        case actionConst.LOGIN_SUCCESS:
            Progress.hide();
            let nextState = {
                ...state,
                fetching: false,
                isAuthenticated: true,
                errors: [],
                id: action.payload.id,
                tokenType: action.payload.tokenType,
                accessToken: action.payload.accessToken,
                expiresIn: action.payload.expiresIn,
                refreshToken: action.payload.refreshToken,
            };
            window.localStorage.setItem(actionConst.APP_USER_KEY, JSON.stringify(nextState));
            return nextState;

        case actionConst.REGISTER_FAILED:
        case actionConst.REFRESH_FAILED:
        case actionConst.LOGIN_FAILED:
            Progress.hide();
            window.localStorage.removeItem(actionConst.APP_USER_KEY);
            return nonAuth;

        case actionConst.LOGOUT:
            window.localStorage.removeItem(actionConst.APP_USER_KEY);
            return nonAuth;

        default:
            return state;
    }

};