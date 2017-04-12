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
        participant: 'Participant',
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
        makeBet: 'Make bet',
        desc: 'Description',
        showDesc: 'Your horse must finish 1st, 2nd, or 3rd; modest payoffs',
        placeDesc: 'Your horse must finish 1st or 2nd; payoffs better than to show',
        winDesc: 'Your horse must finish 1st; payoff determined by the win odds',
        quinellaDesc: 'Your horses must finish 1st and 2nd in either order; a normal play is to box three horses',
        exactaDesc: "Your horses must finish 1st and 2nd in exact order; riskier bet that can pay a little or a lot, depending on the horses’ odds",
        trifectaDesc: 'Your horses must finish 1st, 2nd, and 3rd in exact order; can be expensive to play if you use a lot of horses',
        superfectaDesc: 'Your horses must finish 1st, 2nd, 3rd, and 4th; hard to bet unless you have a sizeable bankroll; big payoff possible',
        suggested: 'Suggested Plays (Based upon a $100 Bankroll)',
        showSuggested: '$6 per horse',
        placeSuggested: '$5 per horse',
        winSuggested: '$4 per horse',
        quinellaSuggested: '$2 quinella box using three horses costs $6',
        exactaSuggested: '$1 exacta box using three horses costs $6; $1 exacta box keying one horse with three horses costs $6',
        trifectaSuggested: '$1 trifecta keying one horse to win over three horses costs $6; $1 trifecta keying two horses to win over four horses costs $12',
        superfectaSuggested: '$1 superfecta keying one horse to win over four horses costs $24',
        unique: 'Select different participants',
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
        participant: 'Участник',
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
        makeBet: 'Сделать ставку',
        desc: 'Описание',
        showDesc: 'Ваша лошадь должна финишировать 1, 2 или 3; Скромные выплаты ',
        placeDesc: 'Ваша лошадь должна финишировать 1 или 2; Выигрыши лучше, чем показывать ',
        winDesc: 'Ваша лошадь должна финишировать 1; Выигрыш, определяемый выигрышными шансами ',
        quinellaDesc: 'Ваши лошади должны финишировать 1 и 2 в любом порядке; Нормальная игра состоит в том, чтобы положить три лошади',
        exactaDesc: 'Ваши лошади должны закончить 1-й и 2-й в точном порядке, более рискованные ставки, которые могут заплатить немного или много, в зависимости от шансов лошадей',
        trifectaDesc: 'Ваши лошади должны закончить 1, 2 и 3 в точном порядке; Может быть дорогим играть, если вы используете много лошадей',
        superfectaDesc: 'Ваши лошади должны финишировать 1, 2, 3 и 4; Трудно делать ставки, если у вас нет значительного банкролла; Возможно большое вознаграждение ',
        suggested: 'Предлагаемые пьесы (на основе банкролла в размере 100 долларов США)',
        showSuggested: '$6 за лошадь',
        placeSuggested: '$5 за лошадь',
        winSuggested: '$4 за лошадь',
        quinellaSuggested: '$2 quinella box с тремя лошадьми стоит $ 6',
        exactaSuggested: '$1 exacta с тремя лошадьми стоит $ 6; $ 1 точная коробка с одним конем с тремя лошадьми стоит $ 6 ',
        trifectaSuggested: '$1 trifecta, вводящий одну лошадь, чтобы выиграть более трех лошадей, стоит 6 долларов; $ 1 trifecta keying две лошади, чтобы выиграть четыре лошади стоит $ 12 ',
        superfectaSuggested: '$1 superfecta вводя одну лошадь, чтобы выиграть более четырех лошадей стоит $ 24',
        unique: 'Выберите разных участников',
    }
};

export default function (store) {
    let language = window.localStorage.getItem(LANGUAGE_KEY) || DEFAULT_LANGUAGE;

    syncTranslationWithStore(store);
    store.dispatch(loadTranslations(translationsObject));
    store.dispatch(setLocale(language));
}