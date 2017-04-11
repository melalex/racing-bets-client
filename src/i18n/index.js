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
        minBet: 'Min bet',
        commission: 'Commission',
        raceType: 'Race type',
        trackCondition: 'Track condition',
        minAge: 'Min age',
        minRating: 'Min rating',
        maxRating: 'Max rating',
        distance: 'Distance',
        na: 'N/A',
        numberPlace: 'Number(Place)',
        horse: 'Horse',
        age: 'Age',
        jockey: 'Jockey',
        trainer: 'Trainer',
        odds: 'Odds',
        header404: "We couldn't find the page..",
        text404: 'Sorry, but the page you are looking for was either not found or does not exist. <br/>'
        + ' Try refreshing the page or click the button below to go back to the Homepage.',
        home404: 'Go to App',
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
        minBet: 'Минимальная ставка',
        commission: 'Комисия',
        raceType: 'Тип заезда',
        trackCondition: 'Состояние трэка',
        minAge: 'Мин. в.',
        minRating: 'Мин. рейт.',
        maxRating: 'Макс. рейт.',
        distance: 'Дистанция',
        na: 'Н/Д',
        numberPlace: 'Номер(Место)',
        horse: 'Лошадь',
        age: 'Возрвст',
        jockey: 'Жокей',
        trainer: 'Тренер',
        odds: 'Коэффициенты',
        header404: 'Не удалось найти страницу ..',
        text404: 'Извините, но страница, которую вы ищете, либо не найдена, либо не существует. <br/>'
        + ' Попробуйте обновить страницу или нажмите кнопку ниже, чтобы вернуться на главную страницу.',
        home404: 'Вернуться на главную',

    }
};

export default function (store) {
    let language = window.localStorage.getItem(LANGUAGE_KEY) || DEFAULT_LANGUAGE;

    syncTranslationWithStore(store);
    store.dispatch(loadTranslations(translationsObject));
    store.dispatch(setLocale(language));
}