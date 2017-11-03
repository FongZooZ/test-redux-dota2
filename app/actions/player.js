import axios from 'axios';

import { PlayerConstants } from '../constants/action';
import { apiUrl } from '../core/config';

export const searchPlayer = (q) => {
	return (dispatch) => {
		dispatch({type: PlayerConstants.SEARCH_PLAYER, payload: [], loading: true});

		const request = axios.get(`${apiUrl}/search?q=${q}`, {withCredentials: true});

		return request.then(
			response => dispatch(searchPlayerSuccess(response)),
			err => dispatch(searchPlayerFailed(err))
		);
	};
};

export const getPlayerDetail = (accountId) => {
	return (dispatch) => {

	};
};

const searchPlayerSuccess = (response) => {
	return {
		type: PlayerConstants.SEARCH_PLAYER_SUCCESS,
		payload: response.data,
		loading: false
	};
};

const searchPlayerFailed = (err) => {
	return {
		type: PlayerConstants.SEARCH_PLAYER_FAILED,
		payload: err,
		loading: false
	};
};