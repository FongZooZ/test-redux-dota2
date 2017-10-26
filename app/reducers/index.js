import { combineReducers } from 'redux';

import heroesReducer from './heroes';

const combinedReducer = combineReducers({
	heroes: heroesReducer
});

export default combinedReducer;