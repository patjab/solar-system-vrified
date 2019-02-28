import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import ReduxWebSocketBridge from 'redux-websocket-bridge';

const createStoreWithMiddleware = applyMiddleware(
        ReduxWebSocketBridge('ws://localhost:9090/')
    )(createStore);

export default createStoreWithMiddleware(rootReducer);