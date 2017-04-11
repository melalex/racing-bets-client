/**
 * Created by melalex on 4/10/17.
 */

import * as actionConst from '../constants/App'
import {LANGUAGE_KEY, DEFAULT_LANGUAGE} from '../constants/App'

const initialState = {
    language: window.localStorage.getItem(LANGUAGE_KEY) || DEFAULT_LANGUAGE,
    errors: [],
    info: ''
};

export default function app(state = initialState, action) {
    switch (action.type) {

        case actionConst.INFO_MESSAGE:
            return {...state, info: action.payload, errors: []};

        case actionConst.ERROR_MESSAGE:
            return {...state, errors: action.payload, info: ''};

        case actionConst.CLEAN_MESSAGE:
            return {...state, info: '', errors: []};

        case actionConst.CHANGE_LANGUAGE:
            window.localStorage.setItem(LANGUAGE_KEY, action.payload);
            return {...state, language: action.payload};

        default:
            return state;
    }
};