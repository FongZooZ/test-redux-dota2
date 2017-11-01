import { PlayerConstants } from '../constants/action';

export default function(state = [], action) {
	switch (action.type) {
		case PlayerConstants.SEARCH_PLAYER:
			return action.payload;
		case PlayerConstants.SEARCH_PLAYER_SUCCESS:
			return action.payload;
		case PlayerConstants.SEARCH_PLAYER_FAILED:
			return [];
		default:
			return state;
	}
}