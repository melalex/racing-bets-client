/**
 * Created by melalex on 4/10/17.
 */

import * as actionConst from '../constants/Bet'
import Progress from "react-progress-2";

const initialState = {
    odds: {},
    balance: 0,
    targetRace: {},
    fetching: false,
};

export default function bet(state = initialState, action) {
    switch (action.type) {
        case actionConst.CLEAR_ODDS:
            return {...state, odds: {}};

        case actionConst.SET_TARGET:
            return {...state, targetRace: action.payload};

        case actionConst.MAKE_BET_REQUEST:
        case actionConst.GET_ODS_REQUEST:
            Progress.show();
            return {...state, fetching: true};

        case actionConst.SET_BALANCE:
            Progress.hide();
            return {...state, fetching: false, balance: action.payload};

        case actionConst.MAKE_BET_SUCCESS:
            Progress.hide();
            return {...state, fetching: false, balance: action.payload};

        case actionConst.GET_ODS_SUCCESS:
            Progress.hide();
            return {...state, fetching: false, odds: action.payload};

        case actionConst.MAKE_BET_FAILED:
        case actionConst.GET_ODS_FAILED:
            Progress.hide();
            return {...state, fetching: false};

        default:
            return state;
    }
};