import { HeroConstants } from '../constants/action';
import axios from 'axios';

export default function(state = [], action) {
	switch (action.type) {
		case HeroConstants.FETCH_ALL:
			return action.payload;
		case HeroConstants.FETCH_ALL_SUCCESS:
			return action.payload;
		case HeroConstants.FETCH_ALL_ERROR:
			return [];
		case HeroConstants.REMOVE_ALL:
			return [];
		default:
			return state;
	}
}