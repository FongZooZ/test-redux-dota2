import { combineReducers } from 'redux';

import heroesReducer from './heroes';
import commonReducer from './common';

const combinedReducer = combineReducers({
	heroes: heroesReducer,
	common: commonReducer
});

export default combinedReducer;