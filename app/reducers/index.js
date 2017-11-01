import { combineReducers } from 'redux';

import heroesReducer from './heroes';
// import commonReducer from './common';
import mmrReducer from './mmr';
import playerReducer from './player';

const combinedReducer = combineReducers({
	heroes: heroesReducer,
	// common: commonReducer,
	countriesRank: mmrReducer,
	players: playerReducer
});

export default combinedReducer;