/**
 * Created by melalex on 4/10/17.
 */

import {setLocale} from 'react-redux-i18n';
import * as actionConst from '../constants/App'

function error(error) {
    return {
        type: actionConst.ERROR_MESSAGE,
        payload: [error]
    }
}

function info(info) {
    return {
        type: actionConst.INFO_MESSAGE,
        payload: info
    }
}

function clean() {
    return {
        type: actionConst.CLEAN_MESSAGE,
    }
}

function changeLanguage(language) {
    return dispatch => {
        dispatch({
            type: actionConst.CHANGE_LANGUAGE,
            payload: language
        });

        dispatch(setLocale(language));
    }
}

export {error, info, clean, changeLanguage}