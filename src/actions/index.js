import { CALL_API } from 'redux-api-middleware';

export const FETCH_TEMPERATURE = 'FETCH_TEMPERATURE';
export const FETCH_TEMPERATURE_SUCCESS = 'FETCH_TEMPERATURE_SUCCESS';
export const FETCH_TEMPERATURE_FAILURE = 'FETCH_TEMPERATURE_FAILURE';

export const fetchTemperature = () => ({
	[CALL_API]: {
		types: [FETCH_TEMPERATURE, FETCH_TEMPERATURE_SUCCESS, FETCH_TEMPERATURE_FAILURE],
		endpoint: 'http://coverks.dev/index.php?rest_route=/wp/v2/sensor-api/40',
		method: 'GET',
	}
});
