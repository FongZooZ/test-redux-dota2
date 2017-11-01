import { combineReducers } from 'redux';

import heroesReducer from './heroes';
// import commonReducer from './common';
import mmrReducer from './mmr';
import { routerReducer } from 'react-router-redux';

const combinedReducer = combineReducers({
	heroes: heroesReducer,
	// common: commonReducer,
	countriesRank: mmrReducer,
	router: routerReducer
});

export default combinedReducer;