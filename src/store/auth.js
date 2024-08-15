import { createSlice } from "@reduxjs/toolkit";



// this wants an object as argument and with this createSlice we are creating a slice of our global state and we can create different 
// slices may be in different files if the data is not related to each other
// every slice needs a name , initial state , reducers-> which is an object of all the reducers this state slice needs 
// this createSlice method of our toolkit enables a feature of automatically identifying which reducers are triggered so we in the end
// don't need to write our if checks anymore 



const initialAuthState = {
    isAuthenticated:false
}
const authSlice = createSlice({
   name: "authentication",
   initialState:initialAuthState,
   reducers:{
    login(state){
        state.isAuthenticated = true;
    },
    logout(state){
        state.isAuthenticated = false;
    },

   }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;