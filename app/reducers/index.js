import { combineReducers } from 'redux';

import heroesReducer from './heroes';
// import commonReducer from './common';
import mmrReducer from './mmr';

const combinedReducer = combineReducers({
	heroes: heroesReducer,
	// common: commonReducer,
	countriesRank: mmrReducer
});

export default combinedReducer;