// this file will have the redux related logic because its a general convention to create a seprate folder named store and keep the 
// redux store related logic there 

import { createStore } from "redux";

const initialState = { counter: 0 };

const counterReducer = (state = initialState, action) => {
   
    if(action.type==="increment"){
        return{
            counter: state.counter + 1,
        };
    }
    if(action.type==="decrement"){
        return{
            counter: state.counter - 1,
        };
    }
    if(action.type==="IncrementBy5"){
        return{
            counter: state.counter + 5,
        };
    }
    if(action.type==="DecremenentBy5"){
        return{
            counter: state.counter - 5,
        };
    }

    return state;
};

const store = createStore(counterReducer);

//now we want to connect the react app with this redux store so we start this by exporting this store as the default export of this file 
//so that we can use this outside of this file and then we will need to provide this store to our react app 
export default store;


// now to proide this store to our react app we go to the highest level of our app -> index.js or main.js and there we -> 
