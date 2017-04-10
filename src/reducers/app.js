/**
 * Created by melalex on 4/10/17.
 */

import * as actionConst from '../constants/App'

const initialState = {
    language: 'en',
    errors: [],
    info: ''
};

export default function app(state = initialState, action) {
    switch (action.type) {
        case actionConst.INFO_MESSAGE:
            return {...state, info: action.payload};

        case actionConst.ERROR_MESSAGE:
            return {...state, errors: action.payload};

        case actionConst.CLEAN_MESSAGE:
            return {...state, info: '', errors: []};

        case actionConst.CHANGE_LANGUAGE:
            return {...state, language: action.payload};

        default:
            return state;
    }
};