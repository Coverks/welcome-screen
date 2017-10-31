import { combineReducers } from 'redux';
import telldus from './telldus';

const rootReducer = combineReducers({
	telldus: telldus,
});

export default rootReducer;