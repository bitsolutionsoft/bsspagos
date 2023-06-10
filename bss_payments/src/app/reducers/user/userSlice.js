import { createSlice } from '@reduxjs/toolkit';

const initialState={
    idempleado:0,
    nombre:"",
    apellido:"",
    idusuario:"",
    token:"",
    isLogin:false
}

export const userSlice=createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        setUser:(state, action)=>{
            state.idempleado=action.payload.idempleado;
            state.nombre=action.payload.nombre;
            state.apellido=action.payload.apellido;
            state.idusuario=action.payload.idusuario;
            state.token=action.payload.token;
            state.isLogin=action.payload.isLogin;
        },
        unSetUser:(state)=>{
            state.idempleado=0;
            state.nombre="";
            state.apellido="";
            state.idusuario="";
            state.token="";
            state.isLogin=false;
        }
    }
})
export const {setUser,getUser,unSetUser}=userSlice.actions;
export default userSlice.reducer;