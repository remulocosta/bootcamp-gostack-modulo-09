import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modeles/rootReducer';
import rootSaga from './modeles/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middleware = [sagaMiddleware];

const store = createStore(rootReducer, middleware);

sagaMiddleware.run(rootSaga);

export default store;
