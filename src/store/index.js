/**
 * Created by melalex on 4/10/17.
 */

import rootReducer from '../reducers'
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'

function configureStore(browserHistory) {
    const createStoreWithMiddleware = applyMiddleware(thunk, logger, routerMiddleware(browserHistory))(createStore);
    return createStoreWithMiddleware(rootReducer);
}

export default configureStore