import React from 'react';
import { Navigate, Outlet, Route , Routes } from 'react-router-dom';

import AllUsers from './features/AllUsers/AllUsers';
import GetUser from './features/GetUser/GetUser';
import DeleteUser from './features/DeleteUser/DeleteUser';
import AddUser from './features/AddUser/AddUser';

import './App.css'

function App() {

    return (
        <Routes>

            {/* all users */}
            <Route path='/' element={ <AllUsers/> }/>

            {/* get user */}
            <Route path='/:id' element={ <GetUser/> }/>

            {/* delete user */}
            <Route path='/delete/:id' element={ <DeleteUser/> }/>

            {/* add user */}
            <Route path='/add' element={ <AddUser/> }/>

        </Routes>
    );
}

export default App;
