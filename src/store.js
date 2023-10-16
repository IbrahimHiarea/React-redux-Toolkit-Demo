import { configureStore } from "@reduxjs/toolkit";
import allUsersReducer from './features/AllUsers/allUsersSlice';
import getUserReducer from "./features/GetUser/getUserSlice";
import deleteUserReducer from "./features/DeleteUser/deleteUserSlice";
import addUserReducer from "./features/AddUser/addUserSlice";

const store = configureStore({
    reducer: {
        allUsers: allUsersReducer,
        getUser: getUserReducer,
        deleteUser: deleteUserReducer,
        addUser: addUserReducer,
    }
})

export default store;