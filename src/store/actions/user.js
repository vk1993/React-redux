
import axios from 'axios';
import * as actionTypes from './actionTypes';


export const userDetailsFetchStart = () => {
    console.log("starrted");
    return {
        type: actionTypes.FETCH_USER_DETAILS_START
    };
};

export const userDetailsFetchSuccess = (userData) => {
    console.log(userData);
        return {
            type: actionTypes.FETCH_USER_DETAILS_SUCCESS,
            userData:userData
        };
    };

export const userDetailsFetchFail = (err) =>{
    console.log(err);
    return {
        type: actionTypes.FETCH_USER_DETAILS_FAIL,
        error: err
    }
}

export const userDetailsFetch = (isLoggedIn,username) =>{
    return (dispatch) =>{
        dispatch(userDetailsFetchStart);
        const inputData = {
            username: username,
            isLoggedIn: isLoggedIn
        };
        
        console.log(inputData);
                axios.get('product.json').then(response =>{
                        console.log(response);
                        dispatch(userDetailsFetchSuccess(response))
                }).catch(err=>{
                    console.log(err);
                    dispatch(userDetailsFetchFail(err));
                })
            
    }
}