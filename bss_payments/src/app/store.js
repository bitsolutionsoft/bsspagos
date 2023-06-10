import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../app/reducers/user/userSlice'
import centerReducer from "../app/reducers/center/centerSlice";
import openMenuReducer from "../app/reducers/openMenu.js/openMenuSlice";
import grantedReducer from "./reducers/granted/grantedSlice";

export default configureStore({
    reducer:{
        user:userReducer,
        center:centerReducer,
        open:openMenuReducer,
        granted:grantedReducer

    }
})