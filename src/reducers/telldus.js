import {
	FETCH_TEMPERATURE,
	FETCH_TEMPERATURE_FAILURE,
	FETCH_TEMPERATURE_SUCCESS,
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
	switch ( 'action', action.type ) {

		case FETCH_TEMPERATURE:
			return {
				...state,
				sensors: {
					...state['sensors'],
					error: null,
					loading: true
				}
			};

		case FETCH_TEMPERATURE_SUCCESS:
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

		case FETCH_TEMPERATURE_FAILURE:
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