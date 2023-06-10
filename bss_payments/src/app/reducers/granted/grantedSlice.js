import { createSlice } from "@reduxjs/toolkit";

const initialState={
    grantedList: []
}

export const grantedSlice=createSlice({
    name:"granted",
    initialState:initialState,
    reducers:{
        addGrantedToList:(state,action)=>{
           state.grantedList=[...action.payload];
        
        },
        removeGrantedToList:(state)=>{
            state.grantedList=[];
            
        },
     
    }
})
export const {addGrantedToList,removeGrantedToList}=grantedSlice.actions;
export default grantedSlice.reducer;