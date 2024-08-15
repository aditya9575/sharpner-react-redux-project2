// this file will have the redux related logic because its a general convention to create a seprate folder named store and keep the 
// redux store related logic there 

// here in the store we will be using our redux - toolkit

import { createStore } from "redux";
import { configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth"



// const counterReducer = (state = initialState, action) => {
   
//     if(action.type==="increment"){
// // Why cant we do state.counter++ .(Favourite Interview Question - Why should we not mutate the state) redux -> bugs   
//  // [Remember we must never ever mutate the existing state while working with redux so we can't directly do state.counter++
// //  instead always overwrite it by returning a brand new state object ] 
//         return{
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         };
//     }
//     if(action.type==="decrement"){
//         return{
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//     }
//     // in this case we are handling the data with payloads 
//     if(action.type==="increase"){
//         return{
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         };
//     }
//     if(action.type==="decrease"){
//         return{
//             counter: state.counter - action.amount,
//             showCounter: state.showCounter
//         };
//     }

//     if(action.type === "toggle"){
//         return{
//             showCounter: !state.showCounter,
//             counter:state.counter
//         };
//     }

//     return state;
// };

// const store = createStore(counterReducer);

// with configurestore we can use a single reducer or even multiple reducers 


const store = configureStore({
    reducer: {counter:counterReducer,
        auth:authReducer
    }
});


//now we want to connect the react app with this redux store so we start this by exporting this store as the default export of this file 
//so that we can use this outside of this file and then we will need to provide this store to our react app 
export default store;


// now to proide this store to our react app we go to the highest level of our app -> index.js or main.js and there we -> 
