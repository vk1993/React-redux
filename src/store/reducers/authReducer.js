import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  username: null,
  error:null,
  isLoggedIn: false,
  loading : false
};  

const authStart = ( state, action ) => {
  return updateObject( state, { error: null, loading: true } );
};

const authSuccess = (state, action) => {
  console.log(action)
  return updateObject( state, { 
   username: action.username,
   error:null,
   isLoggedIn: true,
   loading : false    
   } );
};

const authFail = (state, action) => {
  return updateObject( state, {
      error: action.error,
      isLoggedIn: false,
  });
}

const authlogOut = (state,action) =>{
  return updateObject( state,{
    username: null,
    error:null,
    isLoggedIn: false,
    loading : false
  })
}

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
      case actionTypes.AUTH_START: return authStart(state, action);
      case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
      case actionTypes.AUTH_FAIL: return authFail(state, action);
      case actionTypes.AUTH_LOGOUT: return authlogOut(state, action);
      default:
          return state;
  }
};

export default reducer;



        
// axios.get("user.json")
//   .then((response) => {
//     dispatch({ type: action, payload: state }) //Change
//   }).catch((err) => {
//     dispatch({type: Actions.FETCH_DATA_ERROR, payload: err})
//   })