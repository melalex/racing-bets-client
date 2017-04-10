/**
 * Created by melalex on 4/10/17.
 */

import {loadTranslations, setLocale, syncTranslationWithStore} from 'react-redux-i18n';
import {LANGUAGE_KEY, DEFAULT_LANGUAGE} from '../constants/App'

translationsObject = {
    en: {
        auth: 'Sign in',
        login: 'Login',
        password: 'Password',
        submit: 'Submit'
    },
    ru: {
        auth: 'Вход в систему',
        login: 'Логин',
        password: 'Пароль',
        submit: 'Подтвердить'
    }
};

export default function (store) {
    let language = window.localStorage.getItem(LANGUAGE_KEY) || DEFAULT_LANGUAGE;

    syncTranslationWithStore(store);
    store.dispatch(loadTranslations(translationsObject));
    store.dispatch(setLocale(language));
}