/**
 * Created by melalex on 4/10/17.
 */

import * as actionConst from '../constants/Content'
import Progress from "react-progress-2";
import {CHANGE_STATUS, SCHEDULED} from '../constants/Race'

const initialState = {
    content: [],
    count: 0,
    limit: 20,
    params: {page: 1, status: SCHEDULED},
    fetching: false,
};

export default function content(state = initialState, action) {
    switch (action.type) {
        case CHANGE_STATUS:
            return {...state, info: '', errors: [], params: {page: 1, status: action.payload}};

        case actionConst.GET_REQUEST:
            Progress.show();
            return {...state, fetching: true, params: action.payload};

        case actionConst.GET_SUCCESS:
            Progress.hide();
            return {
                ...state,
                fetching: false,
                content: action.payload.content,
                count: action.payload.count,
                limit: action.payload.limit,
            };

        case actionConst.GET_FAILED:
            Progress.hide();
            return {...state, fetching: false};

        default:
            return state;
    }
};