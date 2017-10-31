import { HeroConstants, Common } from '../constants/action';
import axios from 'axios';
import { apiUrl } from '../core/config';

export const fetchHeroes = () => {
	return (dispatch) => {
		dispatch({type: HeroConstants.FETCH_ALL, payload: [], loading: true});

		const request = axios.get(`${apiUrl}/heroes`, {withCredentials: true});

		return request.then(
			response => dispatch(fetchHeroesSuccess(response)),
			err => dispatch(fetchHeroesError(err))
		);
	};
};

const fetchHeroesSuccess = (response) => {
	return {
		type: HeroConstants.FETCH_ALL_SUCCESS,
		payload: response.data
	};
};

const fetchHeroesError = (err) => {
	return {
		type: Common.SHIT_HAPPEN,
		payload: err
	};
};

export const removeHeroes = () => ({
	type: HeroConstants.REMOVE_ALL
});