import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { Provider} from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import RootRouter from './component/router';
//import createReducer from './reducers'
//import  rootSaga from './sagas';


const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//     createReducer(undefined),
//     applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(rootSaga);

const render =  (Component) => {
    ReactDOM.render(
        <AppContainer>
                <Component/>
        </AppContainer>
            ,
        document.getElementById('container')
        )
};
render(RootRouter);

if (module.hot) {
    module.hot.accept();
}




