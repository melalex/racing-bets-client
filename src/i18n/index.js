/**
 * Created by melalex on 4/10/17.
 */

import {loadTranslations, setLocale, syncTranslationWithStore} from 'react-redux-i18n';
import {LANGUAGE_KEY, DEFAULT_LANGUAGE} from '../constants/App'

const translationsObject = {
    en: {
        invalidResponse: 'Invalid response',
        clientError: 'Error during sending request to server',
        auth: 'Sign in',
        logout: 'Logout',
        register: 'Sign up',
        firstName: 'First name',
        lastName: 'Last name',
        login: 'Login',
        email: 'Email',
        password: 'Password',
        confirmPassword: 'Confirm password',
        submit: 'Submit',
        confirmPasswordError: 'Password and confirm password should be same',
        scheduled: 'Scheduled races',
        finished: 'History',
        bets: 'My bets',
        noResult: 'Nothing to show',
        raceId: 'Race id',
        betType: 'Bet type',
        betStatus: 'Bet status',
        betSize: 'Bet size',
        participants: 'Participants numbers',
        search: 'Search',
        date: 'Date',
        raceName: 'Race name',
    },
    ru: {
        invalidResponse: 'Неверный формат ответа сервера',
        clientError: 'Ошибка при отправке запроса на сервер',
        auth: 'Вход',
        logout: 'Выход',
        register: 'Регистарция',
        firstName: 'Имя',
        lastName: 'Фамилия',
        login: 'Логин',
        email: 'Эл. адрес',
        password: 'Пароль',
        confirmPassword: 'Подтверждение пароля',
        submit: 'Подтвердить',
        confirmPasswordError: 'Пароль и его подтверждение должны быть одинаковыми',
        scheduled: 'Запланированые заезды',
        finished: 'История',
        bets: 'Мои ставки',
        noResult: 'Ничего не найдено',
        raceId: 'Id заезда',
        betType: 'Тип ставки',
        betStatus: 'Статус ставки',
        betSize: 'Размер ставки',
        participants: 'Номера участников',
        search: 'Поиск',
        date: 'Дата',
        raceName: 'Название заезда',
    }
};

export default function (store) {
    let language = window.localStorage.getItem(LANGUAGE_KEY) || DEFAULT_LANGUAGE;

    syncTranslationWithStore(store);
    store.dispatch(loadTranslations(translationsObject));
    store.dispatch(setLocale(language));
}