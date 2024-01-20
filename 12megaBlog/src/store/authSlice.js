
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false, // user authenticated nahi hai 
    userData: null // abhi koi user data nahi hai


}



const authSlice = createSlice({
    name :"auth",
    initialState,
    reducers: {
        login:(state, action)=>{ // ue ek actions hai 
            state.status = true;
            state.useData = action.payload.useData; // spred kar na jaruri nahi hai wo khud cover kar lenaga rootkit redux
        },
        logout: (state) =>{ // ye bhi ek actions hai 
            state.status = false;
            state.userData = null;
        }
    } //track kare ge to sirf in dono ko 

})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;




