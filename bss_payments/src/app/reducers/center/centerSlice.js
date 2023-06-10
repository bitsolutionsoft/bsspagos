import { createSlice } from '@reduxjs/toolkit';

const initialState={
    center:"Login"
}

export const centerSlice=createSlice({
    name:"center",
    initialState:initialState,
    reducers:{
        setCenter:(state, action)=>{
            state.center=action.payload.center;
        },
        unSetCenter:(state)=>{
           
            state.center="Login";
         
        }
    }
})
export const {setCenter,unSetCenter}=centerSlice.actions;
export default centerSlice.reducer;