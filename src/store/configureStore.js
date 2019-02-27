import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import ReduxWebSocketBridge from 'redux-websocket-bridge';

const createStoreWithMiddleware = applyMiddleware(
        ReduxWebSocketBridge('ws://10.39.105.67:9090/')
    )(createStore);

export default createStoreWithMiddleware(rootReducer);