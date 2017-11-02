import { combineReducers } from 'redux';

import heroesReducer from './heroes';
import mmrReducer from './mmr';
import playerReducer from './player';

const combinedReducer = combineReducers({
	heroes: heroesReducer,
	countriesRank: mmrReducer,
	players: playerReducer
});

export default combinedReducer;