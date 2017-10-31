import {
	FETCH_ACTIVITIES,
	FETCH_ACTIVITIES_FAILURE,
	FETCH_ACTIVITIES_SUCCESS,
} from '../actions';

const INITIAL_STATE = {
	sensors: {
		outside: {
			temperature: 0,
			humidity: 0,
		},
		error: null,
		loading: false
	}
};

export default function( state = INITIAL_STATE, action ) {
	let error;
	console.log( action );
	switch ( action.type ) {

		case FETCH_ACTIVITIES:
			return {
				...state,
				sensors: {
					...state['sensors'],
					error: null,
					loading: true
				}
			};

		case FETCH_ACTIVITIES_FAILURE:
			return {
				...state,
				sensors: {
					...state['sensors'],
					outside: {
						temperature: action.payload.telldus.temperature,
						humidity: action.payload.telldus.humidity,
					},
					error: null,
					loading: false
				}
			};

		case FETCH_ACTIVITIES_SUCCESS:
			error = action.payload.data || { message: action.payload.message };
			return {
				...state,
				sensors: {
					...state['sensors'],
					error: error,
					loading: false
				}
			};
		default:
			return state;
	}
}