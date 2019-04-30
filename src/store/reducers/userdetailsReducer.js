import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    userDetails: null,
    isLoggedIn: false,
    loading: false
};

const fetchStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
  };

const fetchSuccess = (state, action) => {
    console.log(action)
    return updateObject( state, { 
        userDetails: action.userDetails,
        isLoggedIn: true,
        loading : false    
     } );
  };

  
const fetchFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        isLoggedIn: false,
    });
  }
  
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_USER_DETAILS_START: return fetchStart(state, action);
        case actionTypes.FETCH_USER_DETAILS_SUCCESS: return fetchSuccess(state, action);
        case actionTypes.FETCH_USER_DETAILS_FAIL: return fetchFail(state, action);
        default:
            return state;
    }
  };

export default reducer;