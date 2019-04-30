import authReducer from './authReducer';
import userDetailsFetch from './userdetailsReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
        auth: authReducer,
        userDetailsFetch : userDetailsFetch,
        
})

export default rootReducer;

