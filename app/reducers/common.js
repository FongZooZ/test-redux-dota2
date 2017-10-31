export default function(state = {}, action) {
	switch (action.type) {
		case 'SHIT_HAPPEN':
			return action.payload;
		default:
			return state;
	}
}