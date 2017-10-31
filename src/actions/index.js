import { CALL_API } from 'redux-api-middleware';

export const FETCH_ACTIVITIES = 'FETCH_ACTIVITIES';
export const FETCH_ACTIVITIES_SUCCESS = 'FETCH_ACTIVITIES_SUCCESS';
export const FETCH_ACTIVITIES_FAILURE = 'FETCH_ACTIVITIES_FAILURE';

export const fetchActivities = () => ({
	[CALL_API]: {
		types: [ FETCH_ACTIVITIES, FETCH_ACTIVITIES_SUCCESS, FETCH_ACTIVITIES_FAILURE ],
		endpoint: 'https://app.coverks.no/api/buddypressread/activity_get_activities/',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Basic bW9ydGVuOnlra0YgZ3IzOSA0YzlXIEdSZTMgNkFMcyBGRXZx',
		},
		method: 'GET',
	}
});
