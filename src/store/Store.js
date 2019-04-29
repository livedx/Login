import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import { rootReducer } from '../reducers';



const composes = compose;
const store = createStore(rootReducer,  applyMiddleware(thunk));


const persistor = persistStore(store);

export {store , persistor}