import { HeroConstant } from '../constants/action';
import axios from 'axios';

export default function(state = [], action) {
	switch (action.type) {
		case HeroConstant.FETCH_ALL:
			return [{}];
		case HeroConstant.REMOVE_ALL:
			return [];
		default:
			return state;
	}
}

const fetchHeroes = () => {

};