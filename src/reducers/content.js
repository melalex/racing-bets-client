/**
 * Created by melalex on 4/10/17.
 */

import * as actionConst from '../constants/Content'
import Progress from "react-progress-2";

const initialState = {
    content: [],
    count: 0,
    limit: 20,
    params: {page: 1},
    fetching: false,
};

export default function content(state = initialState, action) {
    switch (action.type) {
        case actionConst.GET_REQUEST:
            Progress.show();
            return {...state, fetching: true, params: action.payload.params};

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