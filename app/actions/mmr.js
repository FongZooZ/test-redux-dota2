import { MMRConstants, Common } from '../constants/action';
import axios from 'axios';
import { apiUrl } from '../core/config';

export const fetchCountriesRank = () => {
	return (dispatch) => {
		dispatch({type: MMRConstants.FETCH_COUNTRIES, payload: [], loading: true});

		const request = axios.get(`${apiUrl}/distributions`, {withCredentials: true});

		return request.then(
			response => dispatch(fetchCountriesRankSuccess(response)),
			err => dispatch(fetchCountriesRankError(err))
		);
	};
};

const fetchCountriesRankSuccess = (response) => {
	return {
		type: MMRConstants.FETCH_COUNTRIES_SUCCESS,
		payload: response.data.country_mmr.rows
	};
};

const fetchCountriesRankError = (err) => {
	return {
		type: Common.SHIT_HAPPEN,
		payload: err
	};
};