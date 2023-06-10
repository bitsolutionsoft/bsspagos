import { createSlice } from '@reduxjs/toolkit';

const initialState={
    open:false
}

export const openMenuSlice=createSlice({
    name:"open",
    initialState:initialState,
    reducers:{
        setOpen:(state, action)=>{
            state.open=action.payload.open;
        },
        unSetOpen:(state)=>{
           
            state.open=false;
         
        }
    }
})
export const {setOpen,unSetOpen}=openMenuSlice.actions;
export default openMenuSlice.reducer;