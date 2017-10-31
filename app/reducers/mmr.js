import { MMRConstants } from '../constants/action';

export default function(state = [], action) {
	switch (action.type) {
		case MMRConstants.FETCH_COUNTRIES:
			return action.payload;
		case MMRConstants.FETCH_COUNTRIES_SUCCESS:
			return action.payload;
		default:
			return state;
	}
}