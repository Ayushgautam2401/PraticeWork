import { createStore, compose, applyMiddleware } from 'redux';
import rootReducers from './rootReducers';
import createSagaMiddleware from 'redux-saga';
import fetchPostsSaga from './Saga/postSaga';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducers, composeEnhancer(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(fetchPostsSaga)
export default store;
