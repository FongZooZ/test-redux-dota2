export default function(state = [], action) {
	switch (action.type) {
		case 'SHIT_HAPPEN':
			return Array.isArray(action.error) ? action.error : [action.error];
		default:
			return state;
	}
}