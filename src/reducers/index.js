import { combineReducers } from 'redux';
import datesReducer from './datesReducer';
import validateAddDateFormReducer from './validateAddDateFormReducer';

const rootReducer = combineReducers( {
    dates: datesReducer,
    error: validateAddDateFormReducer
} );

export default rootReducer;