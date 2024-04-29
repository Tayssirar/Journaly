import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {thunk} from 'redux-thunk';
import { AuthReducer } from './reducers/AuthReducer';
import { toggleMenu } from './reducers/SideBarReducer';

const middleware = applyMiddleware(thunk);

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
     toggleMenu,
    auth: AuthReducer,
	
});

export const store = createStore(reducers,  composeEnhancers(middleware));
