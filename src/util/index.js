/**
 * Created by melalex on 4/10/17.
 */

import dateformat from 'dateformat'
import {I18n} from 'react-redux-i18n'

function fullName(person) {
    return (person === undefined) ? null : person.firstName + ' ' + person.lastName;
}

function basicAuthHeader(login, password, language) {
    return {
        'Authorization': 'Basic ' + window.btoa(login + ':' + password),
        'Accept-Language': language
    };
}

function bearerAuthHeader(getState) {
    return {
        'Authorization': 'Bearer ' + getState().client.accessToken,
        'Accept-Language': getState().app.language
    };
}

function languageHeader(getState) {
    return {'Accept-Language': getState().app.language};
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
    console.log(response);

    if (response.responseText) {
        try {
            return JSON.parse(response.responseText).result.map(e => e.message);
        } catch (e) {
            return [I18n.t('invalidResponse')]
        }
    } else {
        return [I18n.t('clientError')]
    }
}

function route(entity, action) {
    return '/' + entity.toLowerCase() + '/' + action;
}

function calculateAge(birthday) {
    let now = new Date().getYear();
    let birthYear = new Date(birthday).getYear();
    return now - birthYear;
}

function calcOdds(odds) {
    function reduce(numerator, denominator) {
        let gcd = function gcd(a, b) {
            return b ? gcd(b, a % b) : a;
        };
        gcd = gcd(numerator, denominator);
        return [numerator / gcd, denominator / gcd];
    }

    if (odds.prizePool === undefined) {
        return null;
    }

    let num = odds.prizePool - odds.prizePool * odds.commission;
    let den = odds.eventPool;
    if (odds.eventPool !== 0) {
        return reduce(num, den);
    } else {
        return [num, den];
    }
}

function isUnique(arr) {
    let sorted_arr = arr.slice().sort();

    for (let i = 0; i < arr.length - 1; i++) {
        if (sorted_arr[i + 1] === sorted_arr[i]) {
            return false;
        }
    }

    return true;
}

export {
    calcOdds,
    fullName,
    basicAuthHeader,
    bearerAuthHeader,
    languageHeader,
    nowSeconds,
    isExpired,
    dateFromTimestamp,
    dateFromTimestampForm,
    dateTimeFromTimestamp,
    getErrorsFromResponse,
    route,
    calculateAge,
    isUnique
}