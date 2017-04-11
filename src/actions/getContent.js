/**
 * Created by melalex on 4/10/17.
 */

import {ajax} from "jquery"
import {API_ROOT} from  '../constants/Api'
import {GET_REQUEST, GET_SUCCESS, GET_FAILED} from '../constants/Content'
import {ERROR_MESSAGE} from '../constants/App'
import {getErrorsFromResponse, bearerAuthHeader} from "../util";

export default function get(path, params) {
    return (dispatch, getState) => {
        dispatch({
            type: GET_REQUEST,
            payload: params
        });

        ajax({
            type: 'GET',
            url: API_ROOT + path,
            crossDomain: true,
            dataType: 'json',
            headers: bearerAuthHeader(getState),
            data: params,
            success: [
                response => {
                    dispatch({
                        type: GET_SUCCESS,
                        payload: {
                            count: response.count,
                            limit: response.limit,
                            content: response.result
                        }
                    })
                }
            ],
            error: [
                response => {
                    let errors = getErrorsFromResponse(response);
                    dispatch({
                        type: GET_FAILED,
                    });

                    dispatch({
                        type: ERROR_MESSAGE,
                        payload: errors
                    })
                }
            ]
        });
    }
}