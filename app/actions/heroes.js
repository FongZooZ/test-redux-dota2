import { HeroConstants } from '../constants/action';
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

export const fetchHeroesSuccess = (response) => {
	return {
		type: HeroConstants.FETCH_ALL_SUCCESS,
		payload: response.data
	};
};

export const fetchHeroesError = (err) => {
	return {
		type: HeroConstants.FETCH_ALL_ERROR,
		payload: err
	};
};

export const removeHeroes = () => ({
	type: HeroConstants.REMOVE_ALL
});