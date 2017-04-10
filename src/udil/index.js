/**
 * Created by melalex on 4/10/17.
 */

import dateformat from 'dateformat'

function fullName(person) {
    return (person === undefined) ? null : person.firstName + ' ' + person.lastName;
}

function basicAuthHeader(login, password) {
    return {'Authorization': 'Basic ' + window.btoa(login + ':' + password)};
}

function bearerAuthHeader(getState) {
    return {'Authorization': 'Bearer ' + getState().client.accessToken};
}

function nowSeconds() {
    return new Date().getTime();
}

function isExpired(appUser) {
    return appUser.expiresIn !== 0 && (appUser.expiresIn + 60) < nowSeconds();
}

function dateFromTimestamp(timestamp) {
    return dateformat(timestamp ? new Date(timestamp) : new Date(), "mmmm dS, yyyy");
}

function dateFromTimestampForm(timestamp) {
    return dateformat(timestamp ? new Date(timestamp) : new Date(), "mm/dd/yyyy");
}

function dateTimeFromTimestamp(timestamp) {
    return dateformat(timestamp ? new Date(timestamp) : new Date(), "mm/dd/yyyy HH:mm");
}

function getErrorsFromResponse(response) {
    if (response.responseText) {
        try {
            return JSON.parse(response.responseText).result.map(e => e.message);
        } catch (e) {
            // TODO: i18n this
            return "Invalid response"
        }
    } else {
        return response.statusText
    }
}

function route(entity, action) {
    return '/' + entity.toLowerCase() + '/' + action;
}

export {
    fullName,
    basicAuthHeader,
    bearerAuthHeader,
    nowSeconds,
    isExpired,
    dateFromTimestamp,
    dateFromTimestampForm,
    dateTimeFromTimestamp,
    getErrorsFromResponse,
    route
}