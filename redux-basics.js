const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    user: {},
    loggedIn: false
  }
  
//reducer
const rootreducer = (state= initialState,action) =>{
   if(action.type === 'LOGIN'){
       return {
           ...state,  
           ...{user: action.payload, loggedIn: true}
       }
   }
   if(action.type === 'LOGOUT'){
       return {
           ...state, user: {}, loggedIn: false
       }
   }
   
    return state;
}
//actions

const logout = {
    type:'LOGOUT'
}

const login = {
    type: 'LOGIN' , payload : {
        user: {
            name : "Visal",
            email : "visalraooro"
        }
    } 
}

//store
const store = createStore(rootreducer);
console.log(store.getState());

//subscription

store.subscribe(()=>{
    console.log('[subscription]',store.getState());
})

//dispatchaction

store.dispatch(login)

setTimeout(()=>{
    
  console.log("logout")
  store.dispatch(logout)
  console.log(store.getState())
},6000);




