
import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    console.log("starrted");
    return {
        type: actionTypes.AUTH_START
    };
};

// export const authSuccess = (token, userId) => {
//     return {
//         type: actionTypes.AUTH_SUCCESS,
//         idToken: token,
//         userId: userId
//     };
// };
export const authSuccess = (authData) => {
    console.log(authData);
        return {
            type: actionTypes.AUTH_SUCCESS,
            authData:authData 
        };
    };
    
export const authFail = (error) => {
   console.log(error)
    return {
        type: actionTypes.AUTH_FAIL,
        error: error   
    };
};

 export const logout = () =>{
     return{
        type: actionTypes.AUTH_LOGOUT
     };
 }

export const auth = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            username: username,
            password: password,
            isLoggedIn: false
        };
        
        axios.get('users.json').then(response=>{
            response.data.map(data =>{
                if(data.username == authData.username && data.password === authData.password){
                    dispatch(authSuccess(authData));
                }else{
                    dispatch(authFail("data wroung"));
                }
            })
        }).catch((err)=>{
            console.log(err);
            dispatch(authFail(err));
        })

        // let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyB5cHT6x62tTe-g27vBDIqWcwQWBSj3uiY';
        // if (!isSignup) {
        //     url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB5cHT6x62tTe-g27vBDIqWcwQWBSj3uiY';
        // }
        // axios.post(url, authData)
        //     .then(response => {
        //         console.log(response);
        //         dispatch(authSuccess(response.data.idToken, response.data.localId));
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         dispatch(authFail(err));
        //     });
    };
};