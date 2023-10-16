import React , { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAdd } from './addUserSlice.js';
import { useNavigate } from 'react-router-dom';

import style from './AddUser.module.css'

function AddUser() {

    const [user , setUser] = useState({
        id: 11,
        name: '',
        username: '',
        phone: '',
        website: '',
    });

    const state = useSelector((state) => state.addUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if(state.loading){
        return (
            <div className={style.loading}>
                loading...
            </div>
        );
    }

    else if(state.error !== ''){
        return (
            <div className={style.error}>
                Error
            </div>
        );
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try{
            await dispatch(fetchAdd(user)).unwrap();
            navigate('/');
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <div className={style["add-user"]}>
            <h1>Add User</h1>
            <form action="" onSubmit={onSubmit}>
                <input type="text" required placeholder="Name" value={user.name} onChange = {(e) => setUser({...user , name: e.target.value}) } />
                <input type="text" required placeholder="User Name" value={user.username} onChange = {(e) => setUser({...user , username: e.target.value}) } />
                <input type="text" required placeholder="Phone" value={user.phone} onChange = {(e) => setUser({...user , phone: e.target.value}) } />
                <input type="text" required placeholder="website" value={user.website} onChange = {(e) => setUser({...user , website: e.target.value}) } />
                <input type="submit" className={style.button}/>
            </form>
        </div>
    );
}

export default AddUser;